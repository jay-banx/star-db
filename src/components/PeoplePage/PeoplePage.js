import React, { Component } from "react";

import "./PeoplePage.css";

import SwapiService from "../../services/SwapiService";

import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorIndicator from "../ErrorIndicator";

const Row = ({ left, right }) => {
  return (
    <div className="people-page row mb2">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
};

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    idSelectedItem: null,
    hasError: false
  };

  onSelectedItem = idSelectedItem => {
    this.setState({ idSelectedItem });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { idSelectedItem, hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onSelectedItem={this.onSelectedItem}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    );

    const personDetails = <PersonDetails personId={idSelectedItem} />;

    return <Row left={itemList} right={personDetails} />;
  }
}

export default PeoplePage;
