import React, { Component } from "react";

import "./ItemList.css";
import SwapiService from "../../services/SwapiService";
import Spinner from "../Spinner";

class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null
  };

  onGetPeopleList = peopleList => {
    this.setState({ peopleList });
    this.props.onSelectedPerson(peopleList[0].id);
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then(this.onGetPeopleList);
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onSelectedPerson(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const peopleListItems = this.renderItems(peopleList);

    return <ul className="item-list list-group">{peopleListItems}</ul>;
  }
}

export default ItemList;
