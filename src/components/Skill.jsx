import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import bash from '../assets/img/bash.svg';
import js from '../assets/img/javascript.svg';
import react from '../assets/img/reactjs.svg';

export const Skill = () => {
    return (
        <div className='d-flex justify-content-center align-item-center vh-100 bg-primary text-white'>
            <Container className='text-center'>
                <Row>
                    <Col xs={12} md={4} className='mb-4' bg="dark">
                        <h4 className='align-item-center'>Frontend</h4>
                        <Row>
                            <Col xs={6} className='mb-4'>
                                <Card className='bg-secondary border-0 text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} className='mb-4'>
                                <Card className='bg-secondary text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} className='mb-4'>
                                <Card className='bg-secondary text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} className='mb-4'>
                                <Card className='bg-secondary text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row> 
                    </Col>
                    <Col xs={12} md={4} className='bg-danger' bg="dark">
                        <h4 className='align-item-center'>Frontend</h4>
                        <Row>
                            <Col xs={6} className='mb-4'>
                                <Card className='bg-secondary text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} className='mb-4'>
                                <Card className='bg-secondary text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} className='mb-4'>
                                <Card className='bg-secondary text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} className='mb-4'>
                                <Card className='bg-secondary text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row> 
                    </Col>
                    <Col xs={12} md={4} className='bg-danger' bg="dark">
                        <h4 className='align-item-center'>Frontend</h4>
                        <Row>
                            <Col xs={6} className='mb-4'>
                                <Card className='bg-secondary text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} className='mb-4'>
                                <Card className='bg-secondary text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} className='mb-4'>
                                <Card className='bg-secondary text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} className='mb-4'>
                                <Card className='bg-secondary text-white h-100'>
                                    <Card.Body className='d-flex flex-column align-items-center'>
                                        <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                        <Card.Title>Visual Studio</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}