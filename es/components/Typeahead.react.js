import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
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
const propTypes = {
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
const defaultProps = {
  clearButton: false,
  inputProps: {},
  isInvalid: false,
  isLoading: false,
  isValid: false,
  renderMenu: (results, menuProps, props) => /*#__PURE__*/React.createElement(TypeaheadMenu, _extends({}, menuProps, {
    labelKey: props.labelKey,
    options: results,
    text: props.text
  })),
  renderToken: (option, props, idx) => /*#__PURE__*/React.createElement(Token, {
    disabled: props.disabled,
    key: idx,
    onRemove: props.onRemove,
    option: option,
    tabIndex: props.tabIndex
  }, getOptionLabel(option, props.labelKey))
};
function getOverlayProps(props) {
  return pick(props, ['align', 'dropup', 'flip', 'positionFixed']);
}
class TypeaheadComponent extends React.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "_referenceElement", void 0);
    _defineProperty(this, "referenceElementRef", element => {
      // Use `findDOMNode` here because it's easier and less fragile than
      // forwarding refs to the input's container.
      /* eslint-disable react/no-find-dom-node */
      // $FlowFixMe: `findDOMNode` could return Text or an Element.
      this._referenceElement = findDOMNode(element);
      /* eslint-enable react/no-find-dom-node */
    });
    _defineProperty(this, "_renderInput", (inputProps, props) => {
      const {
        bsSize,
        isInvalid,
        isValid,
        multiple,
        renderInput,
        renderToken,
        size
      } = this.props;
      if (isFunction(renderInput)) {
        return renderInput(inputProps, props);
      }
      const commonProps = {
        ...inputProps,
        isInvalid,
        isValid,
        size: bsSize || size
      };
      if (!multiple) {
        return /*#__PURE__*/React.createElement(TypeaheadInputSingle, commonProps);
      }
      const {
        labelKey,
        onRemove,
        selected
      } = props;
      return /*#__PURE__*/React.createElement(TypeaheadInputMulti, _extends({}, commonProps, {
        selected: selected
      }), selected.map((option, idx) => renderToken(option, {
        ...commonProps,
        labelKey,
        onRemove
      }, idx)));
    });
    _defineProperty(this, "_renderMenu", (results, menuProps, props) => {
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
    _defineProperty(this, "_renderAux", _ref => {
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
        content = /*#__PURE__*/React.createElement(Loader, {
          size: bsSize || size
        });
      } else if (clearButton && !disabled && selected.length) {
        content = /*#__PURE__*/React.createElement(ClearButton, {
          size: bsSize || size,
          onClick: onClear,
          onFocus: e => {
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
    return /*#__PURE__*/React.createElement(Typeahead, _extends({}, this.props, {
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
      return /*#__PURE__*/React.createElement(RootCloseWrapper, {
        disabled: open || !isMenuShown,
        onRootClose: hideMenu
      }, /*#__PURE__*/React.createElement("div", {
        className: cx('rbt', {
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
      }, props), /*#__PURE__*/React.createElement(Overlay, _extends({}, getOverlayProps(this.props), {
        isMenuShown: isMenuShown,
        referenceElement: this._referenceElement
      }), menuProps => this._renderMenu(results, menuProps, props)), auxContent, isFunction(children) ? children(props) : children));
    });
  }
}
_defineProperty(TypeaheadComponent, "propTypes", propTypes);
_defineProperty(TypeaheadComponent, "defaultProps", defaultProps);
export default /*#__PURE__*/forwardRef((props, ref) => /*#__PURE__*/React.createElement(TypeaheadComponent, _extends({}, props, {
  instanceRef: ref
})));