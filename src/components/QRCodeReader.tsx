import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Button, Container, Icon, Popup } from 'semantic-ui-react';
import { useZxing } from 'react-zxing';

/**
 * QRコードリーダのJSX
 *
 * @param param0
 * @returns
 */
const QRCodeReader = () => {
  const [result, setResult] = useState<string>('');
  const [copyMessage, setCopyMessage] = useState<'Click to copy' | 'Copied!' | 'Error'>(
    'Click to copy',
  );
  const [iconName, setIconName] = useState<'copy outline' | 'check'>('copy outline');
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  });

  const copyTextToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopyMessage('Copied!');
        setIconName('check');
        setTimeout(() => {
          setCopyMessage('Click to copy');
          setIconName('copy outline');
        }, 3000);
      },
      (err: any) => {
        setCopyMessage('Error');
        console.error('Async: Could not copy text: ', err);
      },
    );
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>QRコードリーダー | JavaScript Tools</title>
        </Helmet>
      </HelmetProvider>
      <Container>
        <video ref={ref} />
        <p>
          <span>Last result:</span>
          <span>{result}</span>
          <Popup
            content={copyMessage}
            position="top right"
            on="hover"
            inverted
            trigger={
              <Button onClick={() => copyTextToClipboard(result)} icon>
                <Icon name={iconName} />
              </Button>
            }
          />
        </p>
      </Container>
    </>
  );
};

export default QRCodeReader;
