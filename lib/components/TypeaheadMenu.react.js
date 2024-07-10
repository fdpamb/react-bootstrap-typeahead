"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Highlighter = _interopRequireDefault(require("./Highlighter.react"));
var _Menu = _interopRequireDefault(require("./Menu.react"));
var _MenuItem = _interopRequireDefault(require("./MenuItem.react"));
var _utils = require("../utils");
var _excluded = ["id", "labelKey", "newSelectionPrefix", "options", "renderMenuItemChildren", "text"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var propTypes = {
  /**
   * Provides the ability to specify a prefix before the user-entered text to
   * indicate that the selection will be new. No-op unless `allowNew={true}`.
   */
  newSelectionPrefix: _propTypes["default"].node,
  /**
   * Prompt displayed when large data sets are paginated.
   */
  paginationText: _propTypes["default"].node,
  /**
   * Provides a hook for customized rendering of menu item contents.
   */
  renderMenuItemChildren: _propTypes["default"].func
};
var defaultProps = {
  newSelectionPrefix: 'New selection: ',
  paginationText: 'Display additional results...',
  renderMenuItemChildren: function renderMenuItemChildren(option, props, idx) {
    return /*#__PURE__*/React.createElement(_Highlighter["default"], {
      search: props.text
    }, (0, _utils.getOptionLabel)(option, props.labelKey));
  }
};
var TypeaheadMenu = /*#__PURE__*/function (_React$Component) {
  function TypeaheadMenu() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    (0, _defineProperty2["default"])(_this, "_renderMenuItem", function (option, position) {
      var _this$props = _this.props,
        labelKey = _this$props.labelKey,
        newSelectionPrefix = _this$props.newSelectionPrefix,
        paginationText = _this$props.paginationText,
        renderMenuItemChildren = _this$props.renderMenuItemChildren,
        text = _this$props.text;
      var label = (0, _utils.getOptionLabel)(option, labelKey);
      var menuItemProps = {
        disabled: (0, _utils.getOptionProperty)(option, 'disabled'),
        label: label,
        option: option,
        position: position
      };
      if (option.customOption) {
        return /*#__PURE__*/React.createElement(_MenuItem["default"], (0, _extends2["default"])({}, menuItemProps, {
          className: "rbt-menu-custom-option",
          key: position,
          label: newSelectionPrefix + label
        }), newSelectionPrefix, /*#__PURE__*/React.createElement(_Highlighter["default"], {
          search: text
        }, label));
      }
      if (option.paginationOption) {
        return /*#__PURE__*/React.createElement(React.Fragment, {
          key: "pagination-item"
        }, /*#__PURE__*/React.createElement(_Menu["default"].Divider, null), /*#__PURE__*/React.createElement(_MenuItem["default"], (0, _extends2["default"])({}, menuItemProps, {
          className: "rbt-menu-pagination-option",
          label: paginationText
        }), paginationText));
      }
      return /*#__PURE__*/React.createElement(_MenuItem["default"], (0, _extends2["default"])({}, menuItemProps, {
        key: position
      }), renderMenuItemChildren(option, _this.props, position));
    });
    return _this;
  }
  (0, _inheritsLoose2["default"])(TypeaheadMenu, _React$Component);
  var _proto = TypeaheadMenu.prototype;
  _proto.render = function render() {
    var _this$props2 = this.props,
      id = _this$props2.id,
      labelKey = _this$props2.labelKey,
      newSelectionPrefix = _this$props2.newSelectionPrefix,
      options = _this$props2.options,
      renderMenuItemChildren = _this$props2.renderMenuItemChildren,
      text = _this$props2.text,
      menuProps = (0, _objectWithoutPropertiesLoose2["default"])(_this$props2, _excluded);
    return (
      /*#__PURE__*/
      // Explictly pass some props so Flow doesn't complain...
      React.createElement(_Menu["default"], (0, _extends2["default"])({}, menuProps, {
        id: id,
        text: text
      }), options.map(this._renderMenuItem))
    );
  };
  return TypeaheadMenu;
}(React.Component);
(0, _defineProperty2["default"])(TypeaheadMenu, "propTypes", propTypes);
(0, _defineProperty2["default"])(TypeaheadMenu, "defaultProps", defaultProps);
var _default = exports["default"] = TypeaheadMenu;