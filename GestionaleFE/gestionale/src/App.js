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
import DipComponent from './Components/DipendentiComponent'
import DipSingle from './Components/DIpSingle';
import ForComponent from './Components/FornitoriComponent'
import ForSingle from './Components/ForSingle';



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
          {/* <Route exact path="/prodotti/:id" component={ProdottiFetch} /> */}
          <Route exact path="/dipendenti" component={DipComponent}/>
          <Route exact path="/dipendenti/:id" component={DipSingle} />
          <Route exact path="/fornitori" component={ForComponent}/>
          <Route exact path="/fornitori/:id" component={ForSingle}/>
          <Route exact path="/" component={Home}/>
        </Switch>
        <Footer/>
      </Router>
      </>
      
    );
  }
}

export default App;
