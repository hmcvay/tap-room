import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return(
    <React.Fragment>
      onClick={() => props.whenTapClicked(props.id)}
      <h4>
        {props.brand} {props.name}
      </h4>
      <p>${props.price} per pint</p>
      <p>{props.abv}% ABV</p>
      if({props.beersSold >= 124}){
        <p>Sorry, all out!</p>
      } else {
        <p>{124 - props.beersSold} pints remaining.</p>
      }
    </React.Fragment>
  )
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  beersSold: PropTypes.number,
}

export default Tap;