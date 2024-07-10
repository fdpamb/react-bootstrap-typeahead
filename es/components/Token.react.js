import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["active", "children", "className", "onRemove"];
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import ClearButton from './ClearButton.react';
import tokenContainer from '../containers/tokenContainer';
import { isFunction } from '../utils';
var propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  /**
   * Handler for removing/deleting the token. If not defined, the token will
   * be rendered in a read-only state.
   */
  onRemove: PropTypes.func,
  /**
   * Explicitly force a read-only state on the token.
   */
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.number
};
var defaultProps = {
  active: false,
  disabled: false,
  tabIndex: 0
};
/**
 * Token
 *
 * Individual token component, generally displayed within the TokenizerInput
 * component, but can also be rendered on its own.
 */
var Token = /*#__PURE__*/function (_React$Component) {
  function Token() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty(_this, "_renderRemoveableToken", function () {
      var _this$props = _this.props,
        active = _this$props.active,
        children = _this$props.children,
        className = _this$props.className,
        onRemove = _this$props.onRemove,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded);
      return /*#__PURE__*/React.createElement("div", _extends({}, props, {
        className: cx('rbt-token', 'rbt-token-removeable', {
          'rbt-token-active': active
        }, className)
      }), children, /*#__PURE__*/React.createElement(ClearButton, {
        className: "rbt-token-remove-button",
        label: "Remove",
        onClick: onRemove,
        tabIndex: -1
      }));
    });
    _defineProperty(_this, "_renderToken", function () {
      var _this$props2 = _this.props,
        children = _this$props2.children,
        className = _this$props2.className,
        disabled = _this$props2.disabled,
        href = _this$props2.href;
      var classnames = cx('rbt-token', {
        'rbt-token-disabled': disabled
      }, className);
      if (href && !disabled) {
        return /*#__PURE__*/React.createElement("a", {
          className: classnames,
          href: href
        }, children);
      }
      return /*#__PURE__*/React.createElement("div", {
        className: classnames
      }, children);
    });
    return _this;
  }
  _inheritsLoose(Token, _React$Component);
  var _proto = Token.prototype;
  _proto.render = function render() {
    var _this$props3 = this.props,
      disabled = _this$props3.disabled,
      onRemove = _this$props3.onRemove,
      readOnly = _this$props3.readOnly;
    return !disabled && !readOnly && isFunction(onRemove) ? this._renderRemoveableToken() : this._renderToken();
  };
  return Token;
}(React.Component);
_defineProperty(Token, "propTypes", propTypes);
_defineProperty(Token, "defaultProps", defaultProps);
export default tokenContainer(Token);