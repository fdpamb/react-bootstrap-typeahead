import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import PropTypes from 'prop-types';
import React from 'react';
import RootCloseWrapper from "react-overlays/RootCloseWrapper";
import { getDisplayName, isFunction, noop } from '../utils';
import { BACKSPACE } from '../constants';
import { optionType } from '../propTypes';
const propTypes = {
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onRemove: PropTypes.func,
  option: optionType.isRequired
};
const defaultProps = {
  onBlur: noop,
  onClick: noop,
  onFocus: noop
};

/**
 * Higher-order component to encapsulate Token behaviors.
 */
const tokenContainer = Component => {
  class WrappedComponent extends React.Component {
    constructor() {
      super(...arguments);
      _defineProperty(this, "state", {
        active: false
      });
      _defineProperty(this, "_handleActiveChange", (e, active, callback) => {
        // e.persist() isn't always present.
        e.persist && e.persist();
        e.stopPropagation();
        this.setState({
          active
        }, () => callback(e));
      });
      _defineProperty(this, "_handleBlur", e => {
        this._handleActiveChange(e, false, this.props.onBlur);
      });
      _defineProperty(this, "_handleClick", e => {
        this._handleActiveChange(e, true, this.props.onClick);
      });
      _defineProperty(this, "_handleFocus", e => {
        this._handleActiveChange(e, true, this.props.onFocus);
      });
      _defineProperty(this, "_handleKeyDown", e => {
        switch (e.keyCode) {
          case BACKSPACE:
            if (this.state.active) {
              // Prevent backspace keypress from triggering the browser "back"
              // action.
              e.preventDefault();
              this._handleRemove();
            }
            break;
          default:
            break;
        }
      });
      _defineProperty(this, "_handleRemove", () => {
        const {
          onRemove,
          option
        } = this.props;

        // Flow having trouble with `isFunction` here for some reason...
        if (typeof onRemove === 'function') {
          onRemove(option);
        }
      });
    }
    render() {
      const {
        onRemove
      } = this.props;
      const {
        active
      } = this.state;
      return /*#__PURE__*/React.createElement(RootCloseWrapper, {
        disabled: !active,
        onRootClose: this._handleBlur
      }, /*#__PURE__*/React.createElement(Component, _extends({}, this.props, {
        active: active,
        onBlur: this._handleBlur,
        onClick: this._handleClick,
        onFocus: this._handleFocus,
        onKeyDown: this._handleKeyDown,
        onRemove: isFunction(onRemove) ? this._handleRemove : undefined
      })));
    }
  }
  _defineProperty(WrappedComponent, "displayName", "tokenContainer(" + getDisplayName(Component) + ")");
  _defineProperty(WrappedComponent, "propTypes", propTypes);
  _defineProperty(WrappedComponent, "defaultProps", defaultProps);
  return WrappedComponent;
};
export default tokenContainer;