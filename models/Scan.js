// models/Scan.js
const mongoose = require('mongoose');

const ScanSchema = new mongoose.Schema({
  drinkId: String,
  timestamp: { type: Date, default: Date.now },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number], // [経度, 緯度]
  },
});

ScanSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Scan', ScanSchema);
