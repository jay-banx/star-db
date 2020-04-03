import React, { Component } from "react";

import Row from "../Row";
import ErrorBoundry from "../ErrorBoundry";

import { PeopleList, PersonDetails } from "../sw-components";

class PeoplePage extends Component {
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
        <PeopleList onSelectedItem={this.onSelectedItem} />
      </ErrorBoundry>
    );

    const itemDetails = (
      <ErrorBoundry>
        <PersonDetails itemId={selectedItemId} />
      </ErrorBoundry>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;