import React from "react";

import ItemDetails, { Record } from "../ItemDetails";
import { withData, withSwapiService, compose } from "../hoc-helpers";

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
  };
};

const StarshipDetailsData = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData
)(ItemDetails);

const StarshipDetails = (props) => {
  if (props.itemId === undefined) {
    return <div>Choose a starship</div>;
  }
  return (
    <StarshipDetailsData {...props}>
      <Record field="model" label="Model:" />
      <Record field="costInCredits" label="Cost In Credits:" />
      <Record field="length" label="Length:" />
    </StarshipDetailsData>
  );
};

export default StarshipDetails;
