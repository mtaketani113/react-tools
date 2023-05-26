import { Container, Table, TableBody, TableCell, TableRow } from 'semantic-ui-react';

const Inquiry = () => {
  return (
    <Container textAlign="left">
      <Table
        style={{
          maxWidth: 500,
          borderWidth: 1,
          borderStyle: 'solid',
        }}
      >
        <TableBody>
          <TableRow>
            <TableCell>問い合わせ</TableCell>
            <TableCell>
              サイトの問い合わせはTwitterにお願いします。 <br />
              <br />
              アカウントは @<a href="https://twitter.com/mtaketani113">mtaketani113</a> です。
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              不具合報告
              <br />
              改善依頼
            </TableCell>
            <TableCell>
              Githubの<a href="https://github.com/mtaketani113/react-tools/issues/new">Issue</a>
              にお願いします。
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
};

export default Inquiry;
