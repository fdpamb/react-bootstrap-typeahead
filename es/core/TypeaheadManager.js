import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import { TypeaheadContext } from './Context';
import { getHintText, getInputProps, getInputText, getIsOnlyResult, pick } from '../utils';
import { RETURN } from '../constants';
const inputPropKeys = ['activeIndex', 'disabled', 'id', 'inputRef', 'isFocused', 'isMenuShown', 'multiple', 'onBlur', 'onChange', 'onFocus', 'onKeyDown', 'placeholder'];
const propKeys = ['activeIndex', 'hideMenu', 'isMenuShown', 'labelKey', 'onClear', 'onHide', 'onRemove', 'results', 'selected', 'text', 'toggleMenu'];
const typeaheadContextKeys = ['activeIndex', 'id', 'initialItem', 'inputNode', 'onActiveItemChange', 'onAdd', 'onInitialItemChange', 'onMenuItemClick', 'selectHintOnEnter', 'setItem'];
function getTypeaheadContextValue(props) {
  return {
    ...pick(props, typeaheadContextKeys),
    hintText: getHintText(props),
    isOnlyResult: getIsOnlyResult(props)
  };
}
class TypeaheadManager extends React.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "_handleKeyDown", e => {
      const {
        initialItem,
        onKeyDown,
        onAdd
      } = this.props;
      switch (e.keyCode) {
        case RETURN:
          if (initialItem && getIsOnlyResult(this.props)) {
            onAdd(initialItem);
          }
          break;
        default:
          break;
      }
      onKeyDown(e);
    });
  }
  componentDidUpdate(prevProps) {
    const {
      allowNew,
      isMenuShown,
      onInitialItemChange,
      onMenuToggle,
      results
    } = this.props;

    // Clear the initial item when there are no results.
    if (!(allowNew || results.length)) {
      onInitialItemChange(null);
    }
    if (isMenuShown !== prevProps.isMenuShown) {
      onMenuToggle(isMenuShown);
    }
  }
  render() {
    const childProps = {
      ...pick(this.props, propKeys),
      getInputProps: getInputProps({
        ...pick(this.props, inputPropKeys),
        onKeyDown: this._handleKeyDown,
        value: getInputText(this.props)
      })
    };
    return /*#__PURE__*/React.createElement(TypeaheadContext.Provider, {
      value: getTypeaheadContextValue(this.props)
    }, this.props.children(childProps));
  }
}
export default TypeaheadManager;