import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import HeroImage from './hero_image';

const renderBackgroundImage = () => {
    <div>
        <HeroImage/>
    </div>
}

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
                                <p>
                                    Looking to start the career as an entry-level software engineer with a reputed firm driven by technology. Proficient in C++, Python, GIT. Skilled in Web Development. Passionate about implementing and launching new projects.
                                </p>
                            </div>
                        </TrackVisibility> 
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <div>
                            {renderBackgroundImage}
                        </div>
                    </Col>
                </Row>
                
            </Container>
            
        </section>
    )
}
