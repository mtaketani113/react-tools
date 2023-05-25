import { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/**
 * ヘッダー部のJSX
 *
 * @param param0
 * @returns
 */
const HeaderMenu = () => {
  const [activeItem, setActiveItem] = useState<string>('home');

  return (
    <Menu pointing>
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={() => setActiveItem('home')}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="json2yaml"
        active={activeItem === 'json2yaml'}
        onClick={() => setActiveItem('json2yaml')}
        as={Link}
        to="json2yaml"
      >
        json ⇔ yaml
      </Menu.Item>
    </Menu>
  );
};

export default HeaderMenu;
