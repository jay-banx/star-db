import React from "react";

import ItemDetails, { Record } from "../ItemDetails";
import { withData, withSwapiService } from "../hoc-helpers";

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson
  };
};

const PersonDetailsData = withSwapiService(
  withData(ItemDetails),
  mapPersonMethodsToProps
);
const PersonDetails = props => {
  return (
    <PersonDetailsData {...props}>
      <Record field="gender" label="Gender:" />
      <Record field="birthYear" label="Birth year:" />
      <Record field="eyeColor" label="Eye color:" />
    </PersonDetailsData>
  );
};

export default PersonDetails;
