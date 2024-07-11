"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _scrollIntoViewIfNeeded = _interopRequireDefault(require("scroll-into-view-if-needed"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Context = require("../core/Context");
var _utils = require("../utils");
const propTypes = {
  option: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]).isRequired,
  position: _propTypes.default.number
};
const menuItemContainer = Component => {
  class WrappedMenuItem extends _react.default.Component {
    constructor() {
      super(...arguments);
      (0, _defineProperty2.default)(this, "itemRef", /*#__PURE__*/_react.default.createRef());
      (0, _defineProperty2.default)(this, "_handleClick", e => {
        const {
          onMenuItemClick,
          option,
          onClick
        } = this.props;
        onMenuItemClick(option, e);
        onClick && onClick(e);
      });
      (0, _defineProperty2.default)(this, "_maybeUpdateItem", () => {
        const {
          activeIndex,
          onActiveItemChange,
          onInitialItemChange,
          option,
          position
        } = this.props;
        if (position === 0) {
          onInitialItemChange(option);
        }
        if (position === activeIndex) {
          onActiveItemChange(option);

          // Automatically scroll the menu as the user keys through it.
          const node = this.itemRef.current;
          node && (0, _scrollIntoViewIfNeeded.default)(node, {
            block: 'nearest',
            boundary: node.parentNode,
            inline: 'nearest',
            scrollMode: 'if-needed'
          });
        }
      });
    }
    componentDidMount() {
      this._maybeUpdateItem();
    }
    componentDidUpdate(prevProps, prevState) {
      this._maybeUpdateItem();
    }
    render() {
      const {
        activeIndex,
        id,
        isOnlyResult,
        label,
        onActiveItemChange,
        onInitialItemChange,
        onMenuItemClick,
        option,
        position,
        setItem,
        ...props
      } = this.props;
      const active = isOnlyResult || activeIndex === position;

      // Update the item's position in the item stack.
      setItem(option, position);
      return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
        active: active,
        "aria-label": label,
        "aria-selected": active,
        id: (0, _utils.getMenuItemId)(id, position),
        onClick: this._handleClick,
        onMouseDown: _utils.preventInputBlur,
        ref: this.itemRef,
        role: "option"
      }));
    }
  }
  (0, _defineProperty2.default)(WrappedMenuItem, "displayName", "menuItemContainer(" + (0, _utils.getDisplayName)(Component) + ")");
  (0, _defineProperty2.default)(WrappedMenuItem, "propTypes", propTypes);
  return (0, _Context.withContext)(WrappedMenuItem, ['activeIndex', 'id', 'isOnlyResult', 'items', 'onActiveItemChange', 'onInitialItemChange', 'onMenuItemClick', 'setItem']);
};
var _default = exports.default = menuItemContainer;