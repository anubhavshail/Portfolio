import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function ProjectCard({ title, description, imgUrl, gitUrl}) {
  return (
    <Col size={12} sm={6} md={4}>
        <a href={gitUrl} target='_blank' rel='noopener noreferrer'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    </Col>
    
  );
}

export default ProjectCard;