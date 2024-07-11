"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _Input = _interopRequireDefault(require("./Input.react"));
var _hintContainer = _interopRequireDefault(require("../containers/hintContainer"));
var _withClassNames = _interopRequireDefault(require("../containers/withClassNames"));
const HintedInput = (0, _hintContainer.default)(_Input.default);
var _default = exports.default = (0, _withClassNames.default)(_ref => {
  let {
    inputRef,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(HintedInput, (0, _extends2.default)({}, props, {
    ref: inputRef
  }));
});