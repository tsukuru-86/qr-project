// routes/scan.js
const express = require('express');
const router = express.Router();
const Scan = require('../models/Scan');

router.post('/', async (req, res) => {
  const { drinkId, location } = req.body;

  const newScan = new Scan({
    drinkId,
    location,
  });

  try {
    await newScan.save();
    res.status(201).json({ message: 'Scan data saved' });
  } catch (err) {
    console.error('Error saving scan data:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
