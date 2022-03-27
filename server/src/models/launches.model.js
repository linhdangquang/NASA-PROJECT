import launchesMongo from './launches.mongo';
import launchesModel from './launches.mongo';
import planetsMongo from './planets.mongo';
const launches = new Map();

let DEFAULT_FLIGHT_NUMBER = 100;

const launch = {
  flightNumber: 100,
  mission: 'Komodo Dragon',
  rocket: 'Falcon 9',
  launchDate: new Date('Dec 17, 2030'),
  target: 'Kepler-1410 b',
  customers: ['NASA', 'SpaceX'],
  upcoming: true,
  success: true,
};

saveLaunch(launch);

export const existLaunch = async (flightNumber) => {
  return await launchesMongo.findOne({
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
  const aborted =  launchesModel.updateOne({
    flightNumber,
  }, {
    upcoming: false,
    success: false,
  })
  return aborted;
};

export const scheduleLaunch = async (launch) => {
  const newFlightNumber = await getLatestFlightNumber() + 1;
  const newLaunch = Object.assign(launch, {
    success: true,
    upcoming: true,
    customers: ['NASA', 'SpaceX'],
    flightNumber: newFlightNumber,
  });

  await saveLaunch(newLaunch);
};


