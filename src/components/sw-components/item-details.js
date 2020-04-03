import React from "react";

import SwapiService from "../../services/SwapiService";

import ItemDetails, { Record } from "../ItemDetails";
import { withData } from "../hoc-helpers";

const { getPerson, getPlanet, getStarship } = new SwapiService();

const PersonDetailsData = withData(ItemDetails, getPerson);
const PersonDetails = props => {
  return (
    <PersonDetailsData {...props}>
      <Record field="gender" label="Gender:" />
      <Record field="birthYear" label="Birth year:" />
      <Record field="eyeColor" label="Eye color:" />
    </PersonDetailsData>
  );
};

const PlanetDetailsData = withData(ItemDetails, getPlanet);
const PlanetDetails = props => {
  return (
    <PlanetDetailsData {...props}>
      <Record field="population" label="Population:" />
      <Record field="rotationPeriod" label="Rotation Period:" />
      <Record field="diameter" label="Diameter:" />
    </PlanetDetailsData>
  );
};

const StarshipDetailsData = withData(ItemDetails, getStarship);
const StarshipDetails = props => {
  return (
    <StarshipDetailsData {...props}>
      <Record field="model" label="Model:" />
      <Record field="costInCredits" label="Cost In Credits:" />
      <Record field="length" label="Length:" />
    </StarshipDetailsData>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
