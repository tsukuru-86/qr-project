// src/components/MapComponent.js
import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

function MapComponent() {
  const [viewport, setViewport] = useState({
    latitude: 36.2048,
    longitude: 138.2529,
    zoom: 5,
  });
  const [userPosition, setUserPosition] = useState(null);
  const [otherUsers, setOtherUsers] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserPosition({ latitude, longitude });
      },
      (error) => {
        console.error('位置情報の取得に失敗しました:', error);
      }
    );

    // 他のユーザーの位置を取得
    fetch('/api/locations')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // データの構造を確認
        setOtherUsers(data.locations);
      });
  }, []);

  return (
    <div className="mt-10 h-96">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="400px"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {userPosition && (
          <Marker
            latitude={userPosition.latitude}
            longitude={userPosition.longitude}
          >
            <div className="bg-fuka-aka w-4 h-4 rounded-full"></div>
          </Marker>
        )}
        {otherUsers.map((user, index) => {
          if (user.coordinates && Array.isArray(user.coordinates) && user.coordinates.length === 2) {
            return (
              <Marker
                key={index}
                latitude={user.coordinates[1]}
                longitude={user.coordinates[0]}
              >
                <div className="bg-uguisu-iro w-3 h-3 rounded-full"></div>
              </Marker>
            );
          }
          return null; // 条件を満たさない場合は何も描画しない
        })}
      </ReactMapGL>
    </div>
  );
}

export default MapComponent;