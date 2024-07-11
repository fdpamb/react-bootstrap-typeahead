import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import cx from 'classnames';
import React from 'react';
import { getDisplayName, isSizeLarge, isSizeSmall } from '../utils';
function withClassNames(Component) {
  // Use a class instead of function component to support refs.
  /* eslint-disable-next-line react/prefer-stateless-function */
  class WrappedComponent extends React.Component {
    render() {
      const {
        className,
        isInvalid,
        isValid,
        size,
        ...props
      } = this.props;
      return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
        className: cx('form-control', 'rbt-input', {
          'input-lg form-control-lg': isSizeLarge(size),
          'input-sm form-control-sm': isSizeSmall(size),
          'is-invalid': isInvalid,
          'is-valid': isValid
        }, className)
      }));
    }
  }
  _defineProperty(WrappedComponent, "displayName", "withClassNames(" + getDisplayName(Component) + ")");
  return WrappedComponent;
}
export default withClassNames;