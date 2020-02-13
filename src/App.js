import React, { Component } from 'react'
import { default as Navbar } from './Components/GeneralComponents/Navbar/Navbar';
import MainComponent from './Components/GeneralComponents/MainComponent/MainComponent';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'
import './bootstrap.min.css'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <MainComponent></MainComponent>
        </Router>
      </div>
      )
  }
}

export default App