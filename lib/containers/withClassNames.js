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
var _utils = require("../utils");
function withClassNames(Component) {
  // Use a class instead of function component to support refs.
  /* eslint-disable-next-line react/prefer-stateless-function */
  class WrappedComponent extends _react.default.Component {
    render() {
      const {
        className,
        isInvalid,
        isValid,
        size,
        ...props
      } = this.props;
      return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
        className: (0, _classnames.default)('form-control', 'rbt-input', {
          'input-lg form-control-lg': (0, _utils.isSizeLarge)(size),
          'input-sm form-control-sm': (0, _utils.isSizeSmall)(size),
          'is-invalid': isInvalid,
          'is-valid': isValid
        }, className)
      }));
    }
  }
  (0, _defineProperty2.default)(WrappedComponent, "displayName", "withClassNames(" + (0, _utils.getDisplayName)(Component) + ")");
  return WrappedComponent;
}
var _default = exports.default = withClassNames;