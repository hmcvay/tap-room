import React from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ReusableForm(props) {

  const reuseForm = {
    backgroundColor: '#323639',
    color: 'white',
    // textAlign: 'center',
    width: '30rem',
    border: 'solid 1px',
    margin: '2%'
  }

  return(
    <React.Fragment>
      <div style={reuseForm}>
        <Form onSubmit={props.formSubmissionHandler}>
          <Form.Group controlId="reusableForm">
            <Form.Label htmlfor="name">Name: </Form.Label>
            <Form.Control type="text" name="name" placeholder="Name" />
            <br />

            <Form.Label htmlfor="brand">Brand: </Form.Label>
            <Form.Control type="text" name="brand" placeholder="Brand" />
            <br />

            <Form.Label htmlfor="style">Style: </Form.Label>
            <Form.Control type="text" name="style" placeholder="Style" />
            <br />

            <Form.Label htmlfor="abv">ABV: </Form.Label>
            <Form.Control 
              type="number" 
              name="abv" 
              placeholder="%"
              min="0"
              step=".1"
            />
            <br />

            <Form.Label htmlfor="price">Price per pint: </Form.Label>
            <Form.Control 
              type="number"
              name="price"
              placeholder="$"
              min="0"
              step=".5"
            />
            <br />

            <Form.Label htmlFor="beersSold">Pints sold: </Form.Label>
            <Form.Control 
              type="number"
              name="beersSold"
              placeholder="0"
              min="0"
              max="124"
              step="1"
            />
            <br />

            <Form.Label htmlFor="description">Description: </Form.Label>
            <Form.Control name="description" placeholder="Description" />
            <br />

            <Button variant="outline-light" type="submit">{props.buttonText}</Button>
          </Form.Group>
        </Form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;