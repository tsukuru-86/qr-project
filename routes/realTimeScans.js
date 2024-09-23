// routes/realTimeScans.js
const express = require('express');
const router = express.Router();

let currentScans = 0;

router.get('/', (req, res) => {
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });

  currentScans++;
  res.write(`data: ${currentScans}\n\n`);

  req.on('close', () => {
    currentScans--;
  });
});

module.exports = router;
