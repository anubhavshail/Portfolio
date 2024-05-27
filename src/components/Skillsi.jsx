import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import bash from '../assets/img/bash.svg';
import js from '../assets/img/javascript.svg';
import react from '../assets/img/reactjs.svg';

export const Skillsi = () =>  {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <Container className="text-center">
        <h3 className="mb-4">Keep flying with your favorite editor.</h3>
        <Row>
          <Col md={6} lg={3} className="mb-4">
            <Card className="bg-secondary text-white h-100">
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Img variant="top" src={bash} className="mb-3" style={{ width: '90px', height: '90px' }} />
                <Card.Title>VS Code</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="bg-secondary text-white h-100">
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Img variant="top" src={js} className="mb-3" style={{ width: '90px', height: '90px' }} />
                <Card.Title>Neovim</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="bg-secondary text-white h-100">
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Img variant="top" src={react} className="mb-3" style={{ width: '90px', height: '90px' }} />
                <Card.Title>Visual Studio</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="bg-secondary text-white h-100">
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Img variant="top" src={bash} className="mb-3" style={{ width: '90px', height: '90px' }} />
                <Card.Title>JetBrains IDEs</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
