import React from 'react';
import {
  Col,
  Row,
  Card,
  Button,
} from 'react-bootstrap';

const Gallery = () => (
  <Row>
    <Col lg="4">
      <Card>
        <Card.Img variant="top" src="https://fr.web.img3.acsta.net/medias/nmedia/18/85/51/98/19843153.jpg" />
        <Card.Body>
          <Card.Text>
            Mission Impossible - Protocole fantôme
          </Card.Text>
          <Button variant="primary">Show</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col lg="4">
      <Card>
        <Card.Img variant="top" src="https://www.telerama.fr/sites/tr_master/files/5c08eb5c-2e6c-41c4-adb4-0470d73660a9_2.jpg" />
        <Card.Body>
          <Card.Text>
            Indiana Jones et la dernière croisade
          </Card.Text>
          <Button variant="primary">Show</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col lg="4">
      <Card>
        <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/91LlN7J%2BZ9L._AC_SL1500_.jpg" />
        <Card.Body>
          <Card.Text>
            Star Wars :  Episode VI - Le retour du Jedi
          </Card.Text>
          <Button variant="primary">Show</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col lg="4">
      <Card>
        <Card.Img variant="top" src="https://fr.web.img3.acsta.net/medias/nmedia/18/85/51/98/19843153.jpg" />
        <Card.Body>
          <Card.Text>
            Mission Impossible - Protocole fantôme
          </Card.Text>
          <Button variant="primary">Show</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col lg="4">
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BN2RkYWVkZDQtNTMxMi00NWQ4LWE2ODctNmQzOWM2NjQzYzdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg" />
        <Card.Body>
          <Card.Text>
            Mission Impossible 2
          </Card.Text>
          <Button variant="primary">Show</Button>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Gallery;
