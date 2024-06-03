import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import bash from '../assets/img/bash.svg';
import js from '../assets/img/javascript.svg';
import react from '../assets/img/reactjs.svg';

export const Skill = () => {
    return (
        <div className='d-flex justify-content-center align-item-center vh-100 bg-dark text-white'>
            <Container className='text-center'>
                <Row className='no-gutters'>
                    <Col xs={12} md={4}>
                        <div className='skillcard m-3'>
                        <h4 className='align-item-center pt-4'>Frontend</h4>
                        <Row className='m-4'>
                            <Col xs={6} className='mb-4'>
                                <Card className='tcard text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} className='mb-4'>
                                <Card className='tcard text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title className='mt-auto'>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} className='mb-4'>
                                <Card className='tcard text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} className='mb-4'>
                                <Card className='tcard text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        </div> 
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='m-3 skillcard' >
                            <h4 className='align-item-center pt-4'>Frontend</h4>
                            <Row className='m-4'>
                                <Col xs={6} className='mb-4'>
                                    <Card className='tcard text-white h-100'>
                                        <Card.Body className='d-flex flex-column align-items-center'>
                                            <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                            <Card.Title>Visual Studio</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={6} className='mb-4'>
                                    <Card className='tcard text-white h-100'>
                                        <Card.Body className='d-flex flex-column align-items-center'>
                                            <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                            <Card.Title>Visual Studio</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={6} className='mb-4'>
                                    <Card className='tcard text-white h-100'>
                                        <Card.Body className='d-flex flex-column align-items-center'>
                                            <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                            <Card.Title>Visual Studio</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={6} className='mb-4'>
                                    <Card className='tcard text-white h-100'>
                                        <Card.Body className='d-flex flex-column align-items-center'>
                                            <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                            <Card.Title>Visual Studio</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row> 
                        </div>
                    </Col>
                    <Col xs={12} md={4} bg="dark">
                        <div className='skillcard m-3'>
                            <h4 className='align-item-center pt-4'>Frontend</h4>
                            <Row className='m-4'>
                                <Col xs={6} className='mb-4'>
                                    <Card className='tcard text-white h-100'>
                                        <Card.Body className='d-flex flex-column align-items-center'>
                                            <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                            <Card.Title>Visual Studio</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={6} className='mb-4'>
                                    <Card className='tcard text-white h-100'>
                                        <Card.Body className='d-flex flex-column align-items-center'>
                                            <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                            <Card.Title>Visual Studio</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={6} className='mb-4'>
                                    <Card className='tcard text-white h-100'>
                                        <Card.Body className='d-flex flex-column align-items-center'>
                                            <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                            <Card.Title>Visual Studio</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={6} className='mb-4'>
                                    <Card className='tcard text-white h-100'>
                                        <Card.Body className='d-flex flex-column align-items-center'>
                                            <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                            <Card.Title>Visual Studio</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}