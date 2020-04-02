import React from "react";

import "./ItemList.css";

import { withData } from "../hoc-helpers";
import SwapiService from "../../services/SwapiService";

const ItemList = ({ data: items, onSelectedItem, children: renderLabel }) => {
  const itemList = items.map(item => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onSelectedItem(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{itemList}</ul>;
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
