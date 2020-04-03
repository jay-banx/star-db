import React from "react";

import ItemDetails, { Record } from "../ItemDetails";
import { withData, withSwapiService } from "../hoc-helpers";

const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getStarship
  };
};

const StarshipDetailsData = withSwapiService(
  withData(ItemDetails),
  mapStarshipMethodsToProps
);
const StarshipDetails = props => {
  return (
    <StarshipDetailsData {...props}>
      <Record field="model" label="Model:" />
      <Record field="costInCredits" label="Cost In Credits:" />
      <Record field="length" label="Length:" />
    </StarshipDetailsData>
  );
};

export default StarshipDetails;
