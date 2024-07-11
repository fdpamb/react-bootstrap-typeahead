"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caseSensitiveType = caseSensitiveType;
exports.checkPropType = checkPropType;
exports.defaultInputValueType = defaultInputValueType;
exports.deprecated = deprecated;
exports.highlightOnlyResultType = highlightOnlyResultType;
exports.ignoreDiacriticsType = ignoreDiacriticsType;
exports.inputPropsType = inputPropsType;
exports.isRequiredForA11y = isRequiredForA11y;
exports.labelKeyType = labelKeyType;
exports.optionType = void 0;
exports.selectedType = selectedType;
exports.sizeType = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("./utils");
var _constants = require("./constants");
const INPUT_PROPS_BLACKLIST = [{
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
const sizeType = exports.sizeType = _propTypes.default.oneOf((0, _utils.values)(_constants.SIZE));

/**
 * Allows additional warnings or messaging related to prop validation.
 */
function checkPropType(validator, callback) {
  return (props, propName, componentName) => {
    _propTypes.default.checkPropTypes({
      [propName]: validator
    }, props, 'prop', componentName);
    (0, _utils.isFunction)(callback) && callback(props, propName, componentName);
  };
}
function caseSensitiveType(props, propName, componentName) {
  const {
    caseSensitive,
    filterBy
  } = props;
  (0, _utils.warn)(!caseSensitive || typeof filterBy !== 'function', 'Your `filterBy` function will override the `caseSensitive` prop.');
}
function deprecated(validator, reason) {
  return function validate(props, propName, componentName) {
    if (props[propName] != null) {
      (0, _utils.warn)(false, "The prop `" + propName + "` is deprecated. " + reason);
    }
    return _propTypes.default.checkPropTypes({
      [propName]: validator
    }, props, 'prop', componentName);
  };
}
function defaultInputValueType(props, propName, componentName) {
  const {
    defaultInputValue,
    defaultSelected,
    multiple,
    selected
  } = props;
  const name = defaultSelected.length ? 'defaultSelected' : 'selected';
  (0, _utils.warn)(!(!multiple && defaultInputValue && (defaultSelected.length || selected && selected.length)), "`defaultInputValue` will be overridden by the value from `" + name + "`.");
}
function highlightOnlyResultType(props, propName, componentName) {
  const {
    allowNew,
    highlightOnlyResult
  } = props;
  (0, _utils.warn)(!(highlightOnlyResult && allowNew), '`highlightOnlyResult` will not work with `allowNew`.');
}
function ignoreDiacriticsType(props, propName, componentName) {
  const {
    filterBy,
    ignoreDiacritics
  } = props;
  (0, _utils.warn)(ignoreDiacritics || typeof filterBy !== 'function', 'Your `filterBy` function will override the `ignoreDiacritics` prop.');
}
function inputPropsType(props, propName, componentName) {
  const {
    inputProps
  } = props;
  if (!(inputProps && Object.prototype.toString.call(inputProps) === '[object Object]')) {
    return;
  }

  // Blacklisted properties.
  INPUT_PROPS_BLACKLIST.forEach(_ref => {
    let {
      alt,
      prop
    } = _ref;
    const msg = alt ? " Use the top-level `" + alt + "` prop instead." : null;
    (0, _utils.warn)(!inputProps[prop], "The `" + prop + "` property of `inputProps` will be ignored." + msg);
  });
}
function isRequiredForA11y(props, propName, componentName) {
  (0, _utils.warn)(props[propName] != null, "The prop `" + propName + "` is required to make `" + componentName + "` " + 'accessible for users of assistive technologies such as screen readers.');
}
function labelKeyType(props, propName, componentName) {
  const {
    allowNew,
    labelKey
  } = props;
  (0, _utils.warn)(!((0, _utils.isFunction)(labelKey) && allowNew), '`labelKey` must be a string when `allowNew={true}`.');
}
const optionType = exports.optionType = _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]);
function selectedType(props, propName, componentName) {
  const {
    onChange,
    selected
  } = props;
  (0, _utils.warn)(!selected || selected && (0, _utils.isFunction)(onChange), 'You provided a `selected` prop without an `onChange` handler. If you ' + 'want the typeahead to be uncontrolled, use `defaultSelected`. ' + 'Otherwise, set `onChange`.');
}