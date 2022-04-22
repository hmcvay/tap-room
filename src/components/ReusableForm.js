import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label htmlfor="name">Name:</label>
        <input type="text" name="name" placeholder="Name of Beer" />
        <br />

        <label htmlfor="abv">Alcohol Content by Volume:</label>
        <input 
        type="number" 
        name="abv" 
        placeholder="abv%"
        min="0"
        step=".1"
        />
        <br />

        <label htmlfor="price">Price per pint:</label>
        <input 
        type="number"
        name="price"
        placeholder="Price"
        min="0"
        step=".5"
        />
        <br />

        <label htmlFor="beersSold">Number of pints sold:</label>
        <input 
        type="number"
        name="beersSold"
        placeholder="0"
        min="0"
        step="1"
        />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea name="description" placeholder="Description" />
        <br />

        <button type="submit">{props.buttonText}</button>

      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;