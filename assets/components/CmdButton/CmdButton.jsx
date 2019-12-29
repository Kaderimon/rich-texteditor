import React from "react";
import PropTypes from "prop-types";
import Button from "./../Button/Button.jsx";
import ColorPicker from "./../ColorPicker/ColorPicker.jsx";
import { ButtonTypes } from "../../constants/common";
import SynonymButton from "../SynonymButton/SynonymButton.jsx";

const TypeMapper = {
  [ButtonTypes.ColorPicker]: ColorPicker,
  [ButtonTypes.Button]: Button,
  [ButtonTypes.SynonymButton]: SynonymButton
};

function CmdButton({ children, type = ButtonTypes.Button, ...props }) {
  const Component = TypeMapper[type];
  return <Component {...props}>{children}</Component>;
}

CmdButton.propTypes = {
  type: PropTypes.string
};

export default CmdButton;
