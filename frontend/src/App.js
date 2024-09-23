// src/App.js
import React from 'react';
import Header from './components/Header';
import MainMessage from './components/MainMessage';
import StatsComponent from './components/StatsComponent';
import MapComponent from './components/MapComponent';

function App() {
  return (
    <div className="bg-shironeri min-h-screen">
      <Header />
      <main className="container mx-auto px-4">
        <MainMessage />
        <StatsComponent />
        <MapComponent />
      </main>
    </div>
  );
}

export default App;
