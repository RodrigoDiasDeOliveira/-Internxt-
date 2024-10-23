import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import FilePanel from './components/FilePanel/FilePanel'; // Exemplo de outro componente que pode ser carregado normalmente
import LoadingSpinner from './components/LoadingSpinner'; // Um componente de loading

// Lazy loading do Login
const Login = React.lazy(() => import('./components/Auth/Login'));

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/files" element={<FilePanel />} />
            {/* Outras rotas */}
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
};

export default App;
