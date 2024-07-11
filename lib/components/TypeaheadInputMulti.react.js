"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _Input = _interopRequireDefault(require("./Input.react"));
var _utils = require("../utils");
var _hintContainer = _interopRequireDefault(require("../containers/hintContainer"));
var _withClassNames = _interopRequireDefault(require("../containers/withClassNames"));
var _constants = require("../constants");
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
const HintedInput = (0, _hintContainer.default)(_Input.default);
class TypeaheadInputMulti extends _react.default.Component {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "wrapperRef", /*#__PURE__*/_react.default.createRef());
    (0, _defineProperty2.default)(this, "_input", void 0);
    (0, _defineProperty2.default)(this, "getInputRef", input => {
      this._input = input;
      this.props.inputRef(input);
    });
    /**
     * Forward click or focus events on the container element to the input.
     */
    (0, _defineProperty2.default)(this, "_handleContainerClickOrFocus", e => {
      // Don't focus the input if it's disabled.
      if (this.props.disabled) {
        e.currentTarget.blur();
        return;
      }

      // Move cursor to the end if the user clicks outside the actual input.
      const inputNode = this._input;
      if (!inputNode) {
        return;
      }
      if (e.currentTarget !== inputNode && (0, _utils.isSelectable)(inputNode)) {
        inputNode.selectionStart = inputNode.value.length;
      }
      inputNode.focus();
    });
    (0, _defineProperty2.default)(this, "_handleKeyDown", e => {
      const {
        onKeyDown,
        selected,
        value
      } = this.props;
      switch (e.keyCode) {
        case _constants.BACKSPACE:
          if (e.currentTarget === this._input && selected.length && !value) {
            // Prevent browser from going back.
            e.preventDefault();

            // If the input is selected and there is no text, focus the last
            // token when the user hits backspace.
            if (this.wrapperRef.current) {
              const {
                children
              } = this.wrapperRef.current;
              const lastToken = children[children.length - 2];
              lastToken && lastToken.focus();
            }
          }
          break;
        default:
          break;
      }
      onKeyDown(e);
    });
  }
  render() {
    const {
      children,
      className,
      inputClassName,
      inputRef,
      placeholder,
      selected,
      ...props
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)('rbt-input-multi', className),
      disabled: props.disabled,
      onClick: this._handleContainerClickOrFocus,
      onFocus: this._handleContainerClickOrFocus,
      tabIndex: -1
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "rbt-input-wrapper",
      ref: this.wrapperRef
    }, children, /*#__PURE__*/_react.default.createElement(HintedInput, (0, _extends2.default)({}, props, {
      className: inputClassName,
      onKeyDown: this._handleKeyDown,
      placeholder: selected.length ? '' : placeholder,
      ref: this.getInputRef,
      style: {
        backgroundColor: 'transparent',
        border: 0,
        boxShadow: 'none',
        cursor: 'inherit',
        outline: 'none',
        padding: 0,
        width: '100%',
        zIndex: 1
      }
    }))));
  }
}
var _default = exports.default = (0, _withClassNames.default)(TypeaheadInputMulti);