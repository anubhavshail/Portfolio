import { Col } from 'react-bootstrap';

function ProjectCard({ title, description, imgUrl, gitUrl}) {
  return (
    <Col size={12} sm={6} md={4}>
        <a href={gitUrl} target='_blank' rel='noopener noreferrer'>
            <div className='project_img'>
                <img src={imgUrl} alt='project img' />
                <div className='proj_txt'>
                    <h4>{title}</h4>
                    <span>
                    {description}
                    </span>
                </div>
            </div>
        </a>
    </Col>
  );
}

export default ProjectCard;