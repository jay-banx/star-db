import React from "react";

import { withData } from "../hoc-helpers";
import SwapiService from "../../services/SwapiService";

import ItemList from "../ItemList";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const WithChildRenderName = (Wrapped, renderFunc) => {
  return props => {
    return <Wrapped {...props}>{renderFunc}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;

const PeopleList = withData(
  WithChildRenderName(ItemList, renderName),
  getAllPeople
);
const PlanetsList = withData(
  WithChildRenderName(ItemList, renderName),
  getAllPlanets
);
const StarshipsList = withData(
  WithChildRenderName(ItemList, renderName),
  getAllStarships
);

export { PeopleList, PlanetsList, StarshipsList };
