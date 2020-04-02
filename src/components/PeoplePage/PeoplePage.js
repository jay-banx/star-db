import React, { Component } from "react";

import "./PeoplePage.css";

import Row from "../Row";
import ErrorBoundry from "../ErrorBoundry";

import {
  PeopleList,
  PlanetsList,
  StarshipsList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../sw-components";

class PeoplePage extends Component {
  state = {
    selectedItemId: null
  };

  onSelectedItem = selectedItemId => {
    this.setState({ selectedItemId });
  };

  render() {
    const { selectedItemId } = this.state;

    const itemList = <PeopleList onSelectedItem={this.onSelectedItem} />;

    const itemDetails = <PersonDetails itemId={selectedItemId} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;
