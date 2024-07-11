"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _getMenuItemId = _interopRequireDefault(require("./getMenuItemId"));
const getInputProps = _ref => {
  let {
    activeIndex,
    id,
    isFocused,
    isMenuShown,
    multiple,
    onFocus,
    placeholder,
    ...rest
  } = _ref;
  return function (_temp) {
    let {
      className,
      ...inputProps
    } = _temp === void 0 ? {} : _temp;
    const props = {
      /* eslint-disable sort-keys */
      // These props can be overridden by values in `inputProps`.
      autoComplete: 'off',
      placeholder,
      type: 'text',
      ...inputProps,
      ...rest,
      'aria-activedescendant': activeIndex >= 0 ? (0, _getMenuItemId.default)(id, activeIndex) : undefined,
      'aria-autocomplete': 'both',
      'aria-expanded': isMenuShown,
      'aria-haspopup': 'listbox',
      'aria-owns': isMenuShown ? id : undefined,
      className: (0, _classnames.default)({
        [className || '']: !multiple,
        focus: isFocused
      }),
      // Re-open the menu, eg: if it's closed via ESC.
      onClick: onFocus,
      onFocus,
      // Comboboxes are single-select by definition:
      // https://www.w3.org/TR/wai-aria-practices-1.1/#combobox
      role: 'combobox'
      /* eslint-enable sort-keys */
    };
    if (!multiple) {
      return props;
    }
    return {
      ...props,
      'aria-autocomplete': 'list',
      'aria-expanded': undefined,
      inputClassName: className,
      role: undefined
    };
  };
};
var _default = exports.default = getInputProps;