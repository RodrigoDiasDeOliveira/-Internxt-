import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FixedSizeList as List } from 'react-window';
import LoadingSpinner from '../LoadingSpinner'; // Importe o spinner

interface File {
  name: string;
  dateUploaded: string;
}

const FilePanel: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Inicialmente true para mostrar o spinner ao carregar

  useEffect(() => {
    if (isAuthenticated) {
      fetchFiles();
    }
  }, [isAuthenticated]);

  const fetchFiles = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/files'); // URL da sua API
      const data = await response.json();
      setFiles(data);
    } catch (error) {
      console.error('Erro ao buscar arquivos:', error);
    } finally {
      setIsLoading(false); // Garanta que o loading seja removido no final do fetch
    }
  };

  // Função que renderiza cada linha de arquivo na lista virtualizada
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const file = files[index];
    return (
      <div style={style} className="file-item">
        {file.name} - {file.dateUploaded}
        {/* Adicione opções para download e exclusão aqui */}
      </div>
    );
  };

  return (
    <div>
      <h2>Arquivos</h2>
      {isLoading ? (
        <LoadingSpinner /> // Exibe o spinner enquanto os arquivos estão carregando
      ) : (
        <List
          height={400} // Altura da área visível
          itemCount={files.length} // Quantidade total de itens
          itemSize={35} // Altura de cada item
          width={'100%'} // Largura da lista
        >
          {Row}
        </List>
      )}
    </div>
  );
};

export default FilePanel;
