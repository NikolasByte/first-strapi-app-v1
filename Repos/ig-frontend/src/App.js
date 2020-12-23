import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Index from './pages/Index'
import Create from './pages/Create'
import Nav from './components/Nav'
import SinglePost from './pages/SinglePost'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
        <BrowserRouter>
        <Nav/>
          <Switch>
              <Route path="/" exact component={Index}/>
              <Route path="/create" exact component={Create}/>
              <Route path="/:id" exact component={SinglePost}/>
          </Switch>
        </BrowserRouter>

    </div>
  ) 
}

export default App;
