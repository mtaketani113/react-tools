import { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom';

/**
 * ヘッダー部のJSX
 *
 * @param param0
 * @returns
 */
const Header = () => {

    const [activeItem, setActiveItem] = useState<string>('home');
    
    return (
        <Menu pointing>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={() => setActiveItem('home')}
          />
          <Menu.Item
            name='yaml2json'
            active={activeItem === 'yamlAndJson'}
            onClick={() => setActiveItem('yamlAndJson')}
            as={Link}
            to='yaml2json'
          >yaml ⇔ json
            </Menu.Item>
        </Menu>
    )

}

export default Header;