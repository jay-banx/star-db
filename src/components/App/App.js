import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBoundry from "../ErrorBoundry";
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage,
} from "../pages";

import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/SwapiService";
import DummySwapiService from "../../services/DummySwapiService";

import { PersonDetails } from "../sw-components";

class App extends Component {
  state = {
    swapiService: new DummySwapiService(),
    isLoggedIn: false,
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

  onLogIn = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { swapiService, isLoggedIn } = this.state;
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={swapiService}>
          <Router>
            <div className="app">
              <Header onToggleSwapiService={this.onToggleSwapiService} />
              <RandomPlanet />

              <Switch>
                <Route
                  path="/"
                  render={() => <h2>Welcome to StarDB</h2>}
                  exact
                />
                <Route path="/people" exact component={PeoplePage} />
                <Route
                  path="/people/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <PersonDetails itemId={id} />;
                  }}
                />
                <Route path="/planets/:id?" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} />

                <Route
                  path="/login"
                  render={() => {
                    return (
                      <LoginPage
                        isLoggedIn={isLoggedIn}
                        onLogIn={this.onLogIn}
                      />
                    );
                  }}
                />
                <Route
                  path="/secret"
                  render={() => {
                    return <SecretPage isLoggedIn={isLoggedIn} />;
                  }}
                />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
