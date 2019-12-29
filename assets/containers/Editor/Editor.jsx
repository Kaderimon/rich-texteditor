import React, { Component } from "react";
import PropTypes from "prop-types";
import EditorService from "./../../services/EditorService";
import { DesignMode } from "../../constants/common";

class Editor extends Component {
  constructor() {
    super();
    this.editorService = EditorService.getInstance();
    this.editor = React.createRef();
  }

  componentDidMount() {
    const { current } = this.editor;
    this.editorService.setEditor(current);
    current.contentDocument.designMode = DesignMode.On;
    current.contentDocument.addEventListener("mouseup", this.onMouse);
  }

  componentWillUnmount() {
    this.editor.current.contentDocument.removeEventListener(
      "mouseup",
      this.onMouse
    );
  }

  onMouse = () => {
    this.editorService.getActiveCommands();
  };

  render() {
    return (
      <div className="rte-editor">
        <iframe className="rte-frame" frameBorder="0" ref={this.editor} />
      </div>
    );
  }
}

Editor.propTypes = {};

export default Editor;
