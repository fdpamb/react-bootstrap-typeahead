import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import Input from './Input.react';
import hintContainer from '../containers/hintContainer';
import withClassNames from '../containers/withClassNames';
const HintedInput = hintContainer(Input);
export default withClassNames(_ref => {
  let {
    inputRef,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(HintedInput, _extends({}, props, {
    ref: inputRef
  }));
});