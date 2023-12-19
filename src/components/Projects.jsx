import { Container, Row } from "react-bootstrap"
import ProjectCard from "./ProjectCard"
import img1 from "../assets/img/mail.jpg"

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
    ]

    return (
        <section className="project" id="projects">
            <h2>Projects</h2>
            <Container>
                <Row>
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard key={index} {...project}/>                        
                        )
                    })}
                </Row>
            </Container>        
        </section>
    )
}