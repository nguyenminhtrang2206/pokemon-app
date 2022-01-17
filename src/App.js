import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const App = () => {
  return (
    <div>
     <>
     <Container>
  <Navbar variant="dark" bg="dark">
    <Container>
      <Navbar.Brand href="#">Pokemon App</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
</>

    </div>
  );
};

export default App;