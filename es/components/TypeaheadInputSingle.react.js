import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["inputRef"];
import React from 'react';
import Input from './Input.react';
import hintContainer from '../containers/hintContainer';
import withClassNames from '../containers/withClassNames';
var HintedInput = hintContainer(Input);
export default withClassNames(function (_ref) {
  var inputRef = _ref.inputRef,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement(HintedInput, _extends({}, props, {
    ref: inputRef
  }));
});