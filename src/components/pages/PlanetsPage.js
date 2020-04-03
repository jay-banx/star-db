import React, { Component } from "react";

import Row from "../Row";
import ErrorBoundry from "../ErrorBoundry";

import { PlanetsList, PlanetDetails } from "../sw-components";

class PlanetsPage extends Component {
  state = {
    selectedItemId: 1,
  };

  onSelectedItem = (selectedItemId) => {
    this.setState({ selectedItemId });
  };

  render() {
    const { selectedItemId } = this.state;

    const itemList = (
      <ErrorBoundry>
        <PlanetsList onSelectedItem={this.onSelectedItem} />
      </ErrorBoundry>
    );

    const itemDetails = (
      <ErrorBoundry>
        <PlanetDetails itemId={selectedItemId} />
      </ErrorBoundry>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}

export default PlanetsPage;
