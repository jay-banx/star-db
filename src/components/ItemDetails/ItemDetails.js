import React, { Component } from "react";

import "./ItemDetails.css";

import SwapiService from "../../services/SwapiService";

import ErrorIndicator from "../ErrorIndicator";
import Spinner from "../Spinner";

class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
    hasError: false
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true, loading: false });
  }

  onError = err => {
    this.setState({
      loading: false,
      hasError: true
    });
  };

  onUpdatePerson = person => {
    this.setState({ person, loading: false });
  };

  updatePerson() {
    const { personId } = this.props;

    if (!personId) {
      return;
    }

    this.setState({ loading: true, hasError: false }, () => {
      this.swapiService
        .getPerson(personId)
        .then(this.onUpdatePerson)
        .catch(this.onError);
    });
  }

  render() {
    const { person, loading, hasError } = this.state;

    const hasData = !(loading || hasError);

    const errorMessage = hasError ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const personView = hasData ? <PersonView person={person} /> : null;

    return (
      <div className="person-details card">
        {errorMessage}
        {spinner}
        {personView}
      </div>
    );
  }
}

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;

  return (
    <React.Fragment>
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt=""
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender:</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth year:</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye color:</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ItemDetails;
