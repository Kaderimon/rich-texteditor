import React, { Component } from "react";
import { observer, PropTypes as MobxPropTypes } from "mobx-react";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
import { USER_SUB_COMMANDS } from "../../constants/commands.js";
import "./styles.scss";

@observer
class SynonymButton extends Component {
  handleClick = () => {
    const { cmd, onClick } = this.props;
    onClick(cmd);
  };

  handleClose = () => {
    this.props.synonymStore.closeSynonymList();
  };

  handleSynonym = syn => () => {
    const { onClick } = this.props;
    this.props.synonymStore.closeSynonymList();
    onClick(USER_SUB_COMMANDS.synonym_pick, syn);
  };

  render() {
    const { children, synonymStore, ...props } = this.props;
    const { isSynonymListShown, synonyms } = synonymStore;
    const isValidSynonyms = isSynonymListShown && synonyms.length > 0;
    return (
      <div>
        <Button
          {...props}
          onClick={this.handleClick}
          isActive={isValidSynonyms}
        >
          {children}
        </Button>

        {isValidSynonyms && (
          <div className="synonym-picker">
            <div className="dropdown-close" onClick={this.handleClose} />
            <div className="synonym-picker-list">
              {synonyms.map(syn => {
                return (
                  <div
                    key={syn}
                    onClick={this.handleSynonym(syn)}
                    className="synonym-picker-item"
                  >
                    {syn}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

SynonymButton.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  desc: PropTypes.string,
  cmd: PropTypes.string,
  synonymStore: MobxPropTypes.observableObject
};

export default SynonymButton;
