import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from '../components/Auth/Login'; // Certifique-se de ajustar o caminho conforme o local do seu componente

test('Login form submits successfully with correct credentials', () => {
  // Renderiza o componente Login
  const { getByPlaceholderText, getByText } = render(<Login />);

  // Encontra os inputs e o botão
  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');

  // Simula a entrada de dados corretos
  fireEvent.change(usernameInput, { target: { value: 'admin' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });

  // Simula o clique no botão de login
  fireEvent.click(loginButton);

  // Verifica se o alerta de sucesso foi disparado
  expect(window.alert).toHaveBeenCalledWith('Login successful');
});

test('Login form fails with incorrect credentials', () => {
  // Renderiza o componente Login
  const { getByPlaceholderText, getByText } = render(<Login />);

  // Encontra os inputs e o botão
  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');

  // Simula a entrada de dados incorretos
  fireEvent.change(usernameInput, { target: { value: 'wronguser' } });
  fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });

  // Simula o clique no botão de login
  fireEvent.click(loginButton);

  // Verifica se o alerta de falha foi disparado
  expect(window.alert).toHaveBeenCalledWith('Login failed');
});
