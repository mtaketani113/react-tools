import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container } from 'semantic-ui-react';

/**
 * HomeのJSX
 *
 * @param param0
 * @returns
 */
const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>JavaScript Tools</title>
          <meta name="description" content="JavaScriptのツール集です。Reactで実装しています。" />
        </Helmet>
      </HelmetProvider>
      <Container textAlign="left">
        <li>JavaScriptのツール集です。Reactで実装しています。（作成中）</li>
        <li>
          <a href="https://react.semantic-ui.com/">semantic ui react</a>を利用しています。
        </li>
      </Container>
    </>
  );
};

export default Home;
