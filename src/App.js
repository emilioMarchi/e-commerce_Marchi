import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import './App.css';


import CardListContainer from './components/CardListContainer/CardListContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <CardListContainer />
    </div>
  );
}

export default App;
