import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import PropTypes from 'prop-types';
import React from 'react';
import RootCloseWrapper from "react-overlays/RootCloseWrapper";
import { getDisplayName, isFunction, noop } from '../utils';
import { BACKSPACE } from '../constants';
import { optionType } from '../propTypes';
var propTypes = {
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onRemove: PropTypes.func,
  option: optionType.isRequired
};
var defaultProps = {
  onBlur: noop,
  onClick: noop,
  onFocus: noop
};

/**
 * Higher-order component to encapsulate Token behaviors.
 */
var tokenContainer = function tokenContainer(Component) {
  var WrappedComponent = /*#__PURE__*/function (_React$Component) {
    function WrappedComponent() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _defineProperty(_this, "state", {
        active: false
      });
      _defineProperty(_this, "_handleActiveChange", function (e, active, callback) {
        // e.persist() isn't always present.
        e.persist && e.persist();
        e.stopPropagation();
        _this.setState({
          active: active
        }, function () {
          return callback(e);
        });
      });
      _defineProperty(_this, "_handleBlur", function (e) {
        _this._handleActiveChange(e, false, _this.props.onBlur);
      });
      _defineProperty(_this, "_handleClick", function (e) {
        _this._handleActiveChange(e, true, _this.props.onClick);
      });
      _defineProperty(_this, "_handleFocus", function (e) {
        _this._handleActiveChange(e, true, _this.props.onFocus);
      });
      _defineProperty(_this, "_handleKeyDown", function (e) {
        switch (e.keyCode) {
          case BACKSPACE:
            if (_this.state.active) {
              // Prevent backspace keypress from triggering the browser "back"
              // action.
              e.preventDefault();
              _this._handleRemove();
            }
            break;
          default:
            break;
        }
      });
      _defineProperty(_this, "_handleRemove", function () {
        var _this$props = _this.props,
          onRemove = _this$props.onRemove,
          option = _this$props.option;

        // Flow having trouble with `isFunction` here for some reason...
        if (typeof onRemove === 'function') {
          onRemove(option);
        }
      });
      return _this;
    }
    _inheritsLoose(WrappedComponent, _React$Component);
    var _proto = WrappedComponent.prototype;
    _proto.render = function render() {
      var onRemove = this.props.onRemove;
      var active = this.state.active;
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
    };
    return WrappedComponent;
  }(React.Component);
  _defineProperty(WrappedComponent, "displayName", "tokenContainer(" + getDisplayName(Component) + ")");
  _defineProperty(WrappedComponent, "propTypes", propTypes);
  _defineProperty(WrappedComponent, "defaultProps", defaultProps);
  return WrappedComponent;
};
export default tokenContainer;