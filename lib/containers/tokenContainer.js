"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _RootCloseWrapper = _interopRequireDefault(require("react-overlays/RootCloseWrapper"));
var _utils = require("../utils");
var _constants = require("../constants");
var _propTypes2 = require("../propTypes");
const propTypes = {
  onBlur: _propTypes.default.func,
  onClick: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onRemove: _propTypes.default.func,
  option: _propTypes2.optionType.isRequired
};
const defaultProps = {
  onBlur: _utils.noop,
  onClick: _utils.noop,
  onFocus: _utils.noop
};

/**
 * Higher-order component to encapsulate Token behaviors.
 */
const tokenContainer = Component => {
  class WrappedComponent extends _react.default.Component {
    constructor() {
      super(...arguments);
      (0, _defineProperty2.default)(this, "state", {
        active: false
      });
      (0, _defineProperty2.default)(this, "_handleActiveChange", (e, active, callback) => {
        // e.persist() isn't always present.
        e.persist && e.persist();
        e.stopPropagation();
        this.setState({
          active
        }, () => callback(e));
      });
      (0, _defineProperty2.default)(this, "_handleBlur", e => {
        this._handleActiveChange(e, false, this.props.onBlur);
      });
      (0, _defineProperty2.default)(this, "_handleClick", e => {
        this._handleActiveChange(e, true, this.props.onClick);
      });
      (0, _defineProperty2.default)(this, "_handleFocus", e => {
        this._handleActiveChange(e, true, this.props.onFocus);
      });
      (0, _defineProperty2.default)(this, "_handleKeyDown", e => {
        switch (e.keyCode) {
          case _constants.BACKSPACE:
            if (this.state.active) {
              // Prevent backspace keypress from triggering the browser "back"
              // action.
              e.preventDefault();
              this._handleRemove();
            }
            break;
          default:
            break;
        }
      });
      (0, _defineProperty2.default)(this, "_handleRemove", () => {
        const {
          onRemove,
          option
        } = this.props;

        // Flow having trouble with `isFunction` here for some reason...
        if (typeof onRemove === 'function') {
          onRemove(option);
        }
      });
    }
    render() {
      const {
        onRemove
      } = this.props;
      const {
        active
      } = this.state;
      return /*#__PURE__*/_react.default.createElement(_RootCloseWrapper.default, {
        disabled: !active,
        onRootClose: this._handleBlur
      }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, this.props, {
        active: active,
        onBlur: this._handleBlur,
        onClick: this._handleClick,
        onFocus: this._handleFocus,
        onKeyDown: this._handleKeyDown,
        onRemove: (0, _utils.isFunction)(onRemove) ? this._handleRemove : undefined
      })));
    }
  }
  (0, _defineProperty2.default)(WrappedComponent, "displayName", "tokenContainer(" + (0, _utils.getDisplayName)(Component) + ")");
  (0, _defineProperty2.default)(WrappedComponent, "propTypes", propTypes);
  (0, _defineProperty2.default)(WrappedComponent, "defaultProps", defaultProps);
  return WrappedComponent;
};
var _default = exports.default = tokenContainer;