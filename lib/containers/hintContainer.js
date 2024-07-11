"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _Context = require("../core/Context");
var _utils = require("../utils");
// IE doesn't seem to get the composite computed value (eg: 'padding',
// 'borderStyle', etc.), so generate these from the individual values.
function interpolateStyle(styles, attr, subattr) {
  if (subattr === void 0) {
    subattr = '';
  }
  // Title-case the sub-attribute.
  if (subattr) {
    subattr = subattr.replace(subattr[0], subattr[0].toUpperCase());
  }
  return ['Top', 'Right', 'Bottom', 'Left'].map(dir => styles[attr + dir + subattr]).join(' ');
}
function copyStyles(inputNode, hintNode) {
  if (!inputNode || !hintNode) {
    return;
  }
  const inputStyle = window.getComputedStyle(inputNode);
  hintNode.style.borderStyle = interpolateStyle(inputStyle, 'border', 'style');
  hintNode.style.borderWidth = interpolateStyle(inputStyle, 'border', 'width');
  hintNode.style.fontSize = inputStyle.fontSize;
  hintNode.style.height = inputStyle.height;
  hintNode.style.lineHeight = inputStyle.lineHeight;
  hintNode.style.margin = interpolateStyle(inputStyle, 'margin');
  hintNode.style.padding = interpolateStyle(inputStyle, 'padding');
}
function hintContainer(Input) {
  class HintedInput extends _react.default.Component {
    constructor() {
      super(...arguments);
      (0, _defineProperty2.default)(this, "hintRef", /*#__PURE__*/_react.default.createRef());
      (0, _defineProperty2.default)(this, "_handleKeyDown", e => {
        const {
          initialItem,
          onAdd,
          onKeyDown
        } = this.props;
        if ((0, _utils.shouldSelectHint)(e, this.props)) {
          e.preventDefault(); // Prevent input from blurring on TAB.
          onAdd(initialItem);
        }
        onKeyDown(e);
      });
    }
    componentDidMount() {
      copyStyles(this.props.inputNode, this.hintRef.current);
    }
    componentDidUpdate() {
      copyStyles(this.props.inputNode, this.hintRef.current);
    }
    render() {
      const {
        forwardedRef,
        hintText,
        initialItem,
        inputNode,
        onAdd,
        selectHintOnEnter,
        ...props
      } = this.props;
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: 'flex',
          flex: 1,
          height: '100%',
          position: 'relative'
        }
      }, /*#__PURE__*/_react.default.createElement(Input, (0, _extends2.default)({}, props, {
        onKeyDown: this._handleKeyDown,
        ref: forwardedRef
      })), /*#__PURE__*/_react.default.createElement("input", {
        "aria-hidden": true,
        className: "rbt-input-hint",
        ref: this.hintRef,
        readOnly: true,
        style: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          boxShadow: 'none',
          color: 'rgba(0, 0, 0, 0.35)',
          left: 0,
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          width: '100%'
        },
        tabIndex: -1,
        value: hintText
      }));
    }
  }
  (0, _defineProperty2.default)(HintedInput, "displayName", "hintContainer(" + (0, _utils.getDisplayName)(Input) + ")");
  const HintedInputWithContext = (0, _Context.withContext)(HintedInput, ['hintText', 'initialItem', 'inputNode', 'onAdd', 'selectHintOnEnter']);
  return /*#__PURE__*/_react.default.forwardRef((props, ref) => /*#__PURE__*/_react.default.createElement(HintedInputWithContext, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  })));
}
var _default = exports.default = hintContainer;