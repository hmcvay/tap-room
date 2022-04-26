import React from "react";
import PropTypes from "prop-types";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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
      <h1>Tap Details:</h1>
      <Col>
        <Card style={tapCardStyles}>
          <h3>
            {tap.name}: {tap.brand}
          </h3>
          <p>
            {tap.abv}% ABV
          </p>
          <p>{tap.description}</p>
          <button onClick={onClickingEdit}>Edit Tap</button>
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