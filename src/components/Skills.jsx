import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mail1 from '../assets/img/mail.jpg';
import react from '../assets/img/reactjs.svg'


export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div className='d-flex align-item-center justify-content-center text-white'>
            <Row className='g-4'>
                <Col xs={12} md={4} className='bg-primary '>
                    <Container>
                        <Row className='d-flex flex-column'>
                            <Col className='align-item-center'>
                                <h3 className='align-item-center'>Frontend</h3>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={6} className='mb-4'>
                                        <Card className='bg-secondary border-0 text-white h-100' style={{borderRadius: '15px'}}>
                                            <Card.Body className='d-flex flex-column align-items-center'>
                                                <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                                <Card.Title>Visual Studio</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={6} className='mb-4'>
                                        <Card className='bg-secondary border-0 text-white h-100' style={{borderRadius: '15px'}}>
                                            <Card.Body className='d-flex flex-column align-items-center'>
                                                <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                                <Card.Title>Visual Studio</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={6} className='mb-4'>
                                        <Card className='bg-secondary border-0 text-white h-100' style={{borderRadius: '15px'}}>
                                            <Card.Body className='d-flex flex-column align-items-center'>
                                                <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                                <Card.Title>Visual Studio</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={6} className='mb-4'>
                                        <Card className='bg-secondary border-0 text-white h-100' style={{borderRadius: '15px'}}>
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
                </Col>
                <Col xs={12} md={4}>
                    <Container>
                        <Row className='d-flex flex-column'>
                            <Col>
                                <h3 className='align-item-center'>Backend</h3>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={6} className='mb-4'>
                                        <Card className='bg-secondary border-0 text-white h-100' style={{borderRadius: '15px'}}>
                                            <Card.Body className='d-flex flex-column align-items-center'>
                                                <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                                <Card.Title>Visual Studio</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={6} className='mb-4'>
                                        <Card className='bg-secondary border-0 text-white h-100' style={{borderRadius: '15px'}}>
                                            <Card.Body className='d-flex flex-column align-items-center'>
                                                <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                                <Card.Title>Visual Studio</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={6} className='mb-4'>
                                        <Card className='bg-secondary border-0 text-white h-100' style={{borderRadius: '15px'}}>
                                            <Card.Body className='d-flex flex-column align-items-center'>
                                                <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                                <Card.Title>Visual Studio</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={6} className='mb-4'>
                                        <Card className='bg-secondary border-0 text-white h-100' style={{borderRadius: '15px'}}>
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
                </Col>
                <Col xs={12} md={4}>
                    <Container>
                        <Row className='d-flex flex-column'>
                            <Col>
                                <h3 className='align-item-center'>Database</h3>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={6} className='mb-4'>
                                        <Card className='bg-secondary border-0 text-white h-100' style={{borderRadius: '15px'}}>
                                            <Card.Body className='d-flex flex-column align-items-center'>
                                                <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                                <Card.Title>Visual Studio</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={6} className='mb-4'>
                                        <Card className='bg-secondary border-0 text-white h-100' style={{borderRadius: '15px'}}>
                                            <Card.Body className='d-flex flex-column align-items-center'>
                                                <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                                <Card.Title>Visual Studio</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={6} className='mb-4'>
                                        <Card className='bg-secondary border-0 text-white h-100' style={{borderRadius: '15px'}}>
                                            <Card.Body className='d-flex flex-column align-items-center'>
                                                <Card.Img variant='top' src={react} className='mb-3' style={{ width: '90px', height: '90px' }} />
                                                <Card.Title>Visual Studio</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={6} className='mb-4'>
                                        <Card className='bg-secondary border-0 text-white h-100' style={{borderRadius: '15px'}}>
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
                </Col>
            </Row>

        </div>
    )
}