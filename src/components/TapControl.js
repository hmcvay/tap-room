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

    handleChangeSelectedTap = (id) => {
      const selectedTap = this.state.mainTapList.filter(
        (tap) => tap.id === id
      )[0];
      this.setState({ selectedTap: selectedTap });
    };

    handleChangingBeersSold = (id, numberOfDrinks) => {
      let soldTap = this.state.mainTapList.filter((tap) => tap.id === id)[0];
      soldTap.beersSold += numberOfDrinks;
      this.setState({
        mainTapList: this.state.mainTapList
          .filter((tap) => tap.id !== id)
          .concat(soldTap),
      });
    };

    handleTapEditingInList = (tapToEdit) => {
      const editedMainTapList = this.state.mainTapList
        .filter((tap) => tap.id !== this.state.selectedTap.id)
        .concat(tapToEdit);
      this.setState({
        mainTapList: editedMainTapList,
        editing: false,
        selectedTap: null,
      });
    };

    render(); {
      const currentTapList = this.state.mainTapList;
      let currentlyVisibleState = null;
      let descriptionButtonText = null;
      if (this.state.formVisibleOnPage) {
        currentlyVisibleState = (
          <NewTapForm onNewTapCreation={this.handleAddingNewTapToList} />
        );
      } else {
        descriptionButtonText = "Add Tap";
      }
    
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