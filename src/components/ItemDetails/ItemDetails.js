import React from "react";
import PropTypes from "prop-types";

import "./ItemDetails.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

Record.propTypes = {
  item: PropTypes.object,
  field: PropTypes.string,
  label: PropTypes.string,
};

const ItemDetails = ({ data: item, children }) => {
  return (
    <div className="item-details card">
      <img className="item-image" src={item.imageURL} alt="" />

      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export { Record };

export default ItemDetails;
