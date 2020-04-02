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

  render() {
    const { onSelectedItem, renderItem } = this.props;
    const { itemList, loading, hasError } = this.state;

    const hasData = !(loading || hasError);

    const errorMessage = hasError ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const itemsView = hasData ? (
      <ItemsView
        itemList={itemList}
        onSelectedItem={onSelectedItem}
        renderItem={renderItem}
      />
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

const ItemsView = ({ itemList, onSelectedItem, renderItem }) => {
  const itemListItems = itemList.map(item => {
    const { id } = item;
    return (
      <li
        key={id}
        className="list-group-item"
        onClick={() => onSelectedItem(id)}
      >
        {renderItem(item)}
      </li>
    );
  });

  return <ul className="item-list list-group">{itemListItems}</ul>;
};

export default ItemList;
