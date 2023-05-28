import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Divider, Form, Grid, Icon, Popup, Segment, TextArea } from 'semantic-ui-react';
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
  const [copyMessage, setCopyMessage] = useState<'Click to copy' | 'Copied!' | 'Error'>(
    'Click to copy',
  );
  const [iconName, setIconName] = useState<'copy outline' | 'check'>('copy outline');

  const conver = (e: any) => {
    setFrom(e.target.value);
  };

  const changeType = (e: any, data: any) => {
    console.log(data.value);
    setType(data.value);
    setFrom('');
    setTo('');
  };

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
    <>
      <HelmetProvider>
        <Helmet>
          <title>Json ⇔ Yaml | JavaScript Tools</title>
          <meta
            name="description"
            content="JsonとYamlを相互に変換するツールです。Reactで実装しています。"
          />
        </Helmet>
      </HelmetProvider>
      <Segment>
        <Form>
          <Form.Group>
            <Form.Field>
              <Form.Select value={type} options={types} width={2} onChange={changeType} />
            </Form.Field>
          </Form.Group>
        </Form>
        <Form>
          <Form.Field>
            <Grid columns={2}>
              <Divider vertical>⇒</Divider>
              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <TextArea
                    placeholder={type === 'json2yaml' ? 'Json' : 'Yaml'}
                    style={{ minHeight: 300 }}
                    value={from}
                    data-testid="jsonTextArea"
                    onChange={(e) => conver(e)}
                  />
                </Grid.Column>

                <Grid.Column>
                  <TextArea
                    placeholder={type === 'json2yaml' ? 'Yaml' : 'Json'}
                    style={{ minHeight: 300 }}
                    value={to}
                    data-testid="yamlTextArea"
                    readOnly={true}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form.Field>
        </Form>
        <Form>
          <Form.Group />
          <Form.Group>
            <Form.Field>
              <Popup
                content={copyMessage}
                position="top right"
                on="hover"
                inverted
                trigger={
                  <Form.Button onClick={() => copyTextToClipboard(to)} icon labelPosition="right">
                    変換結果をコピー
                    <Icon name={iconName} />
                  </Form.Button>
                }
              />
            </Form.Field>
          </Form.Group>
        </Form>
      </Segment>
    </>
  );
};

export default Json2Yaml;
