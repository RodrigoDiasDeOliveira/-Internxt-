import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import Login from './components/Auth//Login';
import FilePanel from './components/FilePanel/FilePanel';
import UploadFile from './components/FileUpload/FileUpload';
import Register from './components/Auth/Register'; // Importar Register
import NavBar from './components/Layout/NavBar';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <NavBar />
          <h1>Internxt - Gestão de Arquivos</h1>
          <Routes>
            <Route path="/" element={<h2>Bem-vindo ao Internxt!</h2>} />
            <Route path="/upload" element={<UploadFile />} />
            <Route path="/files" element={<FilePanel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />{' '}
            {/* Adicionando a rota de registro */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
