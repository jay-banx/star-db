import React, { Component } from "react";

import "./ItemList.css";

class ItemList extends Component {
  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">Luke Skywalker</li>
        <li className="list-group-item">R2-D2</li>
        <li className="list-group-item">Dart Vader</li>
      </ul>
    );
  }
}

export default ItemList;
