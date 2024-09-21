// generateQR.js
const QRCode = require('qrcode');

const drinkId = '5:map';

const url = `https://97f3-240b-c010-4d3-152b-b80c-4e68-b013-bc1f.ngrok-free.app/scan.html?drink_id=${drinkId}`;
QRCode.toFile(`qr_codes/${drinkId}.png`, url, function (err) {
  if (err) throw err;
  console.log('QR code generated');
});
