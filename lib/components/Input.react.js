"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
const Input = /*#__PURE__*/_react.default.forwardRef((props, ref) => /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, props, {
  className: (0, _classnames.default)('rbt-input-main', props.className),
  ref: ref
})));
var _default = exports.default = Input;