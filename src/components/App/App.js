import React, { Component } from "react";

import "./App.css";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../PeoplePage";
import ErrorBoundry from "../ErrorBoundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/SwapiService";

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="app">
            <Header />
            <RandomPlanet />
            <PeoplePage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
