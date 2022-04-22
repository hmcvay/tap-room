import React from "react";
import TapList from "./TapList";
import NewTapForm from "./NewTapForm";
import TapDetails from "./TapDetails";

class TapControl extends React.Component {

  constructor() {
    super();
    this.state = {
      formVisibleOnPage: false,
      mainTapList: [],
      selectedTap: null,
      editing: false
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

    handleEditingClick = () => {
      this.setState({ editing: true });
    };

    handleAddingNewTapToList = (newTap) => {
      const newMainTapList = this.state.mainTapList.concat(newTap);
      this.setState({
        mainTapList: newMainTapList,
        selectedTap: newTap,
      });
    };

    render(); {
      const currentTapList = this.state.mainTapList;
      let currentlyVisibleState = null;
      let descriptionButtonText = null;
    }
    return(
      <React.Fragment>
        <TapList 
        currentTapList={currentTapList}
        onTapSelection={this.handleChangingSelectedTap} 
        />
        {currentlyVisibleState}
        <button onClick={this.handleButtonClick}>
          {descriptionButtonText}
        </button>
      </React.Fragment>
    )
    
  }
}

export default TapControl;