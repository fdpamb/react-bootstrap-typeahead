"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseMenuItem = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _menuItemContainer = _interopRequireDefault(require("../containers/menuItemContainer"));
const BaseMenuItem = exports.BaseMenuItem = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    active,
    children,
    className,
    disabled,
    onClick,
    onMouseDown,
    ...props
  } = _ref;
  const conditionalClassNames = {
    active,
    disabled
  };
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)(conditionalClassNames, className),
    ref: ref
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: (0, _classnames.default)('dropdown-item', conditionalClassNames),
    href: "#",
    onClick: e => {
      e.preventDefault();
      !disabled && onClick && onClick(e);
    },
    onMouseDown: onMouseDown
  }, children));
});
var _default = exports.default = (0, _menuItemContainer.default)(BaseMenuItem);