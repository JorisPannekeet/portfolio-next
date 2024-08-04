import styled from 'styled-components';
import { Project } from '../lib/api';

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 16px;

  h3 {
    font-size: 1.5em;
    margin-bottom: 8px;
    color: #e91e63;
  }

  p {
    font-size: 0.9em;
    color: #666;
    line-height: 1.5;
  }
`;

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card>
      <ImageContainer>
        {project.image && <img src={project.image} alt={project.title} />}
      </ImageContainer>
      <Content>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </Content>
    </Card>
  );
};

export default ProjectCard;
