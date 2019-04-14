import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import store from './store';
import './App.css';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser,logoutUser} from './actions/authActions';

// Check for Token
if (localStorage.jwtToken){
  // Set auth token header
  setAuthToken(localStorage.jwtToken);
  // Decode get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and is Authenticated flag in redux
  store.dispatch(setCurrentUser(decoded));
// check for expired token
const currentTime = Date.now()/1000;
if(decoded.exp < currentTime){
  //logout user
  store.dispatch(logoutUser());
  //REdirect to login
  window.location.href = '/login';
}

}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

/*{ originally inside div <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */
