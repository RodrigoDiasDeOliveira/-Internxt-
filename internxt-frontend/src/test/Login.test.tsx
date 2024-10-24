import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Auth/Login';

describe('Login Component', () => {
  it('deve renderizar o formulário de login', () => {
    render(<Login />);
    
    // Verifica se o campo de e-mail está presente
    const emailInput = screen.getByLabelText(/Email/i);
    expect(emailInput).toBeInTheDocument();

    // Verifica se o campo de senha está presente
    const passwordInput = screen.getByLabelText(/Senha/i);
    expect(passwordInput).toBeInTheDocument();

    // Verifica se o botão de login está presente
    const loginButton = screen.getByRole('button', { name: /Entrar/i });
    expect(loginButton).toBeInTheDocument();
  });

  it('deve chamar a função de login ao clicar no botão', () => {
    const mockLoginFunction = jest.fn();
    render(<Login onLogin={mockLoginFunction} />);

    const loginButton = screen.getByRole('button', { name: /Entrar/i });
    
    // Simula o clique no botão de login
    fireEvent.click(loginButton);
    
    // Verifica se a função de login foi chamada
    expect(mockLoginFunction).toHaveBeenCalledTimes(1);
  });
});
