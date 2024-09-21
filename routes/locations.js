// routes/locations.js
const express = require('express');
const router = express.Router();
const Scan = require('../models/Scan');

router.get('/', async (req, res) => {
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000); // 1時間前

  try {
    const scans = await Scan.find({
      timestamp: { $gte: oneHourAgo },
    }).select('location -_id');

    res.json({ locations: scans.map((scan) => scan.location) });
  } catch (err) {
    console.error('Error fetching locations:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
