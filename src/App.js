import React from 'react';
import logo from './logo.svg';
import './App.css';
import BarraNavegacao from './Componentes/BarraNavegacao';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Produtos from './Componentes/Produtos';

function App() {
  return (
    <div className="App">
      <Router>
        <BarraNavegacao/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/produtos" component={Produtos}></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
