import { useEffect, useState } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import usePageTracking from './useTracking';

/**
 * ヘッダー部のJSX
 *
 * @param param0
 * @returns
 */
const HeaderMenu = () => {
  const [activeItem, setActiveItem] = useState<string>('/');
  usePageTracking();

  const location = useLocation();
  useEffect(() => {
    setActiveItem(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Menu>
      <Menu.Item
        name="home"
        active={activeItem === '/'}
        onClick={() => setActiveItem('/')}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="json2yaml"
        active={activeItem === '/json2yaml'}
        onClick={() => setActiveItem('/json2yaml')}
        as={Link}
        to="json2yaml"
      >
        json ⇔ yaml
      </Menu.Item>
      <Dropdown item text="QR" simple>
        <Dropdown.Menu>
          <Dropdown.Item
            name="qrCodeReader"
            active={activeItem === '/qrCodeReader'}
            onClick={() => setActiveItem('/qrCodeReader')}
            as={Link}
            to="qrCodeReader"
          >
            QRコードリーダ
          </Dropdown.Item>
          <Dropdown.Item
            name="qrCodeReader"
            active={activeItem === '/qrCodeCreate'}
            onClick={() => setActiveItem('/qrCodeCreate')}
            as={Link}
            to="qrCodeCreate"
          >
            QRコード生成
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default HeaderMenu;
