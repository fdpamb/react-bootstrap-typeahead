import _defineProperty from "@babel/runtime/helpers/defineProperty";
import PropTypes from 'prop-types';
import React from 'react';
import { getMatchBounds } from '../utils';
const propTypes = {
  children: PropTypes.string.isRequired,
  highlightClassName: PropTypes.string,
  search: PropTypes.string.isRequired
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
class Highlighter extends React.PureComponent {
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
      const bounds = getMatchBounds(remaining, search);

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
      highlighterChildren.push( /*#__PURE__*/React.createElement("mark", {
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
_defineProperty(Highlighter, "propTypes", propTypes);
_defineProperty(Highlighter, "defaultProps", defaultProps);
export default Highlighter;