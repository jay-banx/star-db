import React, { Component } from "react";

import "./PeoplePage.css";

import SwapiService from "../../services/SwapiService";

import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";
import Row from "../Row";
import ErrorBoundry from "../ErrorBoundry";

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    idSelectedItem: null
  };

  onSelectedItem = idSelectedItem => {
    this.setState({ idSelectedItem });
  };

  render() {
    const { idSelectedItem } = this.state;

    const itemList = (
      <ItemList
        onSelectedItem={this.onSelectedItem}
        getData={this.swapiService.getAllPeople}
      >
        {item => `${item.name} (${item.gender})`}
      </ItemList>
    );

    const itemDetails = <ItemDetails personId={idSelectedItem} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;
