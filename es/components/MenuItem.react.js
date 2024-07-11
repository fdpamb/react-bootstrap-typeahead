import _extends from "@babel/runtime/helpers/extends";
import cx from 'classnames';
import React from 'react';
import menuItemContainer from '../containers/menuItemContainer';
const BaseMenuItem = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    active,
    children,
    className,
    disabled,
    onClick,
    onMouseDown,
    ...props
  } = _ref;
  const conditionalClassNames = {
    active,
    disabled
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
      onClick: e => {
        e.preventDefault();
        !disabled && onClick && onClick(e);
      },
      onMouseDown: onMouseDown
    }, children))
    /* eslint-enable jsx-a11y/anchor-is-valid */
  );
});
export { BaseMenuItem };
export default menuItemContainer(BaseMenuItem);