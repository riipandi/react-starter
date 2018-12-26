import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Example extends Component {
  render() {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-blue-darker">
        <div className="text-center">
          <h1 className="text-white text-3xl">Another Page</h1>
          <p className="text-base text-grey mt-4">
            To get started, edit <code>src/page/Example.js</code> and save to reload.
          </p>
          <p className="text-base text-grey mt-4">
            Back to <NavLink className="text-blue hover:text-red no-underline" actvieClassName="active" to="/">index page</NavLink>.
          </p>
        </div>
      </div>
    );
  }
}

export default Example;
