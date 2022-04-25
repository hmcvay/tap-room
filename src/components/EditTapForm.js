import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditTapForm(props) {
  const { tap } = props;
  function handleEditTapSubmission(event) {
    event.preventDefault();
    props.onEditTap ({
      name: event.target.name.value,
      brand: event.target.brand.value,
      description: event.target.description.value,
      abv: parseFloat(event.target.abv.value),
      price: parseFloat(event.target.price.value),
      beersSold: parseInt(event.target.beersSold.value),
      id: tap.id,
    });
  }
  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTapSubmission}
        buttonText="Update Tap"
      />
    </React.Fragment>
  );
}

EditTapForm.propTypes = {
  tap: PropTypes.object,
  onEditTap: PropTypes.func,
};

export default EditTapForm;