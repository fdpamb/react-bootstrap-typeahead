"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ClearButton = _interopRequireDefault(require("./ClearButton.react"));
var _tokenContainer = _interopRequireDefault(require("../containers/tokenContainer"));
var _utils = require("../utils");
const propTypes = {
  active: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  /**
   * Handler for removing/deleting the token. If not defined, the token will
   * be rendered in a read-only state.
   */
  onRemove: _propTypes.default.func,
  /**
   * Explicitly force a read-only state on the token.
   */
  readOnly: _propTypes.default.bool,
  tabIndex: _propTypes.default.number
};
const defaultProps = {
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
class Token extends _react.default.Component {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "_renderRemoveableToken", () => {
      const {
        active,
        children,
        className,
        onRemove,
        ...props
      } = this.props;
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
        className: (0, _classnames.default)('rbt-token', 'rbt-token-removeable', {
          'rbt-token-active': active
        }, className)
      }), children, /*#__PURE__*/_react.default.createElement(_ClearButton.default, {
        className: "rbt-token-remove-button",
        label: "Remove",
        onClick: onRemove,
        tabIndex: -1
      }));
    });
    (0, _defineProperty2.default)(this, "_renderToken", () => {
      const {
        children,
        className,
        disabled,
        href
      } = this.props;
      const classnames = (0, _classnames.default)('rbt-token', {
        'rbt-token-disabled': disabled
      }, className);
      if (href && !disabled) {
        return /*#__PURE__*/_react.default.createElement("a", {
          className: classnames,
          href: href
        }, children);
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: classnames
      }, children);
    });
  }
  render() {
    const {
      disabled,
      onRemove,
      readOnly
    } = this.props;
    return !disabled && !readOnly && (0, _utils.isFunction)(onRemove) ? this._renderRemoveableToken() : this._renderToken();
  }
}
(0, _defineProperty2.default)(Token, "propTypes", propTypes);
(0, _defineProperty2.default)(Token, "defaultProps", defaultProps);
var _default = exports.default = (0, _tokenContainer.default)(Token);