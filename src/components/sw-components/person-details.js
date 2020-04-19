import React from "react";

import ItemDetails, { Record } from "../ItemDetails";
import { withData, withSwapiService, compose } from "../hoc-helpers";

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
  };
};

const PersonDetailsData = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData
)(ItemDetails);

const PersonDetails = (props) => {
  if (props.itemId === undefined) {
    return <div>Choose a person</div>;
  }
  return (
    <PersonDetailsData {...props}>
      <Record field="gender" label="Gender:" />
      <Record field="birthYear" label="Birth year:" />
      <Record field="eyeColor" label="Eye color:" />
    </PersonDetailsData>
  );
};

export default PersonDetails;
