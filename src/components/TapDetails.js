import React from "react";
import PropTypes from "prop-types";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const tapCardStyles = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  width: '20rem',
  border: 'solid 1px',
  margin: '2%'
}

function TapDetails(props) {
  const { tap, onClickingEdit } = props;
  return(
    <React.Fragment>
      <Col>
        <h1>details</h1>
        <Card style={tapCardStyles}>
          <Card.Body>
            <Card.Title>{tap.name}
            <br />{tap.brand}</Card.Title>
            <Card.Text>
              <p>
                {tap.abv}% ABV
              </p>
              <p>{tap.description}</p>
              <Button variant="outline-light" onClick={onClickingEdit}>Edit Tap</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
}

TapDetails.propTypes = {
  tap: PropTypes.object,
  onClickingEdit: PropTypes.func,
};

export default TapDetails;