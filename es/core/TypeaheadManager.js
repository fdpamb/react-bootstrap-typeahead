import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { TypeaheadContext } from './Context';
import { getHintText, getInputProps, getInputText, getIsOnlyResult, pick } from '../utils';
import { RETURN } from '../constants';
var inputPropKeys = ['activeIndex', 'disabled', 'id', 'inputRef', 'isFocused', 'isMenuShown', 'multiple', 'onBlur', 'onChange', 'onFocus', 'onKeyDown', 'placeholder'];
var propKeys = ['activeIndex', 'hideMenu', 'isMenuShown', 'labelKey', 'onClear', 'onHide', 'onRemove', 'results', 'selected', 'text', 'toggleMenu'];
var typeaheadContextKeys = ['activeIndex', 'id', 'initialItem', 'inputNode', 'onActiveItemChange', 'onAdd', 'onInitialItemChange', 'onMenuItemClick', 'selectHintOnEnter', 'setItem'];
function getTypeaheadContextValue(props) {
  return _extends({}, pick(props, typeaheadContextKeys), {
    hintText: getHintText(props),
    isOnlyResult: getIsOnlyResult(props)
  });
}
var TypeaheadManager = /*#__PURE__*/function (_React$Component) {
  function TypeaheadManager() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty(_this, "_handleKeyDown", function (e) {
      var _this$props = _this.props,
        initialItem = _this$props.initialItem,
        onKeyDown = _this$props.onKeyDown,
        onAdd = _this$props.onAdd;
      switch (e.keyCode) {
        case RETURN:
          if (initialItem && getIsOnlyResult(_this.props)) {
            onAdd(initialItem);
          }
          break;
        default:
          break;
      }
      onKeyDown(e);
    });
    return _this;
  }
  _inheritsLoose(TypeaheadManager, _React$Component);
  var _proto = TypeaheadManager.prototype;
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props2 = this.props,
      allowNew = _this$props2.allowNew,
      isMenuShown = _this$props2.isMenuShown,
      onInitialItemChange = _this$props2.onInitialItemChange,
      onMenuToggle = _this$props2.onMenuToggle,
      results = _this$props2.results;

    // Clear the initial item when there are no results.
    if (!(allowNew || results.length)) {
      onInitialItemChange(null);
    }
    if (isMenuShown !== prevProps.isMenuShown) {
      onMenuToggle(isMenuShown);
    }
  };
  _proto.render = function render() {
    var childProps = _extends({}, pick(this.props, propKeys), {
      getInputProps: getInputProps(_extends({}, pick(this.props, inputPropKeys), {
        onKeyDown: this._handleKeyDown,
        value: getInputText(this.props)
      }))
    });
    return /*#__PURE__*/React.createElement(TypeaheadContext.Provider, {
      value: getTypeaheadContextValue(this.props)
    }, this.props.children(childProps));
  };
  return TypeaheadManager;
}(React.Component);
export default TypeaheadManager;