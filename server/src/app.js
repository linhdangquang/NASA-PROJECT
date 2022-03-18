const path = require('path');
const express = require('express');
const cors = require('cors');
import planetsRouter from './routes/planets/planets.router';
const app = express();

app.use(cors());

app.use(express.json());  
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(planetsRouter);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..' ,  'index.html'));
});

export default app;