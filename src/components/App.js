import React from "react";
import Header from "./Header";
import TapControl from "./TapControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <React.Fragment>
      <Container>
        <div><Header /></div>
        <div><TapControl /></div>   
      </Container>
    </React.Fragment>
  );
}

export default App;
