import launchesMongo from './launches.mongo';
import launchesModel from './launches.mongo';
import planetsMongo from './planets.mongo';
import axios from 'axios';

let DEFAULT_FLIGHT_NUMBER = 100;

const launch = {
  flightNumber: 100, //flight_number,
  mission: 'Komodo Dragon', //name
  rocket: 'Falcon 9', //rocket_name,
  launchDate: new Date('Dec 17, 2030'), //date_local
  target: 'Kepler-1410 b', //not applicable
  customers: ['NASA', 'SpaceX'], //payload.customers for each payload
  upcoming: true, // upcoming
  success: true, // success
};

saveLaunch(launch);

const SPACEX_API_URL = 'https://api.spacexdata.com/v4/launches/query';

async function populateLaunches() {
  console.log('Loading data...');
  const res = await axios.post(SPACEX_API_URL, {
    query: {},
    options: {
      pagination: false,
      populate: [
        {
          path: 'rocket',
          select: {
            name: 1,
          },
        },
        {
          path: 'payloads',
          select: {
            'customers': 1,
          },
        },
      ],
    },
  });
  const launchDocs = res.data.docs;
  for(const launchDoc of launchDocs) {
    const payloads = launchDoc['payloads'];
    const customers = payloads.flatMap((payload) => {
      return payload['customers'];
    })

    const launch = {
      flightNumber: launchDoc['flight_number'],
      mission: launchDoc['name'],
      rocket: launchDoc['rocket']['name'],
      launchDate: launchDoc['date_local'],
      upcoming: launchDoc['upcoming'],
      success: launchDoc['success'],
      customers,
    }
    console.log(`Saving launch ${launch.flightNumber} ${launch.mission}`);

    // populate launches collection
  }
}

export async function loadLaunchesData() {
  const firstLaunch = await findLaunch({
    flightNumber: 1,
    rocket: 'Falcon 1',
    mission: 'FalconSat',
  })
  if (firstLaunch) {
    console.log('Launches already loaded');
    return;
   }else {
     await populateLaunches();
   }
  
}

export async function findLaunch(filter) {
  return await launchesMongo.findOne(filter);
}

export const existLaunch = async (flightNumber) => {
  return await findLaunch({
    flightNumber, // { flightNumber: flightNumber }
  });
};

async function getLatestFlightNumber() {
  const latestLaunch = await launchesModel.findOne().sort('-flightNumber');
  return latestLaunch ? latestLaunch.flightNumber : DEFAULT_FLIGHT_NUMBER;
}

export async function getAllLaunches() {
  return await launchesModel.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function saveLaunch(launch) {
  const planet = await planetsMongo.findOne({
    keplerName: launch.target,
  });

  if (!planet) {
    throw new Error(`Planet ${launch.target} not found`);
  }

  await launchesModel.updateOne(
    {
      flightNumber: launch.flightNumber,
    },
    launch,
    { upsert: true }
  );
}

export const abortedLaunchById = async (flightNumber) => {
  const aborted = launchesModel.updateOne(
    {
      flightNumber,
    },
    {
      upcoming: false,
      success: false,
    }
  );
  return aborted;
};

export const scheduleLaunch = async (launch) => {
  const newFlightNumber = (await getLatestFlightNumber()) + 1;
  const newLaunch = Object.assign(launch, {
    success: true,
    upcoming: true,
    customers: ['NASA', 'SpaceX'],
    flightNumber: newFlightNumber,
  });

  await saveLaunch(newLaunch);
};
