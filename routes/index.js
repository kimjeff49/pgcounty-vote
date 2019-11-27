const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('../src/index', {
    title: 'Home',
  });
});

module.exports = router;