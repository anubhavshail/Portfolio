import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


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
        <section className="skills">
            <Container>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
            <div>
                <h1>Skills</h1>
                <div>
                    <h2>Programming Languages</h2>
                    <ul>
                        <li>C++</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div>
                    <h2>Frontend</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                    </ul>
                </div>
                <div>
                    <h2>Backend</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Flask</li>
                    </ul>
                </div>
                <div>
                    <h2>Database</h2>
                    <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}