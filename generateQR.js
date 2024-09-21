// generateQR.js
const QRCode = require('qrcode');

const drinkId = '1';

const url = `http://localhost:3000/scan.html?drink_id=${drinkId}`;
QRCode.toFile(`qr_codes/${drinkId}.png`, url, function (err) {
  if (err) throw err;
  console.log('QR code generated');
});
