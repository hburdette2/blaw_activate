import React from "react";
import { Switch, Route } from 'react-router-dom';
import caseService from "./services/case-api";

//Reusable Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//Page Components
import Home from './pages/Home/Home';
import Schools from './pages/Schools/Schools';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import "./App.css";
import userService from "./utils/userService";
import schoolService from "./utils/schoolService";

class App extends React.Component {
  state = {
    user: userService.getUser(),
    school: [],
    cases: []
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  handleGetSchools = async () => {
    const schools = await schoolService.index();
    this.setState({ school: schools })
    console.log(schools);
  }

  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null
    });
  }

  handleGetCases = async () => {
    caseService.getCases().then(data => {
      this.setState({
        cases: data.results
      })
    })
  }

  handleDelete = (id) => {
    schoolService.deleteOne(id)
  }

  componentDidMount() {
    this.handleGetSchools();
    this.handleGetCases();
  }


  render() {

    return (
      <div className="App-outer-container">
        <Navbar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        {console.log(this.state.cases)}
        <div className="App-inner-container">
          <Switch>
            <Route exact path="/" render={props =>
              <Home
                {...props} cases={this.state.cases} handleGetCases={this.handleGetCases} />}
            />
            <Route exact path="/schools" render={props =>
              <Schools {...props} school={this.state.school} handleGetSchools={this.handleGetSchools} handleDelete={this.handleDelete} />
            } />
            <Route exact path="/login" render={props =>
              <Login {...props} handleSignupOrLogin={this.handleSignupOrLogin} />
            } />
            <Route exact path="/signup" render={props =>
              <Signup {...props} handleSignupOrLogin={this.handleSignupOrLogin} />
            } />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
