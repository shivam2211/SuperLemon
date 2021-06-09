import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Greeting from "./Greeting";
import "./index.css";
import "@material/react-button/dist/button.css";

function SuperLemon(props) {
  return (
    <div className="nonsense">
      <Greeting name={props.name} />
    </div>
  );
}

SuperLemon.propTypes = {
  name: PropTypes.string
};

export default SuperLemon;
