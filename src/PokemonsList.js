import './App.css';
import './Pokemon'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Pokemon from './Pokemon';
import Spinner from 'react-bootstrap/Spinner';



const PokemonsList = () => {
  const [pokemons, setPokemons] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
      const fetches = res.data.results.map((p) =>
        axios.get(p.url).then((res) => res.data)
      );

      Promise.all(fetches).then((data) => {
        setPokemons(data);
        setIsLoading(false);
      });
    });
  }, []);


  return (
    <div>
     
      <Container>
        <Row
          xs={2}
          md={4}
          lg={5}
          className="justify-content-between my-5 d-flex gap-3"
        >
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {!isLoading &&
            pokemons.map((pokemon) => (
              <Pokemon 
                key= {pokemon.name}
                name= {pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}

              />
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default PokemonsList;