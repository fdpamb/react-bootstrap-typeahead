"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _RootCloseWrapper = _interopRequireDefault(require("react-overlays/RootCloseWrapper"));
var _Overlay = _interopRequireDefault(require("../core/Overlay"));
var _Typeahead = _interopRequireDefault(require("../core/Typeahead"));
var _ClearButton = _interopRequireDefault(require("./ClearButton.react"));
var _Loader = _interopRequireDefault(require("./Loader.react"));
var _Token = _interopRequireDefault(require("./Token.react"));
var _TypeaheadInputMulti = _interopRequireDefault(require("./TypeaheadInputMulti.react"));
var _TypeaheadInputSingle = _interopRequireDefault(require("./TypeaheadInputSingle.react"));
var _TypeaheadMenu = _interopRequireDefault(require("./TypeaheadMenu.react"));
var _utils = require("../utils");
var _propTypes2 = require("../propTypes");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const propTypes = {
  /**
   * Specifies the size of the input.
   */
  bsSize: (0, _propTypes2.deprecated)(_propTypes2.sizeType, 'Use the `size` prop instead.'),
  /**
   * Displays a button to clear the input when there are selections.
   */
  clearButton: _propTypes.default.bool,
  /**
   * Props to be applied directly to the input. `onBlur`, `onChange`,
   * `onFocus`, and `onKeyDown` are ignored.
   */
  inputProps: (0, _propTypes2.checkPropType)(_propTypes.default.object, _propTypes2.inputPropsType),
  /**
   * Bootstrap 4 only. Adds the `is-invalid` classname to the `form-control`.
   */
  isInvalid: _propTypes.default.bool,
  /**
   * Indicate whether an asynchronous data fetch is happening.
   */
  isLoading: _propTypes.default.bool,
  /**
   * Bootstrap 4 only. Adds the `is-valid` classname to the `form-control`.
   */
  isValid: _propTypes.default.bool,
  /**
   * Callback for custom input rendering.
   */
  renderInput: _propTypes.default.func,
  /**
   * Callback for custom menu rendering.
   */
  renderMenu: _propTypes.default.func,
  /**
   * Callback for custom menu rendering.
   */
  renderToken: _propTypes.default.func,
  /**
   * Specifies the size of the input.
   */
  size: _propTypes2.sizeType
};
const defaultProps = {
  clearButton: false,
  inputProps: {},
  isInvalid: false,
  isLoading: false,
  isValid: false,
  renderMenu: (results, menuProps, props) => /*#__PURE__*/_react.default.createElement(_TypeaheadMenu.default, (0, _extends2.default)({}, menuProps, {
    labelKey: props.labelKey,
    options: results,
    text: props.text
  })),
  renderToken: (option, props, idx) => /*#__PURE__*/_react.default.createElement(_Token.default, {
    disabled: props.disabled,
    key: idx,
    onRemove: props.onRemove,
    option: option,
    tabIndex: props.tabIndex
  }, (0, _utils.getOptionLabel)(option, props.labelKey))
};
function getOverlayProps(props) {
  return (0, _utils.pick)(props, ['align', 'dropup', 'flip', 'positionFixed']);
}
class TypeaheadComponent extends _react.default.Component {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "_referenceElement", void 0);
    (0, _defineProperty2.default)(this, "referenceElementRef", element => {
      // Use `findDOMNode` here because it's easier and less fragile than
      // forwarding refs to the input's container.

      // $FlowFixMe: `findDOMNode` could return Text or an Element.
      this._referenceElement = (0, _reactDom.findDOMNode)(element);
    });
    (0, _defineProperty2.default)(this, "_renderInput", (inputProps, props) => {
      const {
        bsSize,
        isInvalid,
        isValid,
        multiple,
        renderInput,
        renderToken,
        size
      } = this.props;
      if ((0, _utils.isFunction)(renderInput)) {
        return renderInput(inputProps, props);
      }
      const commonProps = {
        ...inputProps,
        isInvalid,
        isValid,
        size: bsSize || size
      };
      if (!multiple) {
        return /*#__PURE__*/_react.default.createElement(_TypeaheadInputSingle.default, commonProps);
      }
      const {
        labelKey,
        onRemove,
        selected
      } = props;
      return /*#__PURE__*/_react.default.createElement(_TypeaheadInputMulti.default, (0, _extends2.default)({}, commonProps, {
        selected: selected
      }), selected.map((option, idx) => renderToken(option, {
        ...commonProps,
        labelKey,
        onRemove
      }, idx)));
    });
    (0, _defineProperty2.default)(this, "_renderMenu", (results, menuProps, props) => {
      const {
        emptyLabel,
        id,
        maxHeight,
        newSelectionPrefix,
        paginationText,
        // $FlowFixMe: Flow can't seem to find `renderMenu`
        renderMenu,
        renderMenuItemChildren
      } = this.props;
      return renderMenu(results, {
        ...menuProps,
        emptyLabel,
        id,
        maxHeight,
        newSelectionPrefix,
        paginationText,
        renderMenuItemChildren
      }, props);
    });
    (0, _defineProperty2.default)(this, "_renderAux", _ref => {
      let {
        onClear,
        selected
      } = _ref;
      const {
        bsSize,
        clearButton,
        disabled,
        isLoading,
        size
      } = this.props;
      let content;
      if (isLoading) {
        content = /*#__PURE__*/_react.default.createElement(_Loader.default, {
          size: bsSize || size
        });
      } else if (clearButton && !disabled && selected.length) {
        content = /*#__PURE__*/_react.default.createElement(_ClearButton.default, {
          size: bsSize || size,
          onClick: onClear,
          onFocus: e => {
            // Prevent the main input from auto-focusing again.
            e.stopPropagation();
          },
          onMouseDown: _utils.preventInputBlur
        });
      }
      return content ? /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('rbt-aux', {
          'rbt-aux-lg': (0, _utils.isSizeLarge)(bsSize)
        })
      }, content) : null;
    });
  }
  render() {
    const {
      children,
      className,
      instanceRef,
      open,
      options,
      style
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_Typeahead.default, (0, _extends2.default)({}, this.props, {
      options: options,
      ref: instanceRef
    }), _ref2 => {
      let {
        getInputProps,
        ...props
      } = _ref2;
      const {
        hideMenu,
        isMenuShown,
        results
      } = props;
      const auxContent = this._renderAux(props);
      return /*#__PURE__*/_react.default.createElement(_RootCloseWrapper.default, {
        disabled: open || !isMenuShown,
        onRootClose: hideMenu
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('rbt', {
          'has-aux': !!auxContent
        }, className),
        style: {
          ...style,
          outline: 'none',
          position: 'relative'
        },
        tabIndex: -1
      }, this._renderInput({
        ...getInputProps(this.props.inputProps),
        ref: this.referenceElementRef
      }, props), /*#__PURE__*/_react.default.createElement(_Overlay.default, (0, _extends2.default)({}, getOverlayProps(this.props), {
        isMenuShown: isMenuShown,
        referenceElement: this._referenceElement
      }), menuProps => this._renderMenu(results, menuProps, props)), auxContent, (0, _utils.isFunction)(children) ? children(props) : children));
    });
  }
}
(0, _defineProperty2.default)(TypeaheadComponent, "propTypes", propTypes);
(0, _defineProperty2.default)(TypeaheadComponent, "defaultProps", defaultProps);
var _default = exports.default = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => /*#__PURE__*/_react.default.createElement(TypeaheadComponent, (0, _extends2.default)({}, props, {
  instanceRef: ref
})));