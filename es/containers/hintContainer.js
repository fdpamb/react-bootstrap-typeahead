import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import { withContext } from '../core/Context';
import { getDisplayName, shouldSelectHint } from '../utils';
// IE doesn't seem to get the composite computed value (eg: 'padding',
// 'borderStyle', etc.), so generate these from the individual values.
function interpolateStyle(styles, attr, subattr) {
  if (subattr === void 0) {
    subattr = '';
  }
  // Title-case the sub-attribute.
  if (subattr) {
    /* eslint-disable-next-line no-param-reassign */
    subattr = subattr.replace(subattr[0], subattr[0].toUpperCase());
  }
  return ['Top', 'Right', 'Bottom', 'Left'].map(dir => styles[attr + dir + subattr]).join(' ');
}
function copyStyles(inputNode, hintNode) {
  if (!inputNode || !hintNode) {
    return;
  }
  const inputStyle = window.getComputedStyle(inputNode);

  /* eslint-disable no-param-reassign */
  hintNode.style.borderStyle = interpolateStyle(inputStyle, 'border', 'style');
  hintNode.style.borderWidth = interpolateStyle(inputStyle, 'border', 'width');
  hintNode.style.fontSize = inputStyle.fontSize;
  hintNode.style.height = inputStyle.height;
  hintNode.style.lineHeight = inputStyle.lineHeight;
  hintNode.style.margin = interpolateStyle(inputStyle, 'margin');
  hintNode.style.padding = interpolateStyle(inputStyle, 'padding');
  /* eslint-enable no-param-reassign */
}
function hintContainer(Input) {
  class HintedInput extends React.Component {
    constructor() {
      super(...arguments);
      _defineProperty(this, "hintRef", /*#__PURE__*/React.createRef());
      _defineProperty(this, "_handleKeyDown", e => {
        const {
          initialItem,
          onAdd,
          onKeyDown
        } = this.props;
        if (shouldSelectHint(e, this.props)) {
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
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flex: 1,
          height: '100%',
          position: 'relative'
        }
      }, /*#__PURE__*/React.createElement(Input, _extends({}, props, {
        onKeyDown: this._handleKeyDown,
        ref: forwardedRef
      })), /*#__PURE__*/React.createElement("input", {
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
  _defineProperty(HintedInput, "displayName", "hintContainer(" + getDisplayName(Input) + ")");
  const HintedInputWithContext = withContext(HintedInput, ['hintText', 'initialItem', 'inputNode', 'onAdd', 'selectHintOnEnter']);
  return /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(HintedInputWithContext, _extends({}, props, {
    forwardedRef: ref
  })));
}
export default hintContainer;