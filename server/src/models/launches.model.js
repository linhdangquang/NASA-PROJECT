const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Komodo Dragon',
  rocket: 'Falcon 9',
  launchDate: new Date('Dec 17, 2030'),
  target: 'Kodiak Island, Alaska',
  customer: ['NASA', 'SpaceX'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

export const existLaunch = (flightNumber) => {
  return launches.has(flightNumber);
};

export function getAllLaunches() {
  return Array.from(launches.values());
}

export const abortedLaunchById = (flightNumber) => {
  const aborted = launches.get(flightNumber);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
};


export const addNewLaunch = (launch) => {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ['dsadsa', 'dsadsa'],
      flightNumber: latestFlightNumber,
    })
  );
};

