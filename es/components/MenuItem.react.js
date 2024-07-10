import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["active", "children", "className", "disabled", "onClick", "onMouseDown"];
import cx from 'classnames';
import React from 'react';
import menuItemContainer from '../containers/menuItemContainer';
var BaseMenuItem = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var active = _ref.active,
    children = _ref.children,
    className = _ref.className,
    disabled = _ref.disabled,
    _onClick = _ref.onClick,
    onMouseDown = _ref.onMouseDown,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var conditionalClassNames = {
    active: active,
    disabled: disabled
  };
  return (
    /*#__PURE__*/
    /* eslint-disable jsx-a11y/anchor-is-valid */
    React.createElement("li", _extends({}, props, {
      className: cx(conditionalClassNames, className),
      ref: ref
    }), /*#__PURE__*/React.createElement("a", {
      className: cx('dropdown-item', conditionalClassNames),
      href: "#",
      onClick: function onClick(e) {
        e.preventDefault();
        !disabled && _onClick && _onClick(e);
      },
      onMouseDown: onMouseDown
    }, children))
    /* eslint-enable jsx-a11y/anchor-is-valid */
  );
});
export { BaseMenuItem };
export default menuItemContainer(BaseMenuItem);