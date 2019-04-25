import React, { Component } from 'react';
import './App.css';
import Teclado from './componentes/Teclado';
import Visor from './componentes/Visor'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import calcula from './reducers/calculadora'

const store = createStore(calcula);

class App extends Component {
  render() {
    store.dispatch({type:'AddNumber'})
    return (
      <div className="App">  
          <Visor />        
          <Teclado  store={store} />
      </div>
    );
  }
}

export default App;
