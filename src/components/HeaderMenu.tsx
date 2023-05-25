import { useEffect, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

/**
 * ヘッダー部のJSX
 *
 * @param param0
 * @returns
 */
const HeaderMenu = () => {
  const [activeItem, setActiveItem] = useState<string>('/');

  const location = useLocation();
  useEffect(() => {
    setActiveItem(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Menu pointing>
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
    </Menu>
  );
};

export default HeaderMenu;
