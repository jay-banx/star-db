import React, { Component } from "react";

import "./App.css";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

class App extends Component {
  state = {
    idSelectedPerson: null
  };

  onSelectedPerson = idSelectedPerson => {
    this.setState({ idSelectedPerson });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onSelectedPerson={this.onSelectedPerson} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.idSelectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
