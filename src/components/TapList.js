import React from "react";
import Tap from "./Tap";
import PropTypes from "prop-types";

function TapList(props){
  return (
    <React.Fragment>
      {props.currentTapList.map((tap, index) => (
        <Tap
          whenTapClicked={props.onTapSelection}
          whenBeerSold={props.onChangingBeersSold} 
          name={tap.name}
          brand={tap.brand}
          price={tap.price}
          abv={tap.abv}
          beersSold={tap.beersSold}
          id={tap.id}
          key={tap.id} 
        />
      ))}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func,
  onChangingBeersSold: PropTypes.func,
};

export default TapList;