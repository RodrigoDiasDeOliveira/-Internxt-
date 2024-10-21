import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface File {
  name: string;
  dateUploaded: string;
  // Adicione outras propriedades que você precisa aqui
}

const FilePanel: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      // Chame sua API para listar os arquivos aqui e atualize o estado
      fetchFiles();
    }
  }, [isAuthenticated]);

  const fetchFiles = async () => {
    try {
      const response = await fetch('/api/files'); // URL da sua API
      const data = await response.json();
      setFiles(data); // Certifique-se de que o formato de data esteja correto
    } catch (error) {
      console.error('Erro ao buscar arquivos:', error);
    }
  };

  return (
    <div>
      <h2>Arquivos</h2>
      <ul>
        {files.map((file) => (
          <li key={file.name}>
            {file.name} - {file.dateUploaded}
            {/* Adicione opções para download e exclusão aqui */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilePanel;
