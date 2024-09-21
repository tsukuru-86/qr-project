// generateQR.js
const QRCode = require('qrcode');

const drinkId = '4';

const url = `https://5384-182-169-64-203.ngrok-free.app/scan.html?drink_id=${drinkId}`;
QRCode.toFile(`qr_codes/${drinkId}.png`, url, function (err) {
  if (err) throw err;
  console.log('QR code generated');
});
