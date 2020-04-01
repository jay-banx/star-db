import React, { Component } from "react";

import "./ItemList.css";
import SwapiService from "../../services/SwapiService";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
    loading: true,
    error: false
  };

  onGetPeopleList = peopleList => {
    this.setState({ peopleList, loading: false });
    this.props.onSelectedPerson(peopleList[0].id);
  };

  getPeopleList = () => {
    this.setState({ loading: true, error: false }, () => {
      this.swapiService
        .getAllPeople()
        .then(this.onGetPeopleList)
        .catch(this.onError);
    });
  };

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };

  componentDidMount() {
    this.getPeopleList();
  }

  render() {
    const { onSelectedPerson } = this.props;
    const { peopleList, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const peopleView = hasData ? (
      <PeopleView peopleList={peopleList} onSelectedPerson={onSelectedPerson} />
    ) : null;

    return (
      <React.Fragment>
        {errorMessage}
        {spinner}
        {peopleView}
      </React.Fragment>
    );
  }
}

const PeopleView = ({ peopleList, onSelectedPerson }) => {
  const peopleListItems = peopleList.map(({ id, name }) => {
    return (
      <li
        key={id}
        className="list-group-item"
        onClick={() => onSelectedPerson(id)}
      >
        {name}
      </li>
    );
  });

  return <ul className="item-list list-group">{peopleListItems}</ul>;
};

export default ItemList;
