import axios from 'axios';
const API_URL = 'http://localhost:4000/v1';
async function httpGetPlanets() {
  const res = await axios.get(`${API_URL}/planets`);
  return await res.data;
}

async function httpGetLaunches() {
  const res = await axios.get(`${API_URL}/launches`);
  const fetchedLaunches = await res.data;
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URL}/launches`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(launch),
    });
  } catch (err) {
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
