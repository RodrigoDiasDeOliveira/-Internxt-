import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { AuthContext } from '../components/context/AuthContext';
import FilePanel from '../components/FilePanel/FilePanel';
import '@testing-library/jest-dom/extend-expect';

test('displays no files message when file list is empty', async () => {
  render(
    <AuthContext.Provider value={{ isAuthenticated: true }}>
      <FilePanel />
    </AuthContext.Provider>
  );

  // Simula uma resposta vazia de arquivos

  await waitFor(() => expect(screen.getByText(/nenhum arquivo encontrado/i)).toBeInTheDocument());
});

