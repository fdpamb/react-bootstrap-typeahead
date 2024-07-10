import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import PropTypes from 'prop-types';
import React from 'react';
import { getMatchBounds } from '../utils';
var propTypes = {
  children: PropTypes.string.isRequired,
  highlightClassName: PropTypes.string,
  search: PropTypes.string.isRequired
};
var defaultProps = {
  highlightClassName: 'rbt-highlight-text'
};
/**
 * Stripped-down version of https://github.com/helior/react-highlighter
 *
 * Results are already filtered by the time the component is used internally so
 * we can safely ignore case and diacritical marks for the purposes of matching.
 */
var Highlighter = /*#__PURE__*/function (_React$PureComponent) {
  function Highlighter() {
    return _React$PureComponent.apply(this, arguments) || this;
  }
  _inheritsLoose(Highlighter, _React$PureComponent);
  var _proto = Highlighter.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      children = _this$props.children,
      highlightClassName = _this$props.highlightClassName,
      search = _this$props.search;
    if (!search || !children) {
      return children;
    }
    var matchCount = 0;
    var remaining = children;
    var highlighterChildren = [];
    while (remaining) {
      var bounds = getMatchBounds(remaining, search);

      // No match anywhere in the remaining string, stop.
      if (!bounds) {
        highlighterChildren.push(remaining);
        break;
      }

      // Capture the string that leads up to a match.
      var nonMatch = remaining.slice(0, bounds.start);
      if (nonMatch) {
        highlighterChildren.push(nonMatch);
      }

      // Capture the matching string.
      var match = remaining.slice(bounds.start, bounds.end);
      highlighterChildren.push( /*#__PURE__*/React.createElement("mark", {
        className: highlightClassName,
        key: matchCount
      }, match));
      matchCount += 1;

      // And if there's anything left over, continue the loop.
      remaining = remaining.slice(bounds.end);
    }
    return highlighterChildren;
  };
  return Highlighter;
}(React.PureComponent);
_defineProperty(Highlighter, "propTypes", propTypes);
_defineProperty(Highlighter, "defaultProps", defaultProps);
export default Highlighter;