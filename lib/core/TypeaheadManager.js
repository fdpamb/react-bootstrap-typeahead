"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _Context = require("./Context");
var _utils = require("../utils");
var _constants = require("../constants");
const inputPropKeys = ['activeIndex', 'disabled', 'id', 'inputRef', 'isFocused', 'isMenuShown', 'multiple', 'onBlur', 'onChange', 'onFocus', 'onKeyDown', 'placeholder'];
const propKeys = ['activeIndex', 'hideMenu', 'isMenuShown', 'labelKey', 'onClear', 'onHide', 'onRemove', 'results', 'selected', 'text', 'toggleMenu'];
const typeaheadContextKeys = ['activeIndex', 'id', 'initialItem', 'inputNode', 'onActiveItemChange', 'onAdd', 'onInitialItemChange', 'onMenuItemClick', 'selectHintOnEnter', 'setItem'];
function getTypeaheadContextValue(props) {
  return {
    ...(0, _utils.pick)(props, typeaheadContextKeys),
    hintText: (0, _utils.getHintText)(props),
    isOnlyResult: (0, _utils.getIsOnlyResult)(props)
  };
}
class TypeaheadManager extends _react.default.Component {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "_handleKeyDown", e => {
      const {
        initialItem,
        onKeyDown,
        onAdd
      } = this.props;
      switch (e.keyCode) {
        case _constants.RETURN:
          if (initialItem && (0, _utils.getIsOnlyResult)(this.props)) {
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
      ...(0, _utils.pick)(this.props, propKeys),
      getInputProps: (0, _utils.getInputProps)({
        ...(0, _utils.pick)(this.props, inputPropKeys),
        onKeyDown: this._handleKeyDown,
        value: (0, _utils.getInputText)(this.props)
      })
    };
    return /*#__PURE__*/_react.default.createElement(_Context.TypeaheadContext.Provider, {
      value: getTypeaheadContextValue(this.props)
    }, this.props.children(childProps));
  }
}
var _default = exports.default = TypeaheadManager;