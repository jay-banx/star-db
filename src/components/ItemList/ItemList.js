import React from "react";

import "./ItemList.css";

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

export default ItemList;
