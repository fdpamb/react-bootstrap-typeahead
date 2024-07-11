import _extends from "@babel/runtime/helpers/extends";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { isSizeLarge, noop } from '../utils';
import { sizeType } from '../propTypes';
const propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: sizeType
};
const defaultProps = {
  label: 'Clear',
  onClick: noop
};
/**
 * ClearButton
 *
 * http://getbootstrap.com/css/#helper-classes-close
 */
const ClearButton = _ref => {
  let {
    className,
    label,
    onClick,
    size,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    "aria-label": label,
    className: cx('close', 'rbt-close', {
      'rbt-close-lg': isSizeLarge(size)
    }, className),
    onClick: e => {
      e.stopPropagation();
      onClick(e);
    },
    type: "button"
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, label));
};
ClearButton.propTypes = propTypes;
ClearButton.defaultProps = defaultProps;
export default ClearButton;