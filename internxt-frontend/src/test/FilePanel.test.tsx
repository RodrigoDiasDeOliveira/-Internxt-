import React from 'react';
import '../styles/LoadingSpinner.css';
import { render, screen, waitFor } from '@testing-library/react';
import { AuthContext } from '../components/context/AuthContext'; // Ajuste o caminho se necessário
import FilePanel from '../components/FilePanel/FilePanel'; // Ajuste o caminho se necessário
import '@testing-library/jest-dom/extend-expect'; // Importa as extensões do jest-dom

test('renders file panel and shows loading state', async () => {
  const mockLogin = jest.fn();
  const mockLogout = jest.fn();

  render(
    <AuthContext.Provider value={{ isAuthenticated: true, login: mockLogin, logout: mockLogout }}>
      <FilePanel />
    </AuthContext.Provider>
  );

  expect(screen.getByText(/carregando arquivos.../i)).toBeInTheDocument();

  // Simulando o fetch de arquivos
  await waitFor(() => expect(screen.getByText(/arquivos/i)).toBeInTheDocument());
});
