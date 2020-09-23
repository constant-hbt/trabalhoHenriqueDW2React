import React from 'react';
import logo from './logo.svg';
import './App.css';
import BarraNavegacao from './Componentes/BarraNavegacao';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';

function App() {
  return (
    <div className="App">
      <BarraNavegacao/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
