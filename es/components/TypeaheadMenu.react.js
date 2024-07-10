import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["id", "labelKey", "newSelectionPrefix", "options", "renderMenuItemChildren", "text"];
import * as React from 'react';
import PropTypes from 'prop-types';
import Highlighter from './Highlighter.react';
import Menu from './Menu.react';
import MenuItem from './MenuItem.react';
import { getOptionLabel, getOptionProperty } from '../utils';
var propTypes = {
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
var defaultProps = {
  newSelectionPrefix: 'New selection: ',
  paginationText: 'Display additional results...',
  renderMenuItemChildren: function renderMenuItemChildren(option, props, idx) {
    return /*#__PURE__*/React.createElement(Highlighter, {
      search: props.text
    }, getOptionLabel(option, props.labelKey));
  }
};
var TypeaheadMenu = /*#__PURE__*/function (_React$Component) {
  function TypeaheadMenu() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty(_this, "_renderMenuItem", function (option, position) {
      var _this$props = _this.props,
        labelKey = _this$props.labelKey,
        newSelectionPrefix = _this$props.newSelectionPrefix,
        paginationText = _this$props.paginationText,
        renderMenuItemChildren = _this$props.renderMenuItemChildren,
        text = _this$props.text;
      var label = getOptionLabel(option, labelKey);
      var menuItemProps = {
        disabled: getOptionProperty(option, 'disabled'),
        label: label,
        option: option,
        position: position
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
      }), renderMenuItemChildren(option, _this.props, position));
    });
    return _this;
  }
  _inheritsLoose(TypeaheadMenu, _React$Component);
  var _proto = TypeaheadMenu.prototype;
  _proto.render = function render() {
    var _this$props2 = this.props,
      id = _this$props2.id,
      labelKey = _this$props2.labelKey,
      newSelectionPrefix = _this$props2.newSelectionPrefix,
      options = _this$props2.options,
      renderMenuItemChildren = _this$props2.renderMenuItemChildren,
      text = _this$props2.text,
      menuProps = _objectWithoutPropertiesLoose(_this$props2, _excluded);
    return (
      /*#__PURE__*/
      // Explictly pass some props so Flow doesn't complain...
      React.createElement(Menu, _extends({}, menuProps, {
        id: id,
        text: text
      }), options.map(this._renderMenuItem))
    );
  };
  return TypeaheadMenu;
}(React.Component);
_defineProperty(TypeaheadMenu, "propTypes", propTypes);
_defineProperty(TypeaheadMenu, "defaultProps", defaultProps);
export default TypeaheadMenu;