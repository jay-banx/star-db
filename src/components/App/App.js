import React, { Component } from "react";

import "./App.css";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import ErrorBoundry from "../ErrorBoundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/SwapiService";
import DummySwapiService from "../../services/DummySwapiService";

class App extends Component {
  state = {
    swapiService: new SwapiService(),
  };

  onToggleSwapiService = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="app">
            <Header onToggleSwapiService={this.onToggleSwapiService} />
            <RandomPlanet />
            <PeoplePage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
