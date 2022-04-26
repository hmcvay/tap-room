import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import full from "./../img/full.png";
import threequarter from "./../img/threequarter.png";
import half from "./../img/half.png";
import quarter from "./../img/quarter.png";
import empty from "./../img/empty.png";

function Tap(props){

  const tapCardStyles = {
    backgroundColor: '#323639',
    color: 'white',
    textAlign: 'center',
    width: '18rem',
    border: 'solid 1px',
    margin: '2%'
  }

  function kegLevel() {
    if(props.beersSold >=124){
      return empty;
    } else if (props.beersSold >=93){
      return quarter;
    } else if (props.beersSold >=62){
      return half;
    } else if (props.beersSold <= 31){
      return threequarter;
    } else if(props.beersSold >= 0) {
      return full;
    }
  }
  
  return(
    <React.Fragment>
      <Col>
        <div onClick={() => props.whenTapClicked(props.id)} >
          <Card id="single-card" style={tapCardStyles}>
            <Card.Body>
              <Card.Title><strong>{props.name.toUpperCase()}</strong> 
              <br />{props.brand}</Card.Title>
              <Card.Text>
                <p>{props.style}</p>
                <p>${props.price} per pint | <em>{props.abv}% ABV</em></p>
                <p>
                  {props.beersSold >= 124 ? (
                    <span className="big-info">Sorry, all out!</span>
                  ) : (
                    <span>
                      <p> <span className="big-info">{124 - props.beersSold}</span> Pints remaining</p>
                      <img className="keg-image" src={kegLevel()} />
                      <p><Button variant="outline-light" onClick={() => props.whenBeerSold(props.id, 1)}>Sell Pint</Button>
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
  style: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  beersSold: PropTypes.number,
  whenTapClicked: PropTypes.func,
  
};

export default Tap;