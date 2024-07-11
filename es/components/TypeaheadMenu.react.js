import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as React from 'react';
import PropTypes from 'prop-types';
import Highlighter from './Highlighter.react';
import Menu from './Menu.react';
import MenuItem from './MenuItem.react';
import { getOptionLabel, getOptionProperty } from '../utils';
const propTypes = {
  /**
   * Provides the ability to specify a prefix before the user-entered text to
   * indicate that the selection will be new. No-op unless `allowNew={true}`.
   */
  newSelectionPrefix: PropTypes.node,
  /**
   * Prompt displayed when large data sets are paginated.
   */
  paginationText: PropTypes.node,
  /**
   * Provides a hook for customized rendering of menu item contents.
   */
  renderMenuItemChildren: PropTypes.func
};
const defaultProps = {
  newSelectionPrefix: 'New selection: ',
  paginationText: 'Display additional results...',
  renderMenuItemChildren: (option, props, idx) => /*#__PURE__*/React.createElement(Highlighter, {
    search: props.text
  }, getOptionLabel(option, props.labelKey))
};
class TypeaheadMenu extends React.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "_renderMenuItem", (option, position) => {
      const {
        labelKey,
        newSelectionPrefix,
        paginationText,
        renderMenuItemChildren,
        text
      } = this.props;
      const label = getOptionLabel(option, labelKey);
      const menuItemProps = {
        disabled: getOptionProperty(option, 'disabled'),
        label,
        option,
        position
      };
      if (option.customOption) {
        return /*#__PURE__*/React.createElement(MenuItem, _extends({}, menuItemProps, {
          className: "rbt-menu-custom-option",
          key: position,
          label: newSelectionPrefix + label
        }), newSelectionPrefix, /*#__PURE__*/React.createElement(Highlighter, {
          search: text
        }, label));
      }
      if (option.paginationOption) {
        return /*#__PURE__*/React.createElement(React.Fragment, {
          key: "pagination-item"
        }, /*#__PURE__*/React.createElement(Menu.Divider, null), /*#__PURE__*/React.createElement(MenuItem, _extends({}, menuItemProps, {
          className: "rbt-menu-pagination-option",
          label: paginationText
        }), paginationText));
      }
      return /*#__PURE__*/React.createElement(MenuItem, _extends({}, menuItemProps, {
        key: position
      }), renderMenuItemChildren(option, this.props, position));
    });
  }
  render() {
    const {
      id,
      labelKey,
      newSelectionPrefix,
      options,
      renderMenuItemChildren,
      text,
      ...menuProps
    } = this.props;
    return (
      /*#__PURE__*/
      // Explictly pass some props so Flow doesn't complain...
      React.createElement(Menu, _extends({}, menuProps, {
        id: id,
        text: text
      }), options.map(this._renderMenuItem))
    );
  }
}
_defineProperty(TypeaheadMenu, "propTypes", propTypes);
_defineProperty(TypeaheadMenu, "defaultProps", defaultProps);
export default TypeaheadMenu;