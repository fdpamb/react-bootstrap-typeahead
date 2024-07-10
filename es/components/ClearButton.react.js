import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "label", "onClick", "size"];
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { isSizeLarge, noop } from '../utils';
import { sizeType } from '../propTypes';
var propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: sizeType
};
var defaultProps = {
  label: 'Clear',
  onClick: noop
};
/**
 * ClearButton
 *
 * http://getbootstrap.com/css/#helper-classes-close
 */
var ClearButton = function ClearButton(_ref) {
  var className = _ref.className,
    label = _ref.label,
    _onClick = _ref.onClick,
    size = _ref.size,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    "aria-label": label,
    className: cx('close', 'rbt-close', {
      'rbt-close-lg': isSizeLarge(size)
    }, className),
    onClick: function onClick(e) {
      e.stopPropagation();
      _onClick(e);
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