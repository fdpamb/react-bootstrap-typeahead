"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _utils = require("../utils");
const propTypes = {
  children: _propTypes.default.string.isRequired,
  highlightClassName: _propTypes.default.string,
  search: _propTypes.default.string.isRequired
};
const defaultProps = {
  highlightClassName: 'rbt-highlight-text'
};
/**
 * Stripped-down version of https://github.com/helior/react-highlighter
 *
 * Results are already filtered by the time the component is used internally so
 * we can safely ignore case and diacritical marks for the purposes of matching.
 */
class Highlighter extends _react.default.PureComponent {
  render() {
    const {
      children,
      highlightClassName,
      search
    } = this.props;
    if (!search || !children) {
      return children;
    }
    let matchCount = 0;
    let remaining = children;
    const highlighterChildren = [];
    while (remaining) {
      const bounds = (0, _utils.getMatchBounds)(remaining, search);

      // No match anywhere in the remaining string, stop.
      if (!bounds) {
        highlighterChildren.push(remaining);
        break;
      }

      // Capture the string that leads up to a match.
      const nonMatch = remaining.slice(0, bounds.start);
      if (nonMatch) {
        highlighterChildren.push(nonMatch);
      }

      // Capture the matching string.
      const match = remaining.slice(bounds.start, bounds.end);
      highlighterChildren.push( /*#__PURE__*/_react.default.createElement("mark", {
        className: highlightClassName,
        key: matchCount
      }, match));
      matchCount += 1;

      // And if there's anything left over, continue the loop.
      remaining = remaining.slice(bounds.end);
    }
    return highlighterChildren;
  }
}
(0, _defineProperty2.default)(Highlighter, "propTypes", propTypes);
(0, _defineProperty2.default)(Highlighter, "defaultProps", defaultProps);
var _default = exports.default = Highlighter;