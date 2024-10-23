import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from '../LoadingSpinner'; // Importe o LoadingSpinner

const Login: React.FC = () => {
  const { login } = useAuth() || { login: () => Promise.reject() }; // Tratando o caso undefined
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Começa a carregar

    try {
      await login(username, password);
      navigate('/files'); // Redireciona para o painel de arquivos após login
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    } finally {
      setIsLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Nome de Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>Login</button> {/* Desabilita o botão enquanto carrega */}
      </form>
      {isLoading && <LoadingSpinner />} {/* Exibe o spinner durante o carregamento */}
    </div>
  );
};

export default Login;
