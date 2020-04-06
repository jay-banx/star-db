import React from "react";
import { withRouter } from "react-router-dom";

import Row from "../Row";
import ErrorBoundry from "../ErrorBoundry";

import { PlanetsList, PlanetDetails } from "../sw-components";

const PlanetsPage = ({ history, match }) => {
  const { id } = match.params;

  const itemList = (
    <ErrorBoundry>
      <PlanetsList
        onSelectedItem={(id) => {
          history.push(`${id}`);
        }}
      />
    </ErrorBoundry>
  );

  const itemDetails = (
    <ErrorBoundry>
      <PlanetDetails itemId={id} />
    </ErrorBoundry>
  );

  return (
    <ErrorBoundry>
      <Row left={itemList} right={itemDetails} />
    </ErrorBoundry>
  );
};

export default withRouter(PlanetsPage);
