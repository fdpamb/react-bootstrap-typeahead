import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React, { createContext } from 'react';
import { pick } from '../utils';
export var TypeaheadContext = /*#__PURE__*/createContext({});
export var withContext = function withContext(Component, values) {
  // Note: Use a class instead of function component to support refs.
  /* eslint-disable-next-line react/prefer-stateless-function */
  return /*#__PURE__*/function (_React$Component) {
    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }
    _inheritsLoose(_class, _React$Component);
    var _proto = _class.prototype;
    _proto.render = function render() {
      var _this = this;
      return /*#__PURE__*/React.createElement(TypeaheadContext.Consumer, null, function (context) {
        return /*#__PURE__*/React.createElement(Component, _extends({}, _this.props, pick(context, values)));
      });
    };
    return _class;
  }(React.Component);
};