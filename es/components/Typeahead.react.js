import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
var _excluded = ["getInputProps"];
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { findDOMNode } from 'react-dom';
import RootCloseWrapper from "react-overlays/RootCloseWrapper";
import Overlay from '../core/Overlay';
import Typeahead from '../core/Typeahead';
import ClearButton from './ClearButton.react';
import Loader from './Loader.react';
import Token from './Token.react';
import TypeaheadInputMulti from './TypeaheadInputMulti.react';
import TypeaheadInputSingle from './TypeaheadInputSingle.react';
import TypeaheadMenu from './TypeaheadMenu.react';
import { getOptionLabel, isFunction, isSizeLarge, pick, preventInputBlur } from '../utils';
import { checkPropType, deprecated, inputPropsType, sizeType } from '../propTypes';
var propTypes = {
  /**
   * Specifies the size of the input.
   */
  bsSize: deprecated(sizeType, 'Use the `size` prop instead.'),
  /**
   * Displays a button to clear the input when there are selections.
   */
  clearButton: PropTypes.bool,
  /**
   * Props to be applied directly to the input. `onBlur`, `onChange`,
   * `onFocus`, and `onKeyDown` are ignored.
   */
  inputProps: checkPropType(PropTypes.object, inputPropsType),
  /**
   * Bootstrap 4 only. Adds the `is-invalid` classname to the `form-control`.
   */
  isInvalid: PropTypes.bool,
  /**
   * Indicate whether an asynchronous data fetch is happening.
   */
  isLoading: PropTypes.bool,
  /**
   * Bootstrap 4 only. Adds the `is-valid` classname to the `form-control`.
   */
  isValid: PropTypes.bool,
  /**
   * Callback for custom input rendering.
   */
  renderInput: PropTypes.func,
  /**
   * Callback for custom menu rendering.
   */
  renderMenu: PropTypes.func,
  /**
   * Callback for custom menu rendering.
   */
  renderToken: PropTypes.func,
  /**
   * Specifies the size of the input.
   */
  size: sizeType
};
var defaultProps = {
  clearButton: false,
  inputProps: {},
  isInvalid: false,
  isLoading: false,
  isValid: false,
  renderMenu: function renderMenu(results, menuProps, props) {
    return /*#__PURE__*/React.createElement(TypeaheadMenu, _extends({}, menuProps, {
      labelKey: props.labelKey,
      options: results,
      text: props.text
    }));
  },
  renderToken: function renderToken(option, props, idx) {
    return /*#__PURE__*/React.createElement(Token, {
      disabled: props.disabled,
      key: idx,
      onRemove: props.onRemove,
      option: option,
      tabIndex: props.tabIndex
    }, getOptionLabel(option, props.labelKey));
  }
};
function getOverlayProps(props) {
  return pick(props, ['align', 'dropup', 'flip', 'positionFixed']);
}
var TypeaheadComponent = /*#__PURE__*/function (_React$Component) {
  function TypeaheadComponent() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty(_this, "_referenceElement", void 0);
    _defineProperty(_this, "referenceElementRef", function (element) {
      // Use `findDOMNode` here because it's easier and less fragile than
      // forwarding refs to the input's container.
      /* eslint-disable react/no-find-dom-node */
      // $FlowFixMe: `findDOMNode` could return Text or an Element.
      _this._referenceElement = findDOMNode(element);
      /* eslint-enable react/no-find-dom-node */
    });
    _defineProperty(_this, "_renderInput", function (inputProps, props) {
      var _this$props = _this.props,
        bsSize = _this$props.bsSize,
        isInvalid = _this$props.isInvalid,
        isValid = _this$props.isValid,
        multiple = _this$props.multiple,
        renderInput = _this$props.renderInput,
        renderToken = _this$props.renderToken,
        size = _this$props.size;
      if (isFunction(renderInput)) {
        return renderInput(inputProps, props);
      }
      var commonProps = _extends({}, inputProps, {
        isInvalid: isInvalid,
        isValid: isValid,
        size: bsSize || size
      });
      if (!multiple) {
        return /*#__PURE__*/React.createElement(TypeaheadInputSingle, commonProps);
      }
      var labelKey = props.labelKey,
        onRemove = props.onRemove,
        selected = props.selected;
      return /*#__PURE__*/React.createElement(TypeaheadInputMulti, _extends({}, commonProps, {
        selected: selected
      }), selected.map(function (option, idx) {
        return renderToken(option, _extends({}, commonProps, {
          labelKey: labelKey,
          onRemove: onRemove
        }), idx);
      }));
    });
    _defineProperty(_this, "_renderMenu", function (results, menuProps, props) {
      var _this$props2 = _this.props,
        emptyLabel = _this$props2.emptyLabel,
        id = _this$props2.id,
        maxHeight = _this$props2.maxHeight,
        newSelectionPrefix = _this$props2.newSelectionPrefix,
        paginationText = _this$props2.paginationText,
        renderMenu = _this$props2.renderMenu,
        renderMenuItemChildren = _this$props2.renderMenuItemChildren;
      return renderMenu(results, _extends({}, menuProps, {
        emptyLabel: emptyLabel,
        id: id,
        maxHeight: maxHeight,
        newSelectionPrefix: newSelectionPrefix,
        paginationText: paginationText,
        renderMenuItemChildren: renderMenuItemChildren
      }), props);
    });
    _defineProperty(_this, "_renderAux", function (_ref) {
      var onClear = _ref.onClear,
        selected = _ref.selected;
      var _this$props3 = _this.props,
        bsSize = _this$props3.bsSize,
        clearButton = _this$props3.clearButton,
        disabled = _this$props3.disabled,
        isLoading = _this$props3.isLoading,
        size = _this$props3.size;
      var content;
      if (isLoading) {
        content = /*#__PURE__*/React.createElement(Loader, {
          size: bsSize || size
        });
      } else if (clearButton && !disabled && selected.length) {
        content = /*#__PURE__*/React.createElement(ClearButton, {
          size: bsSize || size,
          onClick: onClear,
          onFocus: function onFocus(e) {
            // Prevent the main input from auto-focusing again.
            e.stopPropagation();
          },
          onMouseDown: preventInputBlur
        });
      }
      return content ? /*#__PURE__*/React.createElement("div", {
        className: cx('rbt-aux', {
          'rbt-aux-lg': isSizeLarge(bsSize)
        })
      }, content) : null;
    });
    return _this;
  }
  _inheritsLoose(TypeaheadComponent, _React$Component);
  var _proto = TypeaheadComponent.prototype;
  _proto.render = function render() {
    var _this2 = this;
    var _this$props4 = this.props,
      children = _this$props4.children,
      className = _this$props4.className,
      instanceRef = _this$props4.instanceRef,
      open = _this$props4.open,
      options = _this$props4.options,
      style = _this$props4.style;
    return /*#__PURE__*/React.createElement(Typeahead, _extends({}, this.props, {
      options: options,
      ref: instanceRef
    }), function (_ref2) {
      var getInputProps = _ref2.getInputProps,
        props = _objectWithoutPropertiesLoose(_ref2, _excluded);
      var hideMenu = props.hideMenu,
        isMenuShown = props.isMenuShown,
        results = props.results;
      var auxContent = _this2._renderAux(props);
      return /*#__PURE__*/React.createElement(RootCloseWrapper, {
        disabled: open || !isMenuShown,
        onRootClose: hideMenu
      }, /*#__PURE__*/React.createElement("div", {
        className: cx('rbt', {
          'has-aux': !!auxContent
        }, className),
        style: _extends({}, style, {
          outline: 'none',
          position: 'relative'
        }),
        tabIndex: -1
      }, _this2._renderInput(_extends({}, getInputProps(_this2.props.inputProps), {
        ref: _this2.referenceElementRef
      }), props), /*#__PURE__*/React.createElement(Overlay, _extends({}, getOverlayProps(_this2.props), {
        isMenuShown: isMenuShown,
        referenceElement: _this2._referenceElement
      }), function (menuProps) {
        return _this2._renderMenu(results, menuProps, props);
      }), auxContent, isFunction(children) ? children(props) : children));
    });
  };
  return TypeaheadComponent;
}(React.Component);
_defineProperty(TypeaheadComponent, "propTypes", propTypes);
_defineProperty(TypeaheadComponent, "defaultProps", defaultProps);
export default /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(TypeaheadComponent, _extends({}, props, {
    instanceRef: ref
  }));
});