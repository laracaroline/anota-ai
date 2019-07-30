import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pagina from './components/Pagina';

function App() {
  return (
    <div>
      <Navbar/>
      <Pagina/>
    </div>
    
    
  );
}

export default App;
