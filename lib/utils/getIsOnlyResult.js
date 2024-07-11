"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getOptionProperty = _interopRequireDefault(require("./getOptionProperty"));
var _nodash = require("./nodash");
function getIsOnlyResult(props) {
  const {
    allowNew,
    highlightOnlyResult,
    results
  } = props;
  if (!highlightOnlyResult || allowNew) {
    return false;
  }
  return results.length === 1 && !(0, _getOptionProperty.default)((0, _nodash.head)(results), 'disabled');
}
var _default = exports.default = getIsOnlyResult;