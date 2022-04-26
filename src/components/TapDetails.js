import React from "react";
import PropTypes from "prop-types";
// import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const tapCardStyles = {
  backgroundColor: 'grey',
  color: 'white',
  textAlign: 'center',
  width: '20rem',
  border: 'dashed 1px',
  margin: '2%'
}

function TapDetails(props) {
  const { tap, onClickingEdit } = props;
  return(
    <React.Fragment>
      <h1 className="title">details</h1>
      <div className="details-styles">
        {/* <Row> */}
          <Card id="detail-card" style={tapCardStyles}>
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
        {/* </Row> */}
      </div>
    </React.Fragment>
  );
}

TapDetails.propTypes = {
  tap: PropTypes.object,
  onClickingEdit: PropTypes.func,
};

export default TapDetails;