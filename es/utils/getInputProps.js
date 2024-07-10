import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["activeIndex", "id", "isFocused", "isMenuShown", "multiple", "onFocus", "placeholder"],
  _excluded2 = ["className"];
import cx from 'classnames';
import getMenuItemId from './getMenuItemId';
var getInputProps = function getInputProps(_ref) {
  var activeIndex = _ref.activeIndex,
    id = _ref.id,
    isFocused = _ref.isFocused,
    isMenuShown = _ref.isMenuShown,
    multiple = _ref.multiple,
    onFocus = _ref.onFocus,
    placeholder = _ref.placeholder,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  return function (_temp) {
    var _cx;
    var _ref2 = _temp === void 0 ? {} : _temp,
      className = _ref2.className,
      inputProps = _objectWithoutPropertiesLoose(_ref2, _excluded2);
    var props = _extends({
      /* eslint-disable sort-keys */
      // These props can be overridden by values in `inputProps`.
      autoComplete: 'off',
      placeholder: placeholder,
      type: 'text'
    }, inputProps, rest, {
      'aria-activedescendant': activeIndex >= 0 ? getMenuItemId(id, activeIndex) : undefined,
      'aria-autocomplete': 'both',
      'aria-expanded': isMenuShown,
      'aria-haspopup': 'listbox',
      'aria-owns': isMenuShown ? id : undefined,
      className: cx((_cx = {}, _cx[className || ''] = !multiple, _cx.focus = isFocused, _cx)),
      // Re-open the menu, eg: if it's closed via ESC.
      onClick: onFocus,
      onFocus: onFocus,
      // Comboboxes are single-select by definition:
      // https://www.w3.org/TR/wai-aria-practices-1.1/#combobox
      role: 'combobox'
      /* eslint-enable sort-keys */
    });
    if (!multiple) {
      return props;
    }
    return _extends({}, props, {
      'aria-autocomplete': 'list',
      'aria-expanded': undefined,
      inputClassName: className,
      role: undefined
    });
  };
};
export default getInputProps;