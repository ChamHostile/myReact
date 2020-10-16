import React from 'react';
import ReactDOM from 'react-dom';

import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import NavBar from './components/navbar';
import Carrousel from './components/carrousel';
import Gallery from './components/gallery';
import FormControl from './components/form';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const App = () => (
  <div>
    <NavBar />
    <Container>
      <Row>
        <Col lg="9">
          <h1>Bandes Annonces</h1>
          <Carrousel />
          <hr />
          <h2>Movies Available</h2>
          <Gallery />
        </Col>
        <Col lg="3">
          <FormControl />
          <hr />
          <img src="https://wvs.topleftpixel.com/photos/scotia_plaza_tall_stitched.jpg" width="230px" alt="ad" />
        </Col>
      </Row>
    </Container>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
