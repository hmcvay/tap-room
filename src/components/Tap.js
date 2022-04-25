import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return(
    <React.Fragment>
      onClick={() => props.whenTapClicked(props.id)}
      <h4>
        {props.name} by {props.brand}
      </h4>
      <p>${props.price} per pint</p>
      <p>{props.abv}% ABV</p>
      <p>
        {props.beersSold >= 124 ? (
          <span>Sorry, all out!</span>
        ) : (
          <span>
            <p>{124 - props.beersSold} Pints remaining</p>
            <p><button onClick={() => props.whenBeerSold(props.id, 1)}>Sell Pint</button>
            </p>
          </span>  
        )}  
      </p>
    </React.Fragment>
  );
}

Tap.defaultProps = {
  beersSold:0,
};

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  beersSold: PropTypes.number,
  whenTapClicked: PropTypes.func,
  onChangingBeersSold: PropTypes.func,
};

export default Tap;