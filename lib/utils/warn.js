"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warn;
exports.resetWarned = resetWarned;
var _warning = _interopRequireDefault(require("warning"));
let warned = {};

/**
 * Copied from: https://github.com/ReactTraining/react-router/blob/master/modules/routerWarning.js
 */
function warn(falseToWarn, message) {
  // Only issue deprecation warnings once.
  if (!falseToWarn && message.indexOf('deprecated') !== -1) {
    if (warned[message]) {
      return;
    }
    warned[message] = true;
  }
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  process.env.NODE_ENV !== "production" ? (0, _warning.default)(falseToWarn, "[react-bootstrap-typeahead] " + message, ...args) : void 0;
}
function resetWarned() {
  warned = {};
}