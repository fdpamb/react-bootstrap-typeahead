import PropTypes from 'prop-types';
import { isFunction, values, warn } from './utils';
import { SIZE } from './constants';
var INPUT_PROPS_BLACKLIST = [{
  alt: 'onBlur',
  prop: 'onBlur'
}, {
  alt: 'onInputChange',
  prop: 'onChange'
}, {
  alt: 'onFocus',
  prop: 'onFocus'
}, {
  alt: 'onKeyDown',
  prop: 'onKeyDown'
}];
export var sizeType = PropTypes.oneOf(values(SIZE));

/**
 * Allows additional warnings or messaging related to prop validation.
 */
export function checkPropType(validator, callback) {
  return function (props, propName, componentName) {
    var _PropTypes$checkPropT;
    PropTypes.checkPropTypes((_PropTypes$checkPropT = {}, _PropTypes$checkPropT[propName] = validator, _PropTypes$checkPropT), props, 'prop', componentName);
    isFunction(callback) && callback(props, propName, componentName);
  };
}
export function caseSensitiveType(props, propName, componentName) {
  var caseSensitive = props.caseSensitive,
    filterBy = props.filterBy;
  warn(!caseSensitive || typeof filterBy !== 'function', 'Your `filterBy` function will override the `caseSensitive` prop.');
}
export function deprecated(validator, reason) {
  return function validate(props, propName, componentName) {
    var _PropTypes$checkPropT2;
    if (props[propName] != null) {
      warn(false, "The prop `" + propName + "` is deprecated. " + reason);
    }
    return PropTypes.checkPropTypes((_PropTypes$checkPropT2 = {}, _PropTypes$checkPropT2[propName] = validator, _PropTypes$checkPropT2), props, 'prop', componentName);
  };
}
export function defaultInputValueType(props, propName, componentName) {
  var defaultInputValue = props.defaultInputValue,
    defaultSelected = props.defaultSelected,
    multiple = props.multiple,
    selected = props.selected;
  var name = defaultSelected.length ? 'defaultSelected' : 'selected';
  warn(!(!multiple && defaultInputValue && (defaultSelected.length || selected && selected.length)), "`defaultInputValue` will be overridden by the value from `" + name + "`.");
}
export function highlightOnlyResultType(props, propName, componentName) {
  var allowNew = props.allowNew,
    highlightOnlyResult = props.highlightOnlyResult;
  warn(!(highlightOnlyResult && allowNew), '`highlightOnlyResult` will not work with `allowNew`.');
}
export function ignoreDiacriticsType(props, propName, componentName) {
  var filterBy = props.filterBy,
    ignoreDiacritics = props.ignoreDiacritics;
  warn(ignoreDiacritics || typeof filterBy !== 'function', 'Your `filterBy` function will override the `ignoreDiacritics` prop.');
}
export function inputPropsType(props, propName, componentName) {
  var inputProps = props.inputProps;
  if (!(inputProps && Object.prototype.toString.call(inputProps) === '[object Object]')) {
    return;
  }

  // Blacklisted properties.
  INPUT_PROPS_BLACKLIST.forEach(function (_ref) {
    var alt = _ref.alt,
      prop = _ref.prop;
    var msg = alt ? " Use the top-level `" + alt + "` prop instead." : null;
    warn(!inputProps[prop], "The `" + prop + "` property of `inputProps` will be ignored." + msg);
  });
}
export function isRequiredForA11y(props, propName, componentName) {
  warn(props[propName] != null, "The prop `" + propName + "` is required to make `" + componentName + "` " + 'accessible for users of assistive technologies such as screen readers.');
}
export function labelKeyType(props, propName, componentName) {
  var allowNew = props.allowNew,
    labelKey = props.labelKey;
  warn(!(isFunction(labelKey) && allowNew), '`labelKey` must be a string when `allowNew={true}`.');
}
export var optionType = PropTypes.oneOfType([PropTypes.object, PropTypes.string]);
export function selectedType(props, propName, componentName) {
  var onChange = props.onChange,
    selected = props.selected;
  warn(!selected || selected && isFunction(onChange), 'You provided a `selected` prop without an `onChange` handler. If you ' + 'want the typeahead to be uncontrolled, use `defaultSelected`. ' + 'Otherwise, set `onChange`.');
}