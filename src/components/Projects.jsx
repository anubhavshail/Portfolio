import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import img1 from "../assets/img/mail.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png"
//import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
        
                            </div>
                            } 
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />     
        </section>
    )
}