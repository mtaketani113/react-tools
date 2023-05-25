import { useEffect, useState } from 'react';
import { Divider, Form, Grid, Segment, TextArea } from 'semantic-ui-react';
import yaml from 'yaml';

/**
 * Json2YamlのJSX
 *
 * @param param0
 * @returns
 */
const Json2Yaml = () => {
  const types = [
    { key: 'json2yaml', value: 'json2yaml', text: 'Json⇒Yaml' },
    { key: 'yaml2json', value: 'yaml2json', text: 'Yaml⇒Json' },
  ];

  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [type, setType] = useState<'json2yaml' | 'yaml2json'>('json2yaml');

  const conver = (e: any) => {
    setFrom(e.target.value);
  };

  const changeType = (e: any, data: any) => {
    console.log(data.value);
    setType(data.value);
    setFrom('');
    setTo('');
  };

  useEffect(() => {
    if (from === '') {
      setTo('');
    } else if (type === 'json2yaml') {
      try {
        const doc = new yaml.Document();
        doc.contents = JSON.parse(from);
        setTo(doc.toString());
      } catch (e) {
        setTo('Jsonではありません');
      }
    } else {
      try {
        setTo(JSON.stringify(yaml.parse(from), null, '\t'));
      } catch (e) {
        setTo('Yamlではありません');
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from]);

  return (
    <Segment>
      <Form>
        <Form.Select value={type} options={types} width={2} onChange={changeType} />
        <Grid columns={2}>
          <Divider vertical>⇒</Divider>
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <TextArea
                placeholder={type === 'json2yaml' ? 'Json' : 'Yaml'}
                style={{ minHeight: 300 }}
                value={from}
                onChange={(e) => conver(e)}
              />
            </Grid.Column>

            <Grid.Column>
              <TextArea
                placeholder={type === 'json2yaml' ? 'Yaml' : 'Json'}
                style={{ minHeight: 300 }}
                value={to}
                readonly={true}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Segment>
  );
};

export default Json2Yaml;
