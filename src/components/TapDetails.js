import React from "react";
import PropTypes from "prop-types";

function TapDetails(props) {
  const {tap} = props;
  return(
    <React.Fragment>
      <h3>
        {tap.name}: {tap.brand}
      </h3>
      <p>
        {tap.abv}% ABV
      </p>
      <p>{tap.description}</p>
    </React.Fragment>
  );
}

TapDetails.propTypes = {
  tap: PropTypes.object,
};

export default TapDetails;