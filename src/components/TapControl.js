import React from "react";
import TapList from "./TapList";
import NewTapForm from "./NewTapForm";
import TapDetails from "./TapDetails";
import EditTapForm from "./EditTapForm";

export class TapControl extends React.Component {

  constructor() {
    super();
    this.state = {
      formVisibleOnPage: false,
      mainTapList: [
        {
          name: "The White Lodge",
          brand: "Holy Mountain Brewing",
          price: 7,
          abv: 4.8,
          beersSold: 0,
          description:
            "A classic rendition of a Belgian wit, The White Lodge is brewed with a large portion of wheat along with pilsner malt and oats. We use coriander and orange peel in the kettle, lending a blend of citrus and floral characters, and ferment with a traditional Belgian strain.",
          id: 1,
          key: 4,
        },
      ],
      selectedTap: null,
      editing: false
    };
  }

  handleButtonClick = () => {
    if(this.state.selectedTap !== null || this.state.formVisibleOnPage){
      this.setState(() => ({
        formVisibleOnPage: false,
        selectedTap: null,
        editing: false,
      }));
    } else {
      this.setState(() => ({
        formVisibleOnPage: true,
        selectedTap: null,
        editing: false,
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

  render() {
    const currentTapList = this.state.mainTapList;
    let currentlyVisibleState = null;
    let descriptionButtonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditTapForm
          tap={this.state.selectedTap}
          onEditTap={this.handleTapEditingInList}
        />
      );
      descriptionButtonText = "something";
    } else if (this.state.selectedTap !== null) {
      currentlyVisibleState = (
        <TapDetails 
        tap={this.state.selectedTap}
        onClickingEdit={this.handleEditingClick}
        />
      );
      descriptionButtonText = "something else";

    }
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewTapForm onNewTapCreation={this.handleAddingNewTapToList} />
      );
    } else {
      descriptionButtonText = "Add Tap";
    }
    return (
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