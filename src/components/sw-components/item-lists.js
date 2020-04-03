import React from "react";

import { withData } from "../hoc-helpers";
import SwapiService from "../../services/SwapiService";

import ItemList from "../ItemList";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const withChildRenderName = (Wrapped, renderFunc) => {
  return props => {
    return <Wrapped {...props}>{renderFunc}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;

const PeopleList = withData(
  withChildRenderName(ItemList, renderName),
  getAllPeople
);
const PlanetsList = withData(
  withChildRenderName(ItemList, renderName),
  getAllPlanets
);
const StarshipsList = withData(
  withChildRenderName(ItemList, renderName),
  getAllStarships
);

export { PeopleList, PlanetsList, StarshipsList };
