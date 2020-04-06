import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = ({ onToggleSwapiService }) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">StarDB</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people/">People</Link>
        </li>
        <li>
          <Link to="/planets/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
      </ul>
      <button className="btn btn-primary btn-sm" onClick={onToggleSwapiService}>
        Change SwapiService
      </button>
    </div>
  );
};

Header.defaultProps = {
  onToggleSwapiService: () => {},
};

Header.propTypes = {
  onToggleSwapiService: PropTypes.func,
};

export default Header;
