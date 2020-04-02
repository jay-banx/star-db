import React, { Component } from "react";

import "./App.css";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../PeoplePage";
import ErrorBoundry from "../ErrorBoundry";

class App extends Component {
  render() {
    return (
      <ErrorBoundry>
        <div className="app">
          <Header />
          <RandomPlanet />
          <PeoplePage />
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
