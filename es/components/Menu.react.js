import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Children } from 'react';
import { BaseMenuItem } from './MenuItem.react';
import { checkPropType, isRequiredForA11y } from '../propTypes';
var MenuDivider = function MenuDivider(props) {
  return /*#__PURE__*/React.createElement("li", {
    className: "divider dropdown-divider",
    role: "separator"
  });
};
var MenuHeader = function MenuHeader(props) {
  return /*#__PURE__*/React.createElement("li", _extends({}, props, {
    className: "dropdown-header"
  }));
};
var propTypes = {
  'aria-label': PropTypes.string,
  /**
   * Message to display in the menu if there are no valid results.
   */
  emptyLabel: PropTypes.node,
  /**
   * Needed for accessibility.
   */
  id: checkPropType(PropTypes.oneOfType([PropTypes.number, PropTypes.string]), isRequiredForA11y),
  /**
   * Maximum height of the dropdown menu.
   */
  maxHeight: PropTypes.string
};
var defaultProps = {
  'aria-label': 'menu-options',
  emptyLabel: 'No matches found.',
  maxHeight: '300px'
};
/**
 * Menu component that handles empty state when passed a set of results.
 */
var Menu = /*#__PURE__*/function (_React$Component) {
  function Menu() {
    return _React$Component.apply(this, arguments) || this;
  }
  _inheritsLoose(Menu, _React$Component);
  var _proto = Menu.prototype;
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props = this.props,
      inputHeight = _this$props.inputHeight,
      scheduleUpdate = _this$props.scheduleUpdate;

    // Update the menu position if the height of the input changes.
    if (inputHeight !== prevProps.inputHeight) {
      scheduleUpdate();
    }
  };
  _proto.render = function render() {
    var _this$props2 = this.props,
      children = _this$props2.children,
      className = _this$props2.className,
      emptyLabel = _this$props2.emptyLabel,
      id = _this$props2.id,
      innerRef = _this$props2.innerRef,
      maxHeight = _this$props2.maxHeight,
      style = _this$props2.style,
      text = _this$props2.text;
    var contents = Children.count(children) === 0 ? /*#__PURE__*/React.createElement(BaseMenuItem, {
      disabled: true,
      role: "option"
    }, emptyLabel) : children;
    return /*#__PURE__*/React.createElement("ul", {
      "aria-label": this.props['aria-label'],
      className: cx('rbt-menu', 'dropdown-menu', 'show', className),
      id: id,
      key:
      // Force a re-render if the text changes to ensure that menu
      // positioning updates correctly.
      text,
      ref: innerRef,
      role: "listbox",
      style: _extends({}, style, {
        display: 'block',
        maxHeight: maxHeight,
        overflow: 'auto'
      })
    }, contents);
  };
  return Menu;
}(React.Component);
_defineProperty(Menu, "propTypes", propTypes);
_defineProperty(Menu, "defaultProps", defaultProps);
_defineProperty(Menu, "Divider", MenuDivider);
_defineProperty(Menu, "Header", MenuHeader);
export default Menu;