// generateTestData.js
const mongoose = require('mongoose');
const Scan = require('./models/Scan');

mongoose.connect('mongodb://localhost:27017/drinkQR', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', async () => {
  console.log('データベースに接続しました');

  const bulkOps = [];

  // テストデータの数を設定
  const numberOfTestData = 1000;

  for (let i = 0; i < numberOfTestData; i++) {
    // ランダムな日時（過去7日間）
    const randomTime = new Date(
      Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)
    );

    // ランダムな位置（日本国内）
    const latMin = 33.0;
    const latMax = 43.0;
    const lonMin = 130.0;
    const lonMax = 141.0;

    const randomLat = Math.random() * (latMax - latMin) + latMin;
    const randomLon = Math.random() * (lonMax - lonMin) + lonMin;

    bulkOps.push({
      insertOne: {
        document: {
          drinkId: '123456',
          timestamp: randomTime,
          location: {
            type: 'Point',
            coordinates: [randomLon, randomLat],
          },
        },
      },
    });
  }

  try {
    await Scan.bulkWrite(bulkOps);
    console.log(`${numberOfTestData}件のテストデータを挿入しました`);
  } catch (err) {
    console.error('データ挿入エラー:', err);
  } finally {
    mongoose.connection.close();
  }
});
