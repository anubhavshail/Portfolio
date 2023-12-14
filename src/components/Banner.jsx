import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='aligh-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            <div className='banner__content'>
                                <span className='tagline'>Welcome to my Portfolio</span>
                                <h1>Hi! I'm Anubhav Shail</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.</p>
                            </div>
                        </TrackVisibility> 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
