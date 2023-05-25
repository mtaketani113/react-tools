import React from 'react';
import './App.css';
import {
  FooterMenu,
  HeaderMenu,
  Home,
  Inquiry,
  Json2Yaml,
  PrivacyPolicy,
} from './components/index';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} /> {/* ホーム */}
        <Route path="/json2yaml" element={<Json2Yaml />} /> {/* Json Yaml変換 */}
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} /> {/* Privacy Policy */}
        <Route path="/inquiry" element={<Inquiry />} /> {/* 問い合わせ先 */}
      </Routes>
      <FooterMenu />
    </div>
  );
}

export default App;
