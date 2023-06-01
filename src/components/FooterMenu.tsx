import { Link } from 'react-router-dom';
import { Container, Icon, List, Segment } from 'semantic-ui-react';

/**
 * フッター部のJSX
 *
 * @param param0
 * @returns
 */
const FooterMenu = () => {
  return (
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign="center">
        <List horizontal inverted divided link size="small" style={{ marginRight: '100px' }}>
          <List.Item as={Link} to="/inquiry">
            Contact Us
          </List.Item>
          <List.Item as={Link} to="/privacyPolicy">
            Privacy Policy
          </List.Item>
        </List>
        <List horizontal inverted link size="huge">
          <List.Item as="a" href="https://twitter.com/mtaketani113">
            <Icon name='twitter' />
          </List.Item>
          <List.Item as="a" href="https://github.com/mtaketani113/react-tools">
            <Icon name='github' />
          </List.Item>
        </List>

      </Container>
    </Segment>
  );
};

export default FooterMenu;
