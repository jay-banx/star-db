import React, { Component } from "react";

import "./PeoplePage.css";

import SwapiService from "../../services/SwapiService";

import ItemList from "../ItemList";
import ItemDetails, { Record } from "../ItemDetails";
import Row from "../Row";
import ErrorBoundry from "../ErrorBoundry";

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItemId: null
  };

  onSelectedItem = selectedItemId => {
    this.setState({ selectedItemId });
  };

  render() {
    const { selectedItemId } = this.state;

    const itemList = (
      <ItemList
        onSelectedItem={this.onSelectedItem}
        getData={this.swapiService.getAllPeople}
      >
        {item => `${item.name} (${item.gender})`}
      </ItemList>
    );

    const itemDetails = (
      <ItemDetails
        itemId={selectedItemId}
        getData={this.swapiService.getPerson}
      >
        <Record field="gender" label="Gender:" />
        <Record field="birthYear" label="Birth year:" />
        <Record field="eyeColor" label="Eye color:" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;
