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

  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const conver = (e:any) => {
    setFrom(e.target.value);
  } 

  useEffect(() => {

    try{      
      const doc = new yaml.Document();
      doc.contents = JSON.parse(from);
      setTo(doc.toString());
    }catch(e){
      setTo("Jsonではありません")
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from]);

  return (
    <Segment>
      <Form>
        <Grid columns={2}>
          <Divider vertical>⇒</Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <TextArea placeholder="Json" style={{ minHeight: 300 }} value={from}
              onChange={(e) => conver(e)}
              />
            </Grid.Column>

            <Grid.Column>
              <TextArea placeholder="Yaml" style={{ minHeight: 300 }} value={to} readonly={true} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Segment>
  );
};

export default Json2Yaml;
