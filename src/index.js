import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import Greeting from "./Greeting";
import NumSign from "./NumSign";
import Button from "@material/react-button";
import "./index.css";
import "@material/react-button/dist/button.css";

function SuperLemon(props) {
  const [number, setNumber] = useState(0);
  const [squaredNum, setSquaredNum] = useState(0);
  useEffect(() => {
    setSquaredNum(number * number);
  }, [number]);
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
