import React from "react";
import Header from "./Header";
import TapControl from "./TapControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Row> 
          <TapControl />
        </Row>  
      </Container>
    </React.Fragment>
  );
}

export default App;
