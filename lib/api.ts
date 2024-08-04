import axios from 'axios';

const API_URL = 'https://66acc6d6f009b9d5c7335bb9.mockapi.io/';

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
}

export async function getProjects(): Promise<Project[]> {
  const response = await axios.get<Project[]>(`${API_URL}/projects`);
  return response.data;
}

export async function createProject(projectData: Omit<Project, 'id'>): Promise<Project> {
  const response = await axios.post<Project>(`${API_URL}/projects`, projectData);
  return response.data;
}

export async function updateProject(id: number, projectData: Omit<Project, 'id'>): Promise<Project> {
  const response = await axios.put<Project>(`${API_URL}/projects/${id}`, projectData);
  return response.data;
}

export async function deleteProject(id: number): Promise<void> {
  await axios.delete(`${API_URL}/projects/${id}`);
}