import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Input } from 'semantic-ui-react';
import { useQRCode } from 'next-qrcode';

/**
 * QRコード生成のJSX
 *
 * @param param0
 * @returns
 */
const QRCodeCreate = () => {
  const [text, setText] = useState<string>('');
  const { Canvas } = useQRCode();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>QRコード生成 | JavaScript Tools</title>
        </Helmet>
      </HelmetProvider>
      <Container>
        <p>
          <Input
            fluid
            value={text}
            onChange={(e: any) => setText(e.target.value)}
            placeholder="QRコードに変換したい文字を入れてください"
          />
        </p>
        {text !== '' && (
          <Canvas
            text={text} // QRコードで表示される内容。省略できません。
            options={{
              // ここの要素は省略可能。ご利用は計画的に。
              type: 'image/webp', // 出力フォーマット。 pngかjpegかwebpから選べる
              quality: 0.95, // クオリティ。 0〜１で1に近い方が綺麗。
              level: 'M', // 補正レベル。 low(L)、medium（Ｍ）、quartile(Ｑ)、high(H)から選べる。
              margin: 3, // クワイエットゾーンの広さを決める。
              scale: 4, // ドット1個につき何px使うかの指標。
              width: 200, // 出力画像の幅の指定。(収まらなかったら無視する)
            }}
          />
        )}
      </Container>
    </>
  );
};

export default QRCodeCreate;
