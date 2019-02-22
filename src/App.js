import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Search from './Pages/Search/Search';
import Login from './Pages/Login/Login';


class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <body className="background">
     
    <Switch>
    <Route path='/' exact component={Login} />
    <Route path='/search' exact component={Search} />
    
    </Switch>
    </body>
</ BrowserRouter>
      
    );
  }
}

export default App;

