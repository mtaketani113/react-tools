import React from 'react';
import './App.css';
import { HeaderMenu, Home, Json2Yaml } from './components/index';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} /> {/* ホーム */}
        <Route path="/json2yaml" element={<Json2Yaml />} /> {/* Json Yaml変換 */}
      </Routes>
    </div>
  );
}

export default App;
