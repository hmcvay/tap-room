import React from "react";
import Header from "./Header";
import TapControl from "./TapControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  const appStyles = {
    backgroundColor: '#36454f',
    color: 'white',
  }
  return (
    <React.Fragment>
      <div style={appStyles}>
        <Container>
          <Header />
          <Row> 
            <TapControl />
          </Row>  
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
