import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../../components/ProjectCard';  
import { Project } from '../../lib/api'; 


describe('ProjectCard Component', () => {
  const mockProject: Project = {
    id: 123,
    title: 'Test Project',
    description: 'This is a test project description',
    image: 'https://example.com/test-image.jpg',
  };

  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  it('renders project image when provided', () => {
    render(<ProjectCard project={mockProject} />);
    const image = screen.getByAltText('Test Project') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toBe('https://example.com/test-image.jpg');
  });

  it('does not render image when not provided', () => {
    const projectWithoutImage = { ...mockProject, image: undefined };
    render(<ProjectCard project={projectWithoutImage} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  
});