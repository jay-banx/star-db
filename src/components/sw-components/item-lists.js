import React from "react";

import { withData, withSwapiService } from "../hoc-helpers";

import ItemList from "../ItemList";

const withChildRenderName = (Wrapped, renderFunc) => {
  return props => {
    return <Wrapped {...props}>{renderFunc}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;

const mapPeopleMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};
const PeopleList = withSwapiService(
  withData(withChildRenderName(ItemList, renderName)),
  mapPeopleMethodsToProps
);

const mapPlanetsMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};
const PlanetsList = withSwapiService(
  withData(withChildRenderName(ItemList, renderName)),
  mapPlanetsMethodsToProps
);

const mapStarshipsMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};
const StarshipsList = withSwapiService(
  withData(withChildRenderName(ItemList, renderName)),
  mapStarshipsMethodsToProps
);

export { PeopleList, PlanetsList, StarshipsList };
