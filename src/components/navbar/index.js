import React from 'react';
import {
  Col,
  Row,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';

const NavBar = () => (
  <Row>
    <Col>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-film" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0h8v6H4V1zm8 8H4v6h8V9zM1 1h2v2H1V1zm2 3H1v2h2V4zM1 7h2v2H1V7zm2 3H1v2h2v-2zm-2 3h2v2H1v-2zM15 1h-2v2h2V1zm-2 3h2v2h-2V4zm2 3h-2v2h2V7zm-2 3h2v2h-2v-2zm2 3h-2v2h2v-2z" />
            </svg>
            My Movie
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#action">Action</Nav.Link>
            <Nav.Link href="#aventure">Aventure</Nav.Link>
            <Nav.Link href="#comédie">Comédie</Nav.Link>
            <Nav.Link href="#horreur">Horreur</Nav.Link>
            <Nav.Link href="#signIn">Sign-In</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search Movies" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </Col>
  </Row>
);

export default NavBar;
