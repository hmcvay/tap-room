import React from "react";
import Tap from "./Tap";
import PropTypes from "prop-types";
import Col from 'react-bootstrap/Col';

function TapList(props){
  return (
    <React.Fragment>
      <Col>
        <h1>taps</h1>
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
      </Col>
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func,
  onChangingBeersSold: PropTypes.func,
};

export default TapList;