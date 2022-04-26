import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Tap(props){
  const tapCardStyles = {
    backgroundColor: '#dfebf5',
    width: '16rem',
    border: 'solid 1px',
    margin: '2%'
  }
  return(
    <React.Fragment>
      <Col>
        <div onClick={() => props.whenTapClicked(props.id)} >
          <Card style={tapCardStyles}>
            <Card.Body>
              <Card.Title>{props.name} by {props.brand}</Card.Title>
              <Card.Text>
                <p>${props.price} per pint | <em>{props.abv}% ABV</em></p>
                <p>
                  {props.beersSold >= 124 ? (
                    <span>Sorry, all out!</span>
                  ) : (
                    <span>
                      <p>{124 - props.beersSold} Pints remaining</p>
                      <p><Button variant="outline-dark" onClick={() => props.whenBeerSold(props.id, 1)}>Sell Pint</Button>
                      </p>
                    </span>  
                  )}  
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </React.Fragment>
  );
}

Tap.defaultProps = {
  beersSold:0,
};

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  beersSold: PropTypes.number,
  whenTapClicked: PropTypes.func,
  
};

export default Tap;