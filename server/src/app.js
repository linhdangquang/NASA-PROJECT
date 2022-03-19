const path = require('path');
const express = require('express');
const cors = require('cors');
import morgan from 'morgan';
import planetsRouter from './routes/planets/planets.router';
import launchesRouter from './routes/launches/launches.router';
const app = express();

app.use(cors());
app.use(morgan('combined'))


app.use(express.json());  
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(planetsRouter);
app.use('/launches',launchesRouter);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..' ,  'public' ,  'index.html'));
});

export default app;