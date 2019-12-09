const express = require('express');
const path = require('path');
const engine = require('consolidate');
const fetch = require('node-fetch');
const opencage = require('opencage-api-client');
const LocalStorage = require('node-localstorage').LocalStorage;

localStorage = new LocalStorage('./scratch');
const app = express();
const port = process.env.PORT || 3000;

// Set up engine
app.engine('html', engine.mustache);
app.set('view engine', 'html');

// Set up baseline
app.set('views', path.join(__dirname, 'build'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/polling', (req, res) => {
  fetch('https://data.princegeorgescountymd.gov/resource/2v6d-7p4w.json')
    .then(res => res.json())
    .then(data => res.send({ data }));
}).post('/api/calculate', (req, res) => {
  let polling = req.body.polling;
  const lat = req.body.latitude;
  const long = req.body.longitude;
  let lowestDistance = Number.MAX_SAFE_INTEGER;
  let lowestPlace = 0;
  for (let i = 0; i < res.length; i++) {
      const distance = calculateGeoDistance(polling[i].lat, lat, long, polling[i].long);
      if (distance < lowestDistance) {
          lowestPlace = i;
          lowestDistance = distance;
      }
  }
  opencage.geocode({key:'081fca4c764a423e8ac4915bc062f42e' , q: `${lat}, ${long}`, language: 'en'})
    .then(data => {
      if (data.status.code === 200 && data.results.length > 0) {
        return data.results[0].formatted;
      }
    }).then(res => localStorage.setItem('polling', JSON.stringify({ PollingLocation: polling[lowestPlace], PollingDistance: lowestDistance, CurrentLocation: res})));
  res.send('200');
}).put('/api/distance', (req, res) => {
  res.send(JSON.parse(localStorage.getItem('polling')));
});

app.listen(port, console.log(`App is up and running on port ${port}!`));
