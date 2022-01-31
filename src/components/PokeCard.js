
import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Heart, HeartFill} from 'react-bootstrap-icons';

const PokeCard = ({ name, image, pokemonName, type, fav, favClick }) => {
  return (
    <Card className={type} bg="dark" text="light" key={name}>
      <Card.Header className="d-flex justify-content-between">
      {name}
      {fav ? (
        <HeartFill  onClick= {favClick} size="30" color="red"/>
      ) : (
        <Heart onClick= {favClick} size="30" color="white"/>
      )
      }
      </Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={image} />
        <LinkContainer to ={`/${pokemonName}`}>
        <Button variant="outline-secondary" size="sm">Read more...</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default PokeCard;