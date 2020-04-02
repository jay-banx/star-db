import React from "react";

import SwapiService from "../../services/SwapiService";

import ItemDetails, { Record } from "../ItemDetails";

const { getPerson, getPlanet, getStarship } = new SwapiService();

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getPerson}>
      <Record field="gender" label="Gender:" />
      <Record field="birthYear" label="Birth year:" />
      <Record field="eyeColor" label="Eye color:" />
    </ItemDetails>
  );
};

const PlanetDetails = ({ itemId, onSelectedItem }) => {
  return (
    <ItemDetails itemId={itemId} getData={getPlanet}>
      <Record field="population" label="Population:" />
      <Record field="rotationPeriod" label="Rotation Period:" />
      <Record field="diameter" label="Diameter:" />
    </ItemDetails>
  );
};

const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getStarship}>
      <Record field="model" label="Model:" />
      <Record field="costInCredits" label="Cost In Credits:" />
      <Record field="length" label="Length:" />
    </ItemDetails>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
