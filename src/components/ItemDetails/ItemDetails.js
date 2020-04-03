import React from "react";

import "./ItemDetails.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

const ItemDetails = ({ data: item, children }) => {
  return (
    <div className="item-details card">
      <img className="item-image" src={item.imageURL} alt="" />

      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, child => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    </div>
  );
};

export { Record };

export default ItemDetails;
