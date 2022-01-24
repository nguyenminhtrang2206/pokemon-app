import React from 'react';
import Card from 'react-bootstrap/Card';

const Pokemon = ({name, image}) => {
  return (
    <div>
      <Card bg="dark" text="light" key={name}>
          <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Img
                    variant="top"
                    src={image}
                  />
            </Card.Body>
        </Card>
    </div>
  );
};

export default Pokemon;

