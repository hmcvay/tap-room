import React from "react";
import Tap from "./Tap";
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row';

function TapList(props){
  return (
    <React.Fragment>
      <Row>
        <h1>taps</h1>
        {props.currentTapList.map((tap, index) => (
          <Tap
            whenTapClicked={props.onTapSelection}
            whenBeerSold={props.onChangingBeersSold} 
            name={tap.name}
            brand={tap.brand}
            style={tap.style}
            price={tap.price}
            abv={tap.abv}
            beersSold={tap.beersSold}
            id={tap.id}
            key={tap.id} 
          />
        ))}
      </Row>
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func,
  onChangingBeersSold: PropTypes.func,
};

export default TapList;