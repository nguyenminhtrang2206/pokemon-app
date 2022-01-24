import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <div>
           
            <Navbar bg="light" expand="lg">
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand to="/">PokeApp</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to="/">
                                    <Nav.Link to="/">Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/pokemons">
                                    <Nav.Link>Pokemons</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>

            

        </div>
    );
};

export default Header;