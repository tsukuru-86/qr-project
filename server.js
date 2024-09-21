// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // ここでmongooseをインポート

const app = express();
app.use(bodyParser.json());

// データベースへの接続
// mongoose.connect('mongodb+srv://tsukuru:PbL8yQFsCVdboYZ2@cluster0.a9jig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
// });

mongoose.connect('mongodb://localhost:27017/drinkQR', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});


// データベースの接続状況を確認（オプション）
mongoose.connection.on('connected', () => {
  console.log('MongoDBに接続しました');
});

mongoose.connection.on('error', (err) => {
  console.log('MongoDBの接続エラー:', err);
});

// ルートの設定
const scanRoute = require('./routes/scan');
const statsRoute = require('./routes/stats');
const locationsRoute = require('./routes/locations');


app.use('/api/scan', scanRoute);
app.use('/api/stats', statsRoute);
app.use('/api/locations', locationsRoute);
app.use(express.static('public'));

// サーバーの起動
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`サーバーはポート${PORT}で起動しています`);
});
