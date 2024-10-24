import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Auth/Login';

describe('Login Component', () => {
  it('deve renderizar o formulário de login', () => {
    render(<Login />);
      
    const loginButton = screen.getByRole('button', { name: /Entrar/i });
    
    // Simula o clique no botão de login
    fireEvent.click(loginButton);
    
   
  });
});
