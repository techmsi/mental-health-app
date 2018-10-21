const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const path = require('path');
const port = process.env.PORT || 3001;
var cors = require('cors');

server.use(cors());
server.options('*', cors());

server.use(express.static(path.join(__dirname, 'public')));
server.use(express.static(path.join(__dirname, 'public', 'build')));

// Body Parser - POST request middleware
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

// Data
let phq9Json = require('./data/diagnosticPHQ9.json');
let therapistsJson = require('./data/therapists.json');

// Server Routes
server.get('/api/phq9', (req, res) => {
  res.json(phq9Json);
});

// Route that receives a POST request to /diagnosis
server.post('/api/diagnosis', (req, res) => {
  console.log('body', JSON.stringify(req.body, null, 2));
  let phq9Scale = phq9Json.scale;

  const findByRange = (list, score) => {
    const checkRange = (min, max) => score >= min && score <= max;
    const found = list.filter((obj) => checkRange(obj.range.min, obj.range.max));

    return found[0];
  };

  const score = req.body.score;

  if (score) {
    res.json(findByRange(phq9Scale, score));
  } else {
    res.send(`You sent: ${JSON.stringify(req.body, null, 2)} to Express`);
  }
});

server.get('/api/therapists', (req, res) => {
  const {therapists} = therapistsJson;
  const limit = req.query.limit || null;
  console.log('therapists route - limit', JSON.stringify(limit, null, 2));

  const _shuffle = arr => arr.sort(() => 0.5 - Math.random());
  const chooseX = (arr, n) => _shuffle(arr).slice(0, n);

  const list = (limit) ? chooseX(therapists, +limit) : therapists;
  res.json(list);
});

// Solves 404 server problem from React Router
server.get('*', (req, res) => {
  let index = path.join('public', 'index.html');
  res.sendFile(index, {root: __dirname});
});

server.listen(port, err => {
  if (err) {
    return console.log(`Server was unable to start on ${port}\n`, err);
  }

  console.log(`Server started on ${port}`);
});

// For testing
module.exports = server;
