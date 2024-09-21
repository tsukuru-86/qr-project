// routes/stats.js
const express = require('express');
const router = express.Router();
const Scan = require('../models/Scan');

router.get('/', async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  try {
    const totalScansToday = await Scan.countDocuments({
      timestamp: { $gte: today },
    });

    res.json({ totalScansToday });
  } catch (err) {
    console.error('Error fetching stats:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
