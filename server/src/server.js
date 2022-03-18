import app from './app';
const http = require('http');
const PORT = process.env.PORT || 4000;
const {loadPlanetsData } = require('./models/planets.model');
const server = http.createServer(app);

async function start() {
  await loadPlanetsData();
  server.listen(PORT);
  console.log(`Server running on port ${PORT}`);
}
start();

