const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const isNotProduction = process.env.NODE_ENV !== 'production';
const webpackDevHelper = require('./webpackDevHelper');

// Webpack
if (isNotProduction) {
  webpackDevHelper.useWebpackMiddleware(app);
}

app.use(express.static(__dirname + 'public'));
app.use(express.static(__dirname + '/build'));

app.listen(port, err => {
  if (err) {
    return console.log(`Server was unable to start on ${port}\n`, err);
  }

  console.log(`Server started on ${port}`);
});

// Server Routes
app.get('/api/phq9', (req, res) => {
  let phq9Json = require('./data/diagnosticPHQ9.json');
  res.json(phq9Json);
})

app.get('/api/therapists', (req, res) => {
  let therapists = require('./data/therapists.json').therapists;
  let limit = req.query.limit || 3;
  console.log('limit', JSON.stringify(limit, null, 2));

  const _shuffle = arr => arr.sort(() => 0.5 - Math.random());
  const chooseX = (arr, n) => _shuffle(arr).slice(1, n);

  res.json(chooseX(therapists, +limit));
})

// Solves 404 server problem from React Router
app.get('*', (req, res) => {
  let index = path.join('public', 'index.html');
  res.sendFile(index, {root: __dirname});
})

// For testing
module.exports = app;
