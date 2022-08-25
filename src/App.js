import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />

        <Switch>
          
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/services" exact component={Services} />
          <Route path="/Sign-up" exact component={SignUp} />

        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
