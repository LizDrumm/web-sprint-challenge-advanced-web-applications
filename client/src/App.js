import React, { useState } from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage"
import PrivateRoute from './components/PrivateRoute';

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      
      <Switch>
          <PrivateRoute exact path='/protected' component={BubblePage} /> 
          <Route exact path='/login' component={Login} /> 
          {/* will redirect to the login page  */}
           <Route exact path='/' component={Login} /> 
          {/* this is just rendering the login when you hit the website- making the login page the home page  */}
        </Switch>
    </div>
    </Router>
  );
}


export default App;
