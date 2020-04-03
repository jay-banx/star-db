import React, { Component } from "react";

import Row from "../Row";
import ErrorBoundry from "../ErrorBoundry";

import { StarshipsList, StarshipDetails } from "../sw-components";

class StarshipsPage extends Component {
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
        <StarshipsList onSelectedItem={this.onSelectedItem} />
      </ErrorBoundry>
    );

    const itemDetails = (
      <ErrorBoundry>
        <StarshipDetails itemId={selectedItemId} />
      </ErrorBoundry>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}

export default StarshipsPage;
