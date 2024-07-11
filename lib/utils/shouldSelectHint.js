"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shouldSelectHint;
var _isSelectable = _interopRequireDefault(require("./isSelectable"));
var _constants = require("../constants");
function shouldSelectHint(_ref, _ref2) {
  let {
    currentTarget,
    keyCode
  } = _ref;
  let {
    hintText,
    selectHintOnEnter,
    value
  } = _ref2;
  if (!hintText) {
    return false;
  }
  if (keyCode === _constants.RIGHT) {
    // For selectable input types ("text", "search"), only select the hint if
    // it's at the end of the input value. For non-selectable types ("email",
    // "number"), always select the hint.
    return (0, _isSelectable.default)(currentTarget) ? currentTarget.selectionStart === value.length : true;
  }
  if (keyCode === _constants.TAB) {
    return true;
  }
  if (keyCode === _constants.RETURN && selectHintOnEnter) {
    return true;
  }
  return false;
}