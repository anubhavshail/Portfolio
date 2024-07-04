import { Container, Row, Col, Card } from 'react-bootstrap';
// import mail1 from '../assets/img/mail.jpg';
// import react from '../assets/img/reactjs.svg'
import { techStack } from '../constants';
import TrackVisibility from 'react-on-screen';
import { isVisible } from '@testing-library/user-event/dist/utils';


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
        <section className='skills'>
            <Container className='mt-8'>
                <Row className='d-flex flex-wrap justify-content-between'>
                    <h2>Skills</h2>
                    {techStack.map((tech, index) => (
                          <Col xs={6} md={4} lg={3} key={index} className='my-2 d-flex justify-content-center'>
                              <TrackVisibility>
                                {( {isVisible} ) => 
                                  <div className={isVisible? "animate__animated animate__bounceInUp" : ""}>
                                    <Card className='py-2 px-4 rounded-lg d-flex align-items-center hover:scale-125 cursor-pointer'>
                                        <Card.Img variant='top' src={tech.link} className='w-25' />
                                        <Card.Body>
                                            <Card.Title className='text-md ml-3 text-white'>{tech.name}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                  </div> }
                              </TrackVisibility>
                          </Col>
                          ))}
                    
                </Row>
            </Container>
        </section>
    )
}