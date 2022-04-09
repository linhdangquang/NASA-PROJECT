const path = require('path');
const express = require('express');
const cors = require('cors');
import morgan from 'morgan';
import api from './routes/api';

const app = express();

app.use(cors());
app.use(morgan('combined'))


app.use(express.json());  
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1',api)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..' ,  'public' ,  'index.html'));
});

export default app;