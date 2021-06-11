import './App.css';
import React, {Component, useEffect} from 'react';
import Prodotti from '../src/Components/ProdottiComponent'
import DataContextProvider from './Context/DataContext';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProdottiService from './services/ProdottiSerivce';
import ProdottiFetch from './services/ProdottiSerivce';
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Home from './Components/Home';
import ModificaProdotti from './Components/ModoficaProdotti'
import ModificaProdotti2 from './Components/ModificaProdotto2'



class App extends Component {

  

  render() {
    return (
      <>
     
      <DataContextProvider/>
      <Router>
        <Header/>
        <Switch>
          {/* <ProdottiFetch/> */}
          <Route exact path="/prodotti" component={ProdottiFetch}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/prodotti/:id" component={ProdottiFetch} />
        </Switch>
        <Footer/>
      </Router>
      </>
      
    );
  }
}

export default App;
