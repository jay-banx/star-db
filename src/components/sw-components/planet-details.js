import React from "react";

import ItemDetails, { Record } from "../ItemDetails";
import { withData, withSwapiService, compose } from "../hoc-helpers";

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
  };
};

const PlanetDetailsData = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData
)(ItemDetails);

const PlanetDetails = (props) => {
  if (props.itemId === undefined) {
    return <div>Choose a planet</div>;
  }
  return (
    <PlanetDetailsData {...props}>
      <Record field="population" label="Population:" />
      <Record field="rotationPeriod" label="Rotation Period:" />
      <Record field="diameter" label="Diameter:" />
    </PlanetDetailsData>
  );
};

export default PlanetDetails;
