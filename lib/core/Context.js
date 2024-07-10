"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withContext = exports.TypeaheadContext = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var TypeaheadContext = exports.TypeaheadContext = /*#__PURE__*/(0, _react.createContext)({});
var withContext = exports.withContext = function withContext(Component, values) {
  // Note: Use a class instead of function component to support refs.
  /* eslint-disable-next-line react/prefer-stateless-function */
  return /*#__PURE__*/function (_React$Component) {
    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }
    (0, _inheritsLoose2["default"])(_class, _React$Component);
    var _proto = _class.prototype;
    _proto.render = function render() {
      var _this = this;
      return /*#__PURE__*/_react["default"].createElement(TypeaheadContext.Consumer, null, function (context) {
        return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, _this.props, (0, _utils.pick)(context, values)));
      });
    };
    return _class;
  }(_react["default"].Component);
};