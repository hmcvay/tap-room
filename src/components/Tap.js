import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return(
    <React.Fragment>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.abv}</p>
      <p>{props.beersSold}</p>
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