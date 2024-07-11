"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getPlacement = getPlacement;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactPopper = require("react-popper");
var _utils = require("../utils");
var _constants = require("../constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/* eslint-disable react/no-unused-prop-types */
// `Element` is not defined during server-side rendering, so shim it here.
/* istanbul ignore next */
const SafeElement = typeof Element === 'undefined' ? () => {} : Element;
const propTypes = {
  /**
   * Specify menu alignment. The default value is `justify`, which makes the
   * menu as wide as the input and truncates long values. Specifying `left`
   * or `right` will align the menu to that side and the width will be
   * determined by the length of menu item values.
   */
  align: _propTypes.default.oneOf((0, _utils.values)(_constants.ALIGN)),
  children: _propTypes.default.func.isRequired,
  /**
   * Specify whether the menu should appear above the input.
   */
  dropup: _propTypes.default.bool,
  /**
   * Whether or not to automatically adjust the position of the menu when it
   * reaches the viewport boundaries.
   */
  flip: _propTypes.default.bool,
  isMenuShown: _propTypes.default.bool,
  positionFixed: _propTypes.default.bool,
  referenceElement: _propTypes.default.instanceOf(SafeElement)
};
const defaultProps = {
  align: _constants.ALIGN.JUSTIFY,
  dropup: false,
  flip: false,
  isMenuShown: false,
  positionFixed: false
};
function getModifiers(_ref) {
  let {
    align,
    flip
  } = _ref;
  return {
    computeStyles: {
      enabled: true,
      fn: _ref2 => {
        let {
          styles,
          ...data
        } = _ref2;
        return {
          ...data,
          styles: {
            ...styles,
            // Use the following condition instead of `align === 'justify'`
            // since it allows the component to fall back to justifying the
            // menu width if `align` is undefined.
            width: align !== _constants.ALIGN.RIGHT && align !== _constants.ALIGN.LEFT ?
            // Set the popper width to match the target width.
            data.offsets.reference.width : styles.width
          }
        };
      }
    },
    flip: {
      enabled: flip
    },
    preventOverflow: {
      escapeWithReference: true
    }
  };
}

// Flow expects a string literal value for `placement`.
const PLACEMENT = {
  bottom: {
    end: 'bottom-end',
    start: 'bottom-start'
  },
  top: {
    end: 'top-end',
    start: 'top-start'
  }
};
function getPlacement(_ref3) {
  let {
    align,
    dropup
  } = _ref3;
  const x = align === _constants.ALIGN.RIGHT ? 'end' : 'start';
  const y = dropup ? 'top' : 'bottom';
  return PLACEMENT[y][x];
}
const Overlay = props => {
  const {
    children,
    isMenuShown,
    positionFixed,
    referenceElement
  } = props;
  if (!isMenuShown) {
    return null;
  }
  return /*#__PURE__*/React.createElement(_reactPopper.Popper, {
    modifiers: getModifiers(props),
    placement: getPlacement(props),
    positionFixed: positionFixed,
    referenceElement: referenceElement
  }, _ref4 => {
    let {
      ref,
      ...popperProps
    } = _ref4;
    return children({
      ...popperProps,
      innerRef: ref,
      inputHeight: referenceElement ? referenceElement.offsetHeight : 0
    });
  });
};
Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
var _default = exports.default = Overlay;