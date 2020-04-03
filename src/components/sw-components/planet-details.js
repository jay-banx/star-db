import React from "react";

import ItemDetails, { Record } from "../ItemDetails";
import { withData, withSwapiService } from "../hoc-helpers";

const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet
  };
};

const PlanetDetailsData = withSwapiService(
  withData(ItemDetails),
  mapPlanetMethodsToProps
);
const PlanetDetails = props => {
  return (
    <PlanetDetailsData {...props}>
      <Record field="population" label="Population:" />
      <Record field="rotationPeriod" label="Rotation Period:" />
      <Record field="diameter" label="Diameter:" />
    </PlanetDetailsData>
  );
};

export default PlanetDetails;
