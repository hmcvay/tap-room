import React from "react";
import Tap from "./Tap";
import PropTypes from "prop-types";

function TapList(props){
  return (
    <React.Fragment>
      {props.currentTapList.map((tap) => (
      <Tap
      whenTapClicked={props.onTapSelection}
      whenBeerSold={props.onChangingBeersSold} 
      name={tap.name}
      price={tap.price}
      abv={tap.abv}
      beersSold={tap.beersSold}
      id={tap.id}
      key={index} />
      ))}

    </React.Fragment>
  )
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func,
  onChangingBeersSold: PropTypes.func,
};

export default TapList;