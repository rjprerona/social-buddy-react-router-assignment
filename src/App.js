import { Button } from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SinglePost from './components/SinglePost/SinglePost';

function App() {
  return (
    <div>
      <Header></Header>
       <Router>
          <Switch>
             <Route exact path="/">
               <Home></Home>
             </Route>
             <Route exact path='/post/:key'>
                        <SinglePost></SinglePost>
                    </Route>
             <Route path="*">
                <NotFound></NotFound>
             </Route>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
