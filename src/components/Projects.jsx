import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import img1 from "../assets/img/mail.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png"
//import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    
    const projects = [
        {
            title: "Bulk Mail Dispatcher",
            description: "Python, Flask, HTML, CSS",
            imgUrl: img1,
            gitUrl: "https://github.com/anubhavshail/Bulk_Mail_Dispatcher-.git"
        },
        {
            title: "Inteligent Video Surveillance System",
            description: "Python, Flask, Darknet, HTML, CSS, YOLOv4",
            imgUrl: img1,
            gitUrl: "https://github.com/anubhavshail/Video_analyzer.git"
        },
        {
            title: "To Do List",
            description: "React.js, Node.js, MongoDB, HTML, CSS ",
            imgUrl: img1,
            gitUrl: "g3"
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h2>Projects</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quibusdam culpa quos molestiae ad odit nulla placeat amet doloribus est voluptas temporibus quas inventore ratione incidunt, qui, cumque cupiditate? Quisquam.</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : "" }>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard key={index} {...project} />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="section">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis debitis quos quisquam voluptates excepturi tempore doloribus mollitia nostrum molestias! Aut repudiandae error sint quam cumque iste dicta vitae impedit perspiciatis!</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quas quam necessitatibus et exercitationem assumenda quasi? Ipsum eveniet eos vero quae ipsam dolorum quidem placeat, amet non illum cum officia.</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
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