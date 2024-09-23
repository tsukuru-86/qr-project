// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// データベースへの接続
mongoose.connect('mongodb://localhost:27017/drinkQR', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('MongoDBに接続しました');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDBの接続エラー:', err);
});

// ルートの設定
const scanRoute = require('./routes/scan');
const statsRoute = require('./routes/stats');
const locationsRoute = require('./routes/locations');
const realTimeScansRoute = require('./routes/realTimeScans'); // 追加

app.use('/api/scan', scanRoute);
app.use('/api/stats', statsRoute);
app.use('/api/locations', locationsRoute);
app.use('/api/real-time-scans', realTimeScansRoute); // 追加

// 本番環境用の静的ファイルの提供
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

// サーバーの起動
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`サーバーはポート${PORT}で起動しています`);
});
