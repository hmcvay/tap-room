import React from "react";
import TapList from "./TapList";

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTapList: []
    };

    this.render() {
      const currentTapList = this.state.mainTapList;
    }
    return(
      <React.Fragment>
        <TapList currentTapList={currentTapList} />
      </React.Fragment>
    )
    
  }
}