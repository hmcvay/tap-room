import React from "react";
import PropTypes from "prop-types";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const tapCardStyles = {
  backgroundColor: '#dfebf5',
  width: '16rem',
  border: 'solid 1px',
  margin: '2%'
}

function TapDetails(props) {
  const { tap, onClickingEdit } = props;
  return(
    <React.Fragment>
      <Col>
        <h1>Tap Details:</h1>
        <Card style={tapCardStyles}>
          <Card.Body>
            <Card.Title>{tap.name}: {tap.brand}</Card.Title>
            <Card.Text>
              <p>
                {tap.abv}% ABV
              </p>
              <p>{tap.description}</p>
              <Button variant="outline-dark" onClick={onClickingEdit}>Edit Tap</Button>
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