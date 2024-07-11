import _extends from "@babel/runtime/helpers/extends";
import React, { createContext } from 'react';
import { pick } from '../utils';
export const TypeaheadContext = /*#__PURE__*/createContext({});
export const withContext = (Component, values) => {
  // Note: Use a class instead of function component to support refs.
  /* eslint-disable-next-line react/prefer-stateless-function */
  return class extends React.Component {
    render() {
      return /*#__PURE__*/React.createElement(TypeaheadContext.Consumer, null, context => /*#__PURE__*/React.createElement(Component, _extends({}, this.props, pick(context, values))));
    }
  };
};