import { Divider, Form, Grid, Segment, TextArea } from 'semantic-ui-react';

/**
 * Json2YamlのJSX
 *
 * @param param0
 * @returns
 */
const Json2Yaml = () => {
  return (
    <Segment>
      {' '}
      <Form>
        <Grid columns={2}>
          <Divider vertical>→</Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <TextArea placeholder="Json" style={{ minHeight: 300 }} />
            </Grid.Column>

            <Grid.Column>
              <TextArea placeholder="Yaml" style={{ minHeight: 300 }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Segment>
  );
};

export default Json2Yaml;
