import styled from 'styled-components';
import { Project } from '../../lib/api';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 65%;

`;

const ProjectCard = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const ProjectDescription = styled.p`
  margin: 0;
  color: #666;
`;

const ProjectImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 5px;
  object-fit: cover;
  margin-right: 15px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #0070f3;

  &:hover {
    background-color: #005bb5;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #de2257;
  margin-left: 1rem;

  &:hover {
    background-color: #d62839;
  }
`;

interface ProjectListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
}

const ProjectList = ({ projects, onEdit, onDelete }: ProjectListProps) => {
  return (
    <ListWrapper>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {project.image && <ProjectImage src={project.image} alt={project.title} />}
            <ProjectDetails>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectDetails>
          </div>
          <div>
            <Button onClick={() => onEdit(project)}>Edit</Button>
            <DeleteButton onClick={() => onDelete(project.id)}>Delete</DeleteButton>
          </div>
        </ProjectCard>
      ))}
    </ListWrapper>
  );
};

export default ProjectList;
