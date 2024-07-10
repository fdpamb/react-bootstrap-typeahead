import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "isInvalid", "isValid", "size"];
import cx from 'classnames';
import React from 'react';
import { getDisplayName, isSizeLarge, isSizeSmall } from '../utils';
function withClassNames(Component) {
  // Use a class instead of function component to support refs.
  /* eslint-disable-next-line react/prefer-stateless-function */
  var WrappedComponent = /*#__PURE__*/function (_React$Component) {
    function WrappedComponent() {
      return _React$Component.apply(this, arguments) || this;
    }
    _inheritsLoose(WrappedComponent, _React$Component);
    var _proto = WrappedComponent.prototype;
    _proto.render = function render() {
      var _this$props = this.props,
        className = _this$props.className,
        isInvalid = _this$props.isInvalid,
        isValid = _this$props.isValid,
        size = _this$props.size,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded);
      return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
        className: cx('form-control', 'rbt-input', {
          'input-lg form-control-lg': isSizeLarge(size),
          'input-sm form-control-sm': isSizeSmall(size),
          'is-invalid': isInvalid,
          'is-valid': isValid
        }, className)
      }));
    };
    return WrappedComponent;
  }(React.Component);
  _defineProperty(WrappedComponent, "displayName", "withClassNames(" + getDisplayName(Component) + ")");
  return WrappedComponent;
}
export default withClassNames;