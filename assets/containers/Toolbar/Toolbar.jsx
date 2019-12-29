import React, { Component } from "react";
import { PropTypes, inject } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COMMANDS, USER_COMMANDS } from "./../../constants/commands";
import CmdButton from "../../components/CmdButton/CmdButton.jsx";
import EditorService from "./../../services/EditorService";
import "./styles.scss";

@inject("synonymStore")
class Toolbar extends Component {
  constructor() {
    super();
    this.editorService = EditorService.getInstance();
    this.editorService.setActiveCallback(this.onActiveUpdate);
    this.state = {
      activeCommands: []
    };
  }

  onActiveUpdate = (active = []) => {
    this.setState({
      activeCommands: active
    });
  };

  onCommandClick = (cmd, metadata) => {
    this.editorService.executeCommand(cmd, metadata);
  };

  onUserCommandClick = (cmd, metadata) => {
    this.editorService.executeUserCommand(cmd, metadata);
  };

  getButtons(cmds, handler) {
    const { activeCommands } = this.state;
    const { synonymStore } = this.props;

    return cmds.map(cmd => {
      const { icon, ...rest } = cmd;
      return (
        <CmdButton
          {...rest}
          key={cmd.cmd}
          isActive={activeCommands.includes(cmd.cmd)}
          onClick={handler}
          synonymStore={synonymStore}
        >
          <FontAwesomeIcon icon={icon} />
        </CmdButton>
      );
    });
  }

  render() {
    return (
      <div className="rte-toolbar">
        <div className="rte-toolbar-default">
          {this.getButtons(COMMANDS, this.onCommandClick)}
        </div>
        <div className="rte-toolbar-user">
          {this.getButtons(USER_COMMANDS, this.onUserCommandClick)}
        </div>
      </div>
    );
  }
}

Toolbar.propTypes = {
  synonymStore: PropTypes.observableObject
};

export default Toolbar;
