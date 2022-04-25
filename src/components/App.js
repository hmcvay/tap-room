import React from "react";
import Header from "./Header";
import TapControl from "./TapControl";

function App() {
  return (
    <React.Fragment>
      <div className="header-wrapper">
        <div><Header /></div>
      </div>
      <div className="body-wrapper">
        <div><TapControl /></div>   
      </div>
    </React.Fragment>
  );
}

export default App;
