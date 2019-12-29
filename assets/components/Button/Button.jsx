import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function Button({ onClick, isActive, desc, cmd, children }) {
  return (
    <button
      onMouseDown={() => event.preventDefault()}
      onClick={() => onClick(cmd)}
      className={`rte-toolbar__button ${
        isActive ? "rte-toolbar__button_active" : ""
      }`}
      title={desc}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  desc: PropTypes.string,
  cmd: PropTypes.string
};

export default Button;
