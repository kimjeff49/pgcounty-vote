const express = require('express');
const path = require('path');
const engine = require('consolidate');
const fetch = require('node-fetch');
const opencage = require('opencage-api-client');
const LocalStorage = require('node-localstorage').LocalStorage;

localStorage = new LocalStorage('./src/static/data');
const app = express();
const port = process.env.PORT || 3000;

// Set up engine
app.engine('html', engine.mustache);
app.set('view engine', 'html');

// Set up baseline
app.set('views', path.join(__dirname, 'src'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));

// helper functions
// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-33.php
function toRadians (val) {
  const pi = Math.PI;
  return val * (pi / 180);
}

// https://www.movable-type.co.uk/scripts/latlong.html
function calculateGeoDistance (lat1, lat2, lon1, lon2) {
  const R = 6371e3;
  const φ1 = toRadians(lat1);
  const φ2 = toRadians(lat2);
  const Δφ = toRadians(lat2 - lat1);
  const Δλ = toRadians(lon2 - lon1);

  const a =
          Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
          Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c;

  return d;
}

app
  .get('/api/polling', (req, res) => {
    fetch('https://data.princegeorgescountymd.gov/resource/2v6d-7p4w.json')
      .then(res => res.json())
      .then(data => res.send({ data }));
  })
  .post('/api/calculate', (req, res) => {
    const polling = req.body.polling;
    const lat = req.body.latitude;
    const long = req.body.longitude;
    let lowestDistance = Number.MAX_SAFE_INTEGER;
    let lowestPlace = 0;
    for (let i = 0; i < res.length; i++) {
      const distance = calculateGeoDistance(
        polling[i].lat,
        lat,
        long,
        polling[i].long
      );
      if (distance < lowestDistance) {
        lowestPlace = i;
        lowestDistance = distance;
      }
    }
    opencage
      .geocode({
        key: '081fca4c764a423e8ac4915bc062f42e',
        q: `${lat}, ${long}`,
        language: 'en'
      })
      .then(data => {
        if (data.status.code === 200 && data.results.length > 0) {
          return data.results[0].formatted;
        }
      })
      .then(res =>
        localStorage.setItem(
          'polling',
          JSON.stringify({
            PollingLocation: polling[lowestPlace],
            PollingDistance: lowestDistance,
            CurrentLocation: res
          })
        )
      );
    res.send('200');
  })
  .put('/api/distance', (req, res) => {
    res.send(JSON.parse(localStorage.getItem('polling')));
  });

app.listen(port, console.log(`App is up and running on port ${port}!`));
