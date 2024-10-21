// src/layout/NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Se estiver usando react-router

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/upload">Upload de Arquivos</Link>
        </li>
        <li>
          <Link to="/files">Painel de Arquivos</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
