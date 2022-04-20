require('dotenv').config();
import app from './app';
import 'regenerator-runtime/runtime';
const mongoose = require('mongoose');
const http = require('http');
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://admin:111112113aA@nasa.dtsdf.mongodb.net/nasa?retryWrites=true&w=majority';

const {loadPlanetsData } = require('./models/planets.model');
const {loadLaunchesData} = require('./models/launches.model');

const server = http.createServer(app);

mongoose.connection.on('open', () => {
  console.log('MongoDB is connected');
})

mongoose.connection.on('error', (err) => {
  console.log(err);
})

async function start() {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  await loadPlanetsData();
  await loadLaunchesData();
  server.listen(PORT);
  console.log(`Server running on port ${PORT}`);
}
start();

