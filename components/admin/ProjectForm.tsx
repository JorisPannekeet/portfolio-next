import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Project } from '../../lib/api';

const FormWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 35%;
  height: max-content;
  position: sticky;
  top: 6rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
`;

const Button = styled.button<{ cancel?: boolean }>`
  padding: 10px 15px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: ${({ cancel }) => (cancel ? '#666' : '#0070f3')};

  &:hover {
    background-color: ${({ cancel }) => (cancel ? '#555' : '#005bb5')};
  }
`;

interface ProjectFormProps {
  selectedProject: Project | null;
  onSubmit: (projectData: Omit<Project, 'id'>) => void;
  onCancel: () => void;
}

const ProjectForm = ({ selectedProject, onSubmit, onCancel }: ProjectFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (selectedProject) {
      setTitle(selectedProject.title);
      setDescription(selectedProject.description);
      setImage(selectedProject.image || '');
    } else {
      resetForm();
    }
  }, [selectedProject]);

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setImage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Please fill in all fields');
      return;
    }

    onSubmit({ title, description, image });
    resetForm();
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          rows={4}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button type="submit">{selectedProject ? 'Update' : 'Create'} Project</Button>
        {selectedProject && <Button type="button" cancel onClick={onCancel}>Cancel</Button>}
      </form>
    </FormWrapper>
  );
};

export default ProjectForm;
