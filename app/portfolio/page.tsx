'use client';

import styled from 'styled-components';
import ProjectCard from '../../components/ProjectCard';
import { getProjects, Project } from '../../lib/api';
import { useEffect, useState } from 'react';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 40px;
`;


const PortfolioPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();
      setProjects(projects);
    };

    fetchProjects();
  }, []);

  return (
    <Grid>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Grid>
  );
};

export default PortfolioPage;
