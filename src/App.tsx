import React, { useEffect } from 'react';
import './App.css';
import {
  FooterMenu,
  HeaderMenu,
  Home,
  Inquiry,
  Json2Yaml,
  PrivacyPolicy,
  QRCodeCreate,
  QRCodeReader,
} from './components/index';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

function App() {
  useEffect(() => {
    if (!window) {
      return;
    } // SSR 処理中は skip
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  });
  return (
    <div className="App">
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} /> {/* ホーム */}
        <Route path="/json2yaml" element={<Json2Yaml />} /> {/* Json Yaml変換 */}
        <Route path="/qrCodeReader" element={<QRCodeReader />} /> {/* QRコードリーダ */}
        <Route path="/qrCodeCreate" element={<QRCodeCreate />} /> {/* QRコード生成 */}
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} /> {/* Privacy Policy */}
        <Route path="/inquiry" element={<Inquiry />} /> {/* 問い合わせ先 */}
      </Routes>
      <Container>
        <ins
          className={'adsbygoogle'} //''はバッククォートに置き換えてください。$直後のスペースは不要です。
          style={{ display: 'block' }}
          data-ad-client="ca-pub-7157586794981334"
          data-ad-slot="7436630218"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </Container>
      <FooterMenu />
    </div>
  );
}

export default App;
