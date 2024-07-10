import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "className", "inputClassName", "inputRef", "placeholder", "selected"];
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cx from 'classnames';
import React from 'react';
import Input from './Input.react';
import { isSelectable } from '../utils';
import hintContainer from '../containers/hintContainer';
import withClassNames from '../containers/withClassNames';
import { BACKSPACE } from '../constants';
var HintedInput = hintContainer(Input);
var TypeaheadInputMulti = /*#__PURE__*/function (_React$Component) {
  function TypeaheadInputMulti() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty(_this, "wrapperRef", /*#__PURE__*/React.createRef());
    _defineProperty(_this, "_input", void 0);
    _defineProperty(_this, "getInputRef", function (input) {
      _this._input = input;
      _this.props.inputRef(input);
    });
    /**
     * Forward click or focus events on the container element to the input.
     */
    _defineProperty(_this, "_handleContainerClickOrFocus", function (e) {
      // Don't focus the input if it's disabled.
      if (_this.props.disabled) {
        e.currentTarget.blur();
        return;
      }

      // Move cursor to the end if the user clicks outside the actual input.
      var inputNode = _this._input;
      if (!inputNode) {
        return;
      }
      if (e.currentTarget !== inputNode && isSelectable(inputNode)) {
        inputNode.selectionStart = inputNode.value.length;
      }
      inputNode.focus();
    });
    _defineProperty(_this, "_handleKeyDown", function (e) {
      var _this$props = _this.props,
        onKeyDown = _this$props.onKeyDown,
        selected = _this$props.selected,
        value = _this$props.value;
      switch (e.keyCode) {
        case BACKSPACE:
          if (e.currentTarget === _this._input && selected.length && !value) {
            // Prevent browser from going back.
            e.preventDefault();

            // If the input is selected and there is no text, focus the last
            // token when the user hits backspace.
            if (_this.wrapperRef.current) {
              var children = _this.wrapperRef.current.children;
              var lastToken = children[children.length - 2];
              lastToken && lastToken.focus();
            }
          }
          break;
        default:
          break;
      }
      onKeyDown(e);
    });
    return _this;
  }
  _inheritsLoose(TypeaheadInputMulti, _React$Component);
  var _proto = TypeaheadInputMulti.prototype;
  _proto.render = function render() {
    var _this$props2 = this.props,
      children = _this$props2.children,
      className = _this$props2.className,
      inputClassName = _this$props2.inputClassName,
      inputRef = _this$props2.inputRef,
      placeholder = _this$props2.placeholder,
      selected = _this$props2.selected,
      props = _objectWithoutPropertiesLoose(_this$props2, _excluded);
    return /*#__PURE__*/React.createElement("div", {
      className: cx('rbt-input-multi', className),
      disabled: props.disabled,
      onClick: this._handleContainerClickOrFocus,
      onFocus: this._handleContainerClickOrFocus,
      tabIndex: -1
    }, /*#__PURE__*/React.createElement("div", {
      className: "rbt-input-wrapper",
      ref: this.wrapperRef
    }, children, /*#__PURE__*/React.createElement(HintedInput, _extends({}, props, {
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
  };
  return TypeaheadInputMulti;
}(React.Component);
export default withClassNames(TypeaheadInputMulti);