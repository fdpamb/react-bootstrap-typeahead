"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _MenuItem = require("./MenuItem.react");
var _propTypes2 = require("../propTypes");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const MenuDivider = props => /*#__PURE__*/_react.default.createElement("li", {
  className: "divider dropdown-divider",
  role: "separator"
});
const MenuHeader = props => /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, props, {
  className: "dropdown-header"
}));
const propTypes = {
  'aria-label': _propTypes.default.string,
  /**
   * Message to display in the menu if there are no valid results.
   */
  emptyLabel: _propTypes.default.node,
  /**
   * Needed for accessibility.
   */
  id: (0, _propTypes2.checkPropType)(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]), _propTypes2.isRequiredForA11y),
  /**
   * Maximum height of the dropdown menu.
   */
  maxHeight: _propTypes.default.string
};
const defaultProps = {
  'aria-label': 'menu-options',
  emptyLabel: 'No matches found.',
  maxHeight: '300px'
};
/**
 * Menu component that handles empty state when passed a set of results.
 */
class Menu extends _react.default.Component {
  componentDidUpdate(prevProps) {
    const {
      inputHeight,
      scheduleUpdate
    } = this.props;

    // Update the menu position if the height of the input changes.
    if (inputHeight !== prevProps.inputHeight) {
      scheduleUpdate();
    }
  }
  render() {
    const {
      children,
      className,
      emptyLabel,
      id,
      innerRef,
      maxHeight,
      style,
      text
    } = this.props;
    const contents = _react.Children.count(children) === 0 ? /*#__PURE__*/_react.default.createElement(_MenuItem.BaseMenuItem, {
      disabled: true,
      role: "option"
    }, emptyLabel) : children;
    return /*#__PURE__*/_react.default.createElement("ul", {
      "aria-label": this.props['aria-label'],
      className: (0, _classnames.default)('rbt-menu', 'dropdown-menu', 'show', className),
      id: id,
      key:
      // Force a re-render if the text changes to ensure that menu
      // positioning updates correctly.
      text,
      ref: innerRef,
      role: "listbox",
      style: {
        ...style,
        display: 'block',
        maxHeight,
        overflow: 'auto'
      }
    }, contents);
  }
}
(0, _defineProperty2.default)(Menu, "propTypes", propTypes);
(0, _defineProperty2.default)(Menu, "defaultProps", defaultProps);
(0, _defineProperty2.default)(Menu, "Divider", MenuDivider);
(0, _defineProperty2.default)(Menu, "Header", MenuHeader);
var _default = exports.default = Menu;