import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Children } from 'react';
import { BaseMenuItem } from './MenuItem.react';
import { checkPropType, isRequiredForA11y } from '../propTypes';
const MenuDivider = props => /*#__PURE__*/React.createElement("li", {
  className: "divider dropdown-divider",
  role: "separator"
});
const MenuHeader = props => /*#__PURE__*/React.createElement("li", _extends({}, props, {
  className: "dropdown-header"
}));
const propTypes = {
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
const defaultProps = {
  'aria-label': 'menu-options',
  emptyLabel: 'No matches found.',
  maxHeight: '300px'
};
/**
 * Menu component that handles empty state when passed a set of results.
 */
class Menu extends React.Component {
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
    const contents = Children.count(children) === 0 ? /*#__PURE__*/React.createElement(BaseMenuItem, {
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
      style: {
        ...style,
        display: 'block',
        maxHeight,
        overflow: 'auto'
      }
    }, contents);
  }
}
_defineProperty(Menu, "propTypes", propTypes);
_defineProperty(Menu, "defaultProps", defaultProps);
_defineProperty(Menu, "Divider", MenuDivider);
_defineProperty(Menu, "Header", MenuHeader);
export default Menu;