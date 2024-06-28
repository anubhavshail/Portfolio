import React from 'react';
import{ useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/webdev.svg';
import 'animate.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Backend Developer", "MERN Developer"];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex -1);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }
        else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible}) =>
                            <div className={isVisible? "animate_animated animate_fadeIn" : ""}>
                                <h1>{`Hi! I'm Anubhav Shail`} <span className='txt-rotate' dataPeriod="1000" data-rotate='["Web Developer", "MERN Developer", "Backend Developer"]'><span className='wrap'>{text}</span></span></h1>
                                <p>
                                    Looking to start the career as an entry-level software engineer with a reputed firm driven by technology. Proficient in C++, Python, GIT. Skilled in Web Development. Passionate about implementing and launching new projects.
                                </p>
                                <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                            </div>}
                        </TrackVisibility> 
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <img src={headerImg} alt="Header Img"/>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container> 
        </section>
    )
}
