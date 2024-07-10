import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["activeIndex", "id", "isOnlyResult", "label", "onActiveItemChange", "onInitialItemChange", "onMenuItemClick", "option", "position", "setItem"];
import scrollIntoView from 'scroll-into-view-if-needed';
import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../core/Context';
import { getDisplayName, getMenuItemId, preventInputBlur } from '../utils';
var propTypes = {
  option: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  position: PropTypes.number
};
var menuItemContainer = function menuItemContainer(Component) {
  var WrappedMenuItem = /*#__PURE__*/function (_React$Component) {
    function WrappedMenuItem() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _defineProperty(_this, "itemRef", /*#__PURE__*/React.createRef());
      _defineProperty(_this, "_handleClick", function (e) {
        var _this$props = _this.props,
          onMenuItemClick = _this$props.onMenuItemClick,
          option = _this$props.option,
          onClick = _this$props.onClick;
        onMenuItemClick(option, e);
        onClick && onClick(e);
      });
      _defineProperty(_this, "_maybeUpdateItem", function () {
        var _this$props2 = _this.props,
          activeIndex = _this$props2.activeIndex,
          onActiveItemChange = _this$props2.onActiveItemChange,
          onInitialItemChange = _this$props2.onInitialItemChange,
          option = _this$props2.option,
          position = _this$props2.position;
        if (position === 0) {
          onInitialItemChange(option);
        }
        if (position === activeIndex) {
          onActiveItemChange(option);

          // Automatically scroll the menu as the user keys through it.
          var node = _this.itemRef.current;
          node && scrollIntoView(node, {
            block: 'nearest',
            boundary: node.parentNode,
            inline: 'nearest',
            scrollMode: 'if-needed'
          });
        }
      });
      return _this;
    }
    _inheritsLoose(WrappedMenuItem, _React$Component);
    var _proto = WrappedMenuItem.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this._maybeUpdateItem();
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      this._maybeUpdateItem();
    };
    _proto.render = function render() {
      var _this$props3 = this.props,
        activeIndex = _this$props3.activeIndex,
        id = _this$props3.id,
        isOnlyResult = _this$props3.isOnlyResult,
        label = _this$props3.label,
        onActiveItemChange = _this$props3.onActiveItemChange,
        onInitialItemChange = _this$props3.onInitialItemChange,
        onMenuItemClick = _this$props3.onMenuItemClick,
        option = _this$props3.option,
        position = _this$props3.position,
        setItem = _this$props3.setItem,
        props = _objectWithoutPropertiesLoose(_this$props3, _excluded);
      var active = isOnlyResult || activeIndex === position;

      // Update the item's position in the item stack.
      setItem(option, position);
      return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
        active: active,
        "aria-label": label,
        "aria-selected": active,
        id: getMenuItemId(id, position),
        onClick: this._handleClick,
        onMouseDown: preventInputBlur,
        ref: this.itemRef,
        role: "option"
      }));
    };
    return WrappedMenuItem;
  }(React.Component);
  _defineProperty(WrappedMenuItem, "displayName", "menuItemContainer(" + getDisplayName(Component) + ")");
  _defineProperty(WrappedMenuItem, "propTypes", propTypes);
  return withContext(WrappedMenuItem, ['activeIndex', 'id', 'isOnlyResult', 'items', 'onActiveItemChange', 'onInitialItemChange', 'onMenuItemClick', 'setItem']);
};
export default menuItemContainer;