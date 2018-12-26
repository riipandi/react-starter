import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

import logo from '../img/logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-blue-darker font-sans">
        <div className="text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-white text-3xl">Welcome to React</h1>
          <p className="text-base text-grey mt-4">
            To get started, edit <code>src/page/Home.js</code> and save to reload.
          </p>
          <p className="text-base text-grey mt-4">
            This is an <NavLink className="text-blue hover:text-red no-underline" actvieClassName="active" to="/example">example page</NavLink>.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
