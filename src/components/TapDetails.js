import React from "react";
import PropTypes from "prop-types";

function TapDetails(props) {
  const { tap, onClickingEdit } = props;
  return(
    <React.Fragment>
      <h3>
        {tap.name}: {tap.brand}
      </h3>
      <p>
        {tap.abv}% ABV
      </p>
      <p>{tap.description}</p>
      <button onClick={onClickingEdit}>Edit Tap</button>
    </React.Fragment>
  );
}

TapDetails.propTypes = {
  tap: PropTypes.object,
  onClickingEdit: PropTypes.func,
};

export default TapDetails;