import React from "react";
import { Switch, Route } from 'react-router-dom';


//Reusable Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//Page Components
import Home from './pages/Home/Home';
import Schools from './pages/Schools/Schools';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import "./App.css";

function App() {
  return (
    <div className="App-outer-container">
      <Navbar />
      <div className="App-inner-container">
        <Switch>
          <Route exact path="/" render={props =>
            <Home />
          } />
          <Route exact path="/schools" render={props =>
            <Schools />
          } />
          <Route exact path="/login" render={props =>
            <Login />
          } />
          <Route exact path="/signup" render={props =>
            <Signup {...props} />
          } />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
