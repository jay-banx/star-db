import React, { Component } from "react";

import "./ItemList.css";

import SwapiService from "../../services/SwapiService";

import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    itemList: null,
    loading: true,
    hasError: false
  };

  onGetItemList = itemList => {
    this.setState({ itemList, loading: false });
    this.props.onSelectedItem(itemList[0].id);
  };

  getItemList = () => {
    const { getData } = this.props;
    this.setState({ loading: true, hasError: false }, () => {
      getData()
        .then(this.onGetItemList)
        .catch(this.onError);
    });
  };

  onError = err => {
    this.setState({
      hasError: true,
      loading: false
    });
  };

  componentDidMount() {
    this.getItemList();
  }

  componentDidCatch() {
    this.setState({ hasError: true, loading: false });
  }

  renderItems(arr) {
    return arr.map(item => {
      const { id } = item;
      const label = this.props.children(item);

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onSelectedItem(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList, loading, hasError } = this.state;

    const hasData = !(loading || hasError);

    const errorMessage = hasError ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const itemsView = hasData ? (
      <ul className="item-list list-group">{this.renderItems(itemList)}</ul>
    ) : null;

    return (
      <React.Fragment>
        {errorMessage}
        {spinner}
        {itemsView}
      </React.Fragment>
    );
  }
}

export default ItemList;
