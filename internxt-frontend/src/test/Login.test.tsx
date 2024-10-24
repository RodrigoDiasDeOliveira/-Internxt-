import React from 'react';
import '../styles/LoadingSpinner.css';
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../components/context/AuthContext'; // Ajuste o caminho se necessário
import Login from '../components/Auth/Login'; // Ajuste o caminho se necessário
import '@testing-library/jest-dom/extend-expect'; // Importa as extensões do jest-dom

test('renders login form', () => {
  const mockLogin = jest.fn();
  const mockLogout = jest.fn();

  render(
    <AuthContext.Provider value={{ 
      isAuthenticated: false, 
      login: mockLogin, 
      logout: mockLogout 
    }}>
      <Login />
    </AuthContext.Provider>
  );

  expect(screen.getByLabelText(/usuário/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
});
