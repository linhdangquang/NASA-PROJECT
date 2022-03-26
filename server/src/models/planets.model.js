import path, { resolve } from 'path';

const { parse } = require('csv-parse');
const fs = require('fs');
import planets from './planets.mongo';

function isHabitable(planet) {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    planet['koi_insol'] > 0.36 &&
    planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6
  );
}

export const loadPlanetsData = () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, '..', '..', 'data', 'keepler_data.csv')
    )
      .pipe(
        parse({
          comment: '#',
          columns: true,
        })
      )
      .on('data', async function (data) {
        if (isHabitable(data)) {
          savePlanet(data);
        }
      })
      .on('error', (err) => {
        console.log(err);
        reject(err);
      })
      .on('end', async () => {
        const countPlanetsFound = (await getAllPlanets()).length
        console.log(`${countPlanetsFound} habitable planets found!`);
        resolve();
      })
  });
};

async function savePlanet(planet) {
  try {
    await planets.updateOne(
      {
        keplerName: planet['kepler_name'],
      },
      {
        keplerName: planet['kepler_name'],
      },
      {
        upsert: true,
      }
    );
  } catch (error) {
    console.error(`Error saving planet ${error}`);
  }
}

export function getAllPlanets() {
  return planets.find({});
}
