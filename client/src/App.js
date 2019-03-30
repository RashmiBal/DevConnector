import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import './App.css';

class App extends Component {
  render() {
    return (
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
