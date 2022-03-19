import axios from 'axios';
const API_URL = 'http://localhost:4000'
async function httpGetPlanets() {
  const res = await axios.get('http://localhost:4000/planets');
  console.log(res)
  return await res.data;
}

async function httpGetLaunches() {
  const res = await axios.get('http://localhost:4000/launches');
  const fetchedLaunches = await res.data;
  return fetchedLaunches.sort((a,b) => {
    return a.flightNumber - b.flightNumber
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};