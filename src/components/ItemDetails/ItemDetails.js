import React, { Component } from "react";

import "./ItemDetails.css";

import SwapiService from "../../services/SwapiService";

import ErrorIndicator from "../ErrorIndicator";
import Spinner from "../Spinner";

class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true,
    hasError: false
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true, loading: false });
  }

  onError = () => {
    this.setState({
      loading: false,
      hasError: true
    });
  };

  onUpdateItem = item => {
    this.setState({
      item,
      loading: false
    });
  };

  updateItem() {
    const { itemId, getData } = this.props;

    if (!itemId) {
      return;
    }

    this.setState({ loading: true, hasError: false }, () => {
      getData(itemId)
        .then(this.onUpdateItem)
        .catch(this.onError);
    });
  }

  render() {
    const { item, loading, hasError } = this.state;

    const hasData = !(loading || hasError);

    const errorMessage = hasError ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const itemView = hasData ? (
      <React.Fragment>
        <img className="item-image" src={item.imageURL} alt="" />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </React.Fragment>
    ) : null;

    return (
      <div className="item-details card">
        {errorMessage}
        {spinner}
        {itemView}
      </div>
    );
  }
}

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default ItemDetails;
