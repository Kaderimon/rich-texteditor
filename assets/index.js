import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import Toolbar from "./containers/Toolbar/Toolbar.jsx";
import Editor from "./containers/Editor/Editor.jsx";
import synonymStore from "./stores/SynonymStore";
import "./app.scss";

function App() {
  return (
    <Provider synonymStore={synonymStore}>
      <div className="rte-wrapper">
        <Toolbar />
        <Editor />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
