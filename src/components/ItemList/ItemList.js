import React from "react";
import PropTypes from "prop-types";

import "./ItemList.css";

const ItemList = ({ data: items, onSelectedItem, children: renderLabel }) => {
  const itemList = items.map((item) => {
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

ItemList.defaultProps = {
  onSelectedItem: () => {},
};

ItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectedItem: PropTypes.func,
  children: PropTypes.func.isRequired,
};

export default ItemList;
