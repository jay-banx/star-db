import React from "react";

import {
  withData,
  withSwapiService,
  withChildFunc,
  compose,
} from "../hoc-helpers";

import ItemList from "../ItemList";

const renderName = ({ name }) => <span>{name}</span>;

const mapPeopleMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};
const PeopleList = compose(
  withSwapiService(mapPeopleMethodsToProps),
  withData,
  withChildFunc(renderName)
)(ItemList);

const mapPlanetsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};
const PlanetsList = compose(
  withSwapiService(mapPlanetsMethodsToProps),
  withData,
  withChildFunc(renderName)
)(ItemList);

const mapStarshipsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};
const StarshipsList = compose(
  withSwapiService(mapStarshipsMethodsToProps),
  withData,
  withChildFunc(renderName)
)(ItemList);

export { PeopleList, PlanetsList, StarshipsList };
