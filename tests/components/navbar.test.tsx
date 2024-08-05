import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../../components/Navbar';  

// Mock the useUser hook
jest.mock('@auth0/nextjs-auth0/client', () => ({
  useUser: jest.fn(),
}));




describe('Navbar Component', () => {
  it('renders the logo', () => {
    const { useUser } = require('@auth0/nextjs-auth0/client');
    (useUser as jest.Mock).mockReturnValue({ user: null });

    render(<Navbar />);

    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('renders all nav links', () => {
    const { useUser } = require('@auth0/nextjs-auth0/client');
    (useUser as jest.Mock).mockReturnValue({ user: null });

    render(<Navbar />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('About me')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
  });

  it('renders login link when user is not authenticated', () => {
    const { useUser } = require('@auth0/nextjs-auth0/client');
    (useUser as jest.Mock).mockReturnValue({ user: null });

    render(<Navbar />);

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
  });

  it('renders logout link when user is authenticated', () => {
    const { useUser } = require('@auth0/nextjs-auth0/client');
    (useUser as jest.Mock).mockReturnValue({ user: { name: 'Test User' } });

    render(<Navbar />);

    expect(screen.getByText('Logout')).toBeInTheDocument();
    expect(screen.queryByText('Login')).not.toBeInTheDocument();
  });

  it('has correct href attributes for all links', () => {
    render(<Navbar />);
    
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Portfolio').closest('a')).toHaveAttribute('href', '/portfolio');
    expect(screen.getByText('About me').closest('a')).toHaveAttribute('href', '/about-me');
    expect(screen.getByText('Admin').closest('a')).toHaveAttribute('href', '/admin');
  });
});