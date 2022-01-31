
import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PokeCard = ({ name, image, pokemonName }) => {
  return (
    <Card bg="dark" text="light" key={name}>
      <Card.Header>{name}</Card.Header>
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