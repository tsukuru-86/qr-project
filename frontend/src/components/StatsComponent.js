// src/components/StatsComponent.js
import React, { useEffect, useState } from 'react';

function StatsComponent() {
  const [totalScansToday, setTotalScansToday] = useState(0);
  const [currentScans, setCurrentScans] = useState(0);

  useEffect(() => {
    // 本日のスキャン人数を取得
    fetch('/api/stats')
      .then((response) => response.json())
      .then((data) => {
        setTotalScansToday(data.totalScansToday);
      });

    // リアルタイムのスキャン人数を取得
    const eventSource = new EventSource('/api/real-time-scans');
    eventSource.onmessage = (event) => {
      setCurrentScans(Number(event.data));
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="text-center mt-8">
      <p className="text-xl">
        本日、このドリンクを飲んだ人数：
        <span className="text-fuka-aka font-bold">
          {totalScansToday}人
        </span>
      </p>
      <p className="text-xl mt-2">
        現在スキャン中の人数：
        <span className="text-fuka-aka font-bold">
          {currentScans}人
        </span>
      </p>
    </div>
  );
}

export default StatsComponent;
