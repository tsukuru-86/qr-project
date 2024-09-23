// generateQR.js
const QRCode = require('qrcode');

const drinkId = '8:map';

const url = `https://a446-2400-4050-c341-c600-5428-6fb1-a444-2e1f.ngrok-free.app/scan.html?drink_id=${drinkId}`;
QRCode.toFile(`qr_codes/${drinkId}.png`, url, function (err) {
  if (err) throw err;
  console.log('QR code generated');
});
