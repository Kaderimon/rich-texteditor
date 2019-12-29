import React, { Component } from "react";
import PropTypes from "prop-types";
import { CompactPicker } from "react-color";
import Button from "../Button/Button.jsx";
import "./styles.scss";

class ColorPicker extends Component {
  constructor() {
    super();
    this.state = {
      displayColorPicker: false,
      color: "#fff"
    };
  }
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChangeComplete = color => {
    const { cmd, onClick } = this.props;
    this.setState({ color: color.hex });
    onClick(cmd, color.hex);
  };

  render() {
    const { children, ...props } = this.props;
    const { displayColorPicker, color } = this.state;

    return (
      <div>
        <Button
          {...props}
          onClick={this.handleClick}
          isActive={displayColorPicker}
        >
          {children}
        </Button>
        {displayColorPicker && (
          <div className="color-picker">
            <div className="dropdown-close" onClick={this.handleClose} />
            <CompactPicker
              color={color}
              onChangeComplete={this.handleChangeComplete}
            />
          </div>
        )}
      </div>
    );
  }
}

ColorPicker.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  desc: PropTypes.string,
  cmd: PropTypes.string
};

export default ColorPicker;
