import React, { Component } from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom'

import Home from './containers/Home'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Route exact path='/' component={Home} />
          <Route exact path='/address' component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
