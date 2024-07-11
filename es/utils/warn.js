import warning from 'warning';
let warned = {};

/**
 * Copied from: https://github.com/ReactTraining/react-router/blob/master/modules/routerWarning.js
 */
export default function warn(falseToWarn, message) {
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
  process.env.NODE_ENV !== "production" ? warning(falseToWarn, "[react-bootstrap-typeahead] " + message, ...args) : void 0;
}
export function resetWarned() {
  warned = {};
}