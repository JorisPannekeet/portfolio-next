"use client";
import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

import { getProjects, createProject, updateProject, deleteProject, Project } from '../../lib/api';
import ProjectList from '../../components/admin/ProjectList';
import ProjectForm from '../../components/admin/ProjectForm';
import styled from 'styled-components';
import GlobalStyle from '../../styles/admin';
import { TextSection, ContentContainer } from '@/components/ContentSection';
import { StyledLink } from '@/styles/components';

const AdminPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;


const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { user, error, isLoading } = useUser();

  const loadProjects = async () => {
    try {
      const projectsData = await getProjects();
      setProjects(projectsData);
    } catch (error) {
      console.error('Failed to load projects', error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleCreateOrUpdate = async (projectData: Omit<Project, 'id'>) => {
    try {
      if (selectedProject) {
        await updateProject(selectedProject.id, projectData);
      } else {
        await createProject(projectData);
      }
      loadProjects();
      setSelectedProject(null);
    } catch (error) {
      console.error('Failed to save project', error);
    }
  };

  const handleEdit = (project: Project) => {
    setSelectedProject(project);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteProject(id);
      loadProjects();
    } catch (error) {
      console.error('Failed to delete project', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) {
    return (
      <ContentContainer>
        <TextSection>
          <h1>Unauthorized</h1>
          <p>You must be logged in to view this page</p>
          <StyledLink href="/api/auth/login">Login</StyledLink>
        </TextSection >
      </ContentContainer >
    );
  }

  return (
    <AdminPageWrapper>
      <GlobalStyle />
      <Title>Project Admin Page</Title>
      <ProjectWrapper>
        <ProjectForm
          selectedProject={selectedProject}
          onSubmit={handleCreateOrUpdate}
          onCancel={() => setSelectedProject(null)}
        />
        <ProjectList
          projects={projects}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </ProjectWrapper>
    </AdminPageWrapper>
  );
};

export default Projects;
