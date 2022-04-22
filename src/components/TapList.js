import React from "react";
import Tap from "./Tap";
import PropTypes from "prop-types";

function TapList(props){
  return (
    <React.Fragment>
      {props.tapList.map((tap, index) =>
      <Tap name={tap.name}
      price={tap.price}
      abv={tap.abv}
      beersSold={tap.beersSold}
      key={index} />
      )}
    </React.Fragment>
  )
}

TapList.propTypes = {
  tapList: PropTypes.array
};

export default TapList;