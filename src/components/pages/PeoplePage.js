import React from "react";
import { withRouter } from "react-router-dom";

import { PeopleList } from "../sw-components";
import ErrorBoundry from "../ErrorBoundry";

const PeoplePage = ({ history }) => {
  return (
    <ErrorBoundry>
      <PeopleList
        onSelectedItem={(id) => {
          history.push(`${id}`);
        }}
      />
    </ErrorBoundry>
  );
};

export default withRouter(PeoplePage);
