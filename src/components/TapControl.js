import React from "react";
import TapList from "./TapList";
import NewTapForm from "./NewTapForm";

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTapList: [],
      selectedTap: null
    };

    handleButtonClick = () => {
      if(this.state.selectedTap !== null || this.state.formVisibleOnPage){
        this.setState(() => ({
          formVisibleOnPage: false,
          selectedTap: null
        }));
      } else {
        this.setState(() => ({
          formVisibleOnPage: true,
          selectedTap: null,
        }));
      }
    };

    this.render(); {
      const currentTapList = this.state.mainTapList;
    }
    return(
      <React.Fragment>
        <TapList currentTapList={currentTapList} />
      </React.Fragment>
    )
    
  }
}

export default TapControl;