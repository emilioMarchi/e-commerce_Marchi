import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';


import Home from './views/Home';
import Favorites from './views/Favorites';
import Contact from './views/Contact';
import CardDetail from './views/CardDetail';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/favorites' exact component={Favorites} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/detail/:id' exact component={CardDetail} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
