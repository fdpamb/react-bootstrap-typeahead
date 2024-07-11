import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import ClearButton from './ClearButton.react';
import tokenContainer from '../containers/tokenContainer';
import { isFunction } from '../utils';
const propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  /**
   * Handler for removing/deleting the token. If not defined, the token will
   * be rendered in a read-only state.
   */
  onRemove: PropTypes.func,
  /**
   * Explicitly force a read-only state on the token.
   */
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.number
};
const defaultProps = {
  active: false,
  disabled: false,
  tabIndex: 0
};
/**
 * Token
 *
 * Individual token component, generally displayed within the TokenizerInput
 * component, but can also be rendered on its own.
 */
class Token extends React.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "_renderRemoveableToken", () => {
      const {
        active,
        children,
        className,
        onRemove,
        ...props
      } = this.props;
      return /*#__PURE__*/React.createElement("div", _extends({}, props, {
        className: cx('rbt-token', 'rbt-token-removeable', {
          'rbt-token-active': active
        }, className)
      }), children, /*#__PURE__*/React.createElement(ClearButton, {
        className: "rbt-token-remove-button",
        label: "Remove",
        onClick: onRemove,
        tabIndex: -1
      }));
    });
    _defineProperty(this, "_renderToken", () => {
      const {
        children,
        className,
        disabled,
        href
      } = this.props;
      const classnames = cx('rbt-token', {
        'rbt-token-disabled': disabled
      }, className);
      if (href && !disabled) {
        return /*#__PURE__*/React.createElement("a", {
          className: classnames,
          href: href
        }, children);
      }
      return /*#__PURE__*/React.createElement("div", {
        className: classnames
      }, children);
    });
  }
  render() {
    const {
      disabled,
      onRemove,
      readOnly
    } = this.props;
    return !disabled && !readOnly && isFunction(onRemove) ? this._renderRemoveableToken() : this._renderToken();
  }
}
_defineProperty(Token, "propTypes", propTypes);
_defineProperty(Token, "defaultProps", defaultProps);
export default tokenContainer(Token);