import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
var _excluded = ["onChange"];
import isEqual from 'fast-deep-equal';
import PropTypes from 'prop-types';
import React from 'react';
import TypeaheadManager from './TypeaheadManager';
import { caseSensitiveType, checkPropType, defaultInputValueType, highlightOnlyResultType, ignoreDiacriticsType, isRequiredForA11y, labelKeyType, optionType, selectedType } from '../propTypes';
import { addCustomOption, defaultFilterBy, getOptionLabel, getStringLabelKey, getUpdatedActiveIndex, getTruncatedOptions, head, isShown, isString, noop, uniqueId, validateSelectedPropChange, warn } from '../utils';
import { DEFAULT_LABELKEY, DOWN, ESC, RETURN, TAB, UP } from '../constants';
var propTypes = {
  /**
   * Allows the creation of new selections on the fly. Note that any new items
   * will be added to the list of selections, but not the list of original
   * options unless handled as such by `Typeahead`'s parent.
   *
   * If a function is specified, it will be used to determine whether a custom
   * option should be included. The return value should be true or false.
   */
  allowNew: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  /**
   * Autofocus the input when the component initially mounts.
   */
  autoFocus: PropTypes.bool,
  /**
   * Whether or not filtering should be case-sensitive.
   */
  caseSensitive: checkPropType(PropTypes.bool, caseSensitiveType),
  /**
   * The initial value displayed in the text input.
   */
  defaultInputValue: checkPropType(PropTypes.string, defaultInputValueType),
  /**
   * Whether or not the menu is displayed upon initial render.
   */
  defaultOpen: PropTypes.bool,
  /**
   * Specify any pre-selected options. Use only if you want the component to
   * be uncontrolled.
   */
  defaultSelected: PropTypes.arrayOf(optionType),
  /**
   * Either an array of fields in `option` to search, or a custom filtering
   * callback.
   */
  filterBy: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string.isRequired), PropTypes.func]),
  /**
   * Highlights the menu item if there is only one result and allows selecting
   * that item by hitting enter. Does not work with `allowNew`.
   */
  highlightOnlyResult: checkPropType(PropTypes.bool, highlightOnlyResultType),
  /**
   * An html id attribute, required for assistive technologies such as screen
   * readers.
   */
  id: checkPropType(PropTypes.oneOfType([PropTypes.number, PropTypes.string]), isRequiredForA11y),
  /**
   * Whether the filter should ignore accents and other diacritical marks.
   */
  ignoreDiacritics: checkPropType(PropTypes.bool, ignoreDiacriticsType),
  /**
   * Specify the option key to use for display or a function returning the
   * display string. By default, the selector will use the `label` key.
   */
  labelKey: checkPropType(PropTypes.oneOfType([PropTypes.string, PropTypes.func]), labelKeyType),
  /**
   * Maximum number of results to display by default. Mostly done for
   * performance reasons so as not to render too many DOM nodes in the case of
   * large data sets.
   */
  maxResults: PropTypes.number,
  /**
   * Number of input characters that must be entered before showing results.
   */
  minLength: PropTypes.number,
  /**
   * Whether or not multiple selections are allowed.
   */
  multiple: PropTypes.bool,
  /**
   * Invoked when the input is blurred. Receives an event.
   */
  onBlur: PropTypes.func,
  /**
   * Invoked whenever items are added or removed. Receives an array of the
   * selected options.
   */
  onChange: PropTypes.func,
  /**
   * Invoked when the input is focused. Receives an event.
   */
  onFocus: PropTypes.func,
  /**
   * Invoked when the input value changes. Receives the string value of the
   * input.
   */
  onInputChange: PropTypes.func,
  /**
   * Invoked when a key is pressed. Receives an event.
   */
  onKeyDown: PropTypes.func,
  /**
   * Invoked when menu visibility changes.
   */
  onMenuToggle: PropTypes.func,
  /**
   * Invoked when the pagination menu item is clicked. Receives an event.
   */
  onPaginate: PropTypes.func,
  /**
   * Whether or not the menu should be displayed. `undefined` allows the
   * component to control visibility, while `true` and `false` show and hide
   * the menu, respectively.
   */
  open: PropTypes.bool,
  /**
   * Full set of options, including pre-selected options. Must either be an
   * array of objects (recommended) or strings.
   */
  options: PropTypes.arrayOf(optionType).isRequired,
  /**
   * Give user the ability to display additional results if the number of
   * results exceeds `maxResults`.
   */
  paginate: PropTypes.bool,
  /**
   * The selected option(s) displayed in the input. Use this prop if you want
   * to control the component via its parent.
   */
  selected: checkPropType(PropTypes.arrayOf(optionType), selectedType),
  /**
   * Allows selecting the hinted result by pressing enter.
   */
  selectHintOnEnter: PropTypes.bool
};
var defaultProps = {
  allowNew: false,
  autoFocus: false,
  caseSensitive: false,
  defaultInputValue: '',
  defaultOpen: false,
  defaultSelected: [],
  filterBy: [],
  highlightOnlyResult: false,
  ignoreDiacritics: true,
  labelKey: DEFAULT_LABELKEY,
  maxResults: 100,
  minLength: 0,
  multiple: false,
  onBlur: noop,
  onFocus: noop,
  onInputChange: noop,
  onKeyDown: noop,
  onMenuToggle: noop,
  onPaginate: noop,
  paginate: true,
  selectHintOnEnter: false
};
export function getInitialState(props) {
  var defaultInputValue = props.defaultInputValue,
    defaultOpen = props.defaultOpen,
    defaultSelected = props.defaultSelected,
    maxResults = props.maxResults,
    multiple = props.multiple;
  var selected = props.selected ? props.selected.slice() : defaultSelected.slice();
  var text = defaultInputValue;
  if (!multiple && selected.length) {
    // Set the text if an initial selection is passed in.
    text = getOptionLabel(head(selected), props.labelKey);
    if (selected.length > 1) {
      // Limit to 1 selection in single-select mode.
      selected = selected.slice(0, 1);
    }
  }
  return {
    activeIndex: -1,
    activeItem: null,
    initialItem: null,
    isFocused: false,
    selected: selected,
    showMenu: defaultOpen,
    shownResults: maxResults,
    text: text
  };
}
export function clearTypeahead(state, props) {
  return _extends({}, getInitialState(props), {
    isFocused: state.isFocused,
    selected: [],
    text: ''
  });
}
export function hideMenu(state, props) {
  var _getInitialState = getInitialState(props),
    activeIndex = _getInitialState.activeIndex,
    activeItem = _getInitialState.activeItem,
    initialItem = _getInitialState.initialItem,
    shownResults = _getInitialState.shownResults;
  return {
    activeIndex: activeIndex,
    activeItem: activeItem,
    initialItem: initialItem,
    showMenu: false,
    shownResults: shownResults
  };
}
export function toggleMenu(state, props) {
  return state.showMenu ? hideMenu(state, props) : {
    showMenu: true
  };
}
var Typeahead = /*#__PURE__*/function (_React$Component) {
  function Typeahead() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty(_this, "state", getInitialState(_this.props));
    _defineProperty(_this, "inputNode", void 0);
    _defineProperty(_this, "isMenuShown", false);
    // Keeps track of actual items displayed in the menu, after sorting,
    // truncating, grouping, etc.
    _defineProperty(_this, "items", []);
    _defineProperty(_this, "blur", function () {
      _this.inputNode && _this.inputNode.blur();
      _this.hideMenu();
    });
    _defineProperty(_this, "clear", function () {
      _this.setState(clearTypeahead);
    });
    _defineProperty(_this, "focus", function () {
      _this.inputNode && _this.inputNode.focus();
    });
    _defineProperty(_this, "getInput", function () {
      return _this.inputNode;
    });
    /**
     * For backwards compatibility...
     */
    _defineProperty(_this, "getInstance", function () {
      warn(false, 'The `getInstance` method is deprecated. You can now access instance ' + 'methods directly on the ref.');
      return _this;
    });
    _defineProperty(_this, "inputRef", function (inputNode) {
      _this.inputNode = inputNode;
    });
    _defineProperty(_this, "setItem", function (item, position) {
      _this.items[position] = item;
    });
    _defineProperty(_this, "hideMenu", function () {
      _this.setState(hideMenu);
    });
    _defineProperty(_this, "toggleMenu", function () {
      _this.setState(toggleMenu);
    });
    _defineProperty(_this, "_handleActiveIndexChange", function (activeIndex) {
      _this.setState(function (state) {
        return {
          activeIndex: activeIndex,
          activeItem: activeIndex === -1 ? null : state.activeItem
        };
      });
    });
    _defineProperty(_this, "_handleActiveItemChange", function (activeItem) {
      // Don't update the active item if it hasn't changed.
      if (!isEqual(activeItem, _this.state.activeItem)) {
        _this.setState({
          activeItem: activeItem
        });
      }
    });
    _defineProperty(_this, "_handleBlur", function (e) {
      e.persist();
      _this.setState({
        isFocused: false
      }, function () {
        return _this.props.onBlur(e);
      });
    });
    _defineProperty(_this, "_handleChange", function (selected) {
      _this.props.onChange && _this.props.onChange(selected);
    });
    _defineProperty(_this, "_handleClear", function () {
      _this.setState(clearTypeahead, function () {
        return _this._handleChange([]);
      });
    });
    _defineProperty(_this, "_handleFocus", function (e) {
      e.persist();
      _this.setState({
        isFocused: true,
        showMenu: true
      }, function () {
        return _this.props.onFocus(e);
      });
    });
    _defineProperty(_this, "_handleInitialItemChange", function (initialItem) {
      // Don't update the initial item if it hasn't changed.
      if (!isEqual(initialItem, _this.state.initialItem)) {
        _this.setState({
          initialItem: initialItem
        });
      }
    });
    _defineProperty(_this, "_handleInputChange", function (e) {
      e.persist();
      var text = e.currentTarget.value;
      var _this$props = _this.props,
        multiple = _this$props.multiple,
        onInputChange = _this$props.onInputChange;

      // Clear selections when the input value changes in single-select mode.
      var shouldClearSelections = _this.state.selected.length && !multiple;
      _this.setState(function (state, props) {
        var _getInitialState2 = getInitialState(props),
          activeIndex = _getInitialState2.activeIndex,
          activeItem = _getInitialState2.activeItem,
          shownResults = _getInitialState2.shownResults;
        return {
          activeIndex: activeIndex,
          activeItem: activeItem,
          selected: shouldClearSelections ? [] : state.selected,
          showMenu: true,
          shownResults: shownResults,
          text: text
        };
      }, function () {
        onInputChange(text, e);
        shouldClearSelections && _this._handleChange([]);
      });
    });
    _defineProperty(_this, "_handleKeyDown", function (e) {
      var activeItem = _this.state.activeItem;

      // Skip most actions when the menu is hidden.
      if (!_this.isMenuShown) {
        if (e.keyCode === UP || e.keyCode === DOWN) {
          _this.setState({
            showMenu: true
          });
        }
        _this.props.onKeyDown(e);
        return;
      }
      switch (e.keyCode) {
        case UP:
        case DOWN:
          // Prevent input cursor from going to the beginning when pressing up.
          e.preventDefault();
          _this._handleActiveIndexChange(getUpdatedActiveIndex(_this.state.activeIndex, e.keyCode, _this.items));
          break;
        case RETURN:
          // Prevent form submission while menu is open.
          e.preventDefault();
          activeItem && _this._handleMenuItemSelect(activeItem, e);
          break;
        case ESC:
        case TAB:
          // ESC simply hides the menu. TAB will blur the input and move focus to
          // the next item; hide the menu so it doesn't gain focus.
          _this.hideMenu();
          break;
        default:
          break;
      }
      _this.props.onKeyDown(e);
    });
    _defineProperty(_this, "_handleMenuItemSelect", function (option, e) {
      if (option.paginationOption) {
        _this._handlePaginate(e);
      } else {
        _this._handleSelectionAdd(option);
      }
    });
    _defineProperty(_this, "_handlePaginate", function (e) {
      e.persist();
      _this.setState(function (state, props) {
        return {
          shownResults: state.shownResults + props.maxResults
        };
      }, function () {
        return _this.props.onPaginate(e, _this.state.shownResults);
      });
    });
    _defineProperty(_this, "_handleSelectionAdd", function (option) {
      var _this$props2 = _this.props,
        multiple = _this$props2.multiple,
        labelKey = _this$props2.labelKey;
      var selected;
      var selection = option;
      var text;

      // Add a unique id to the custom selection. Avoid doing this in `render` so
      // the id doesn't increment every time.
      if (!isString(selection) && selection.customOption) {
        selection = _extends({}, selection, {
          id: uniqueId('new-id-')
        });
      }
      if (multiple) {
        // If multiple selections are allowed, add the new selection to the
        // existing selections.
        selected = _this.state.selected.concat(selection);
        text = '';
      } else {
        // If only a single selection is allowed, replace the existing selection
        // with the new one.
        selected = [selection];
        text = getOptionLabel(selection, labelKey);
      }
      _this.setState(function (state, props) {
        return _extends({}, hideMenu(state, props), {
          initialItem: selection,
          selected: selected,
          text: text
        });
      }, function () {
        return _this._handleChange(selected);
      });
    });
    _defineProperty(_this, "_handleSelectionRemove", function (selection) {
      var selected = _this.state.selected.filter(function (option) {
        return !isEqual(option, selection);
      });

      // Make sure the input stays focused after the item is removed.
      _this.focus();
      _this.setState(function (state, props) {
        return _extends({}, hideMenu(state, props), {
          selected: selected
        });
      }, function () {
        return _this._handleChange(selected);
      });
    });
    return _this;
  }
  _inheritsLoose(Typeahead, _React$Component);
  var _proto = Typeahead.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.props.autoFocus && this.focus();
  }

  /* eslint-disable-next-line camelcase */;
  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    var labelKey = nextProps.labelKey,
      multiple = nextProps.multiple,
      selected = nextProps.selected;
    validateSelectedPropChange(selected, this.props.selected);
    if (multiple !== this.props.multiple) {
      this.setState({
        text: ''
      });
    }

    // If new selections are passed via props, treat as a controlled input.
    if (selected && !isEqual(selected, this.state.selected)) {
      this.setState({
        selected: selected
      });
      if (multiple) {
        return;
      }
      this.setState({
        text: selected.length ? getOptionLabel(head(selected), labelKey) : ''
      });
    }

    // Truncate selections when in single-select mode.
    var newSelected = selected || this.state.selected;
    if (!multiple && newSelected.length > 1) {
      newSelected = newSelected.slice(0, 1);
      this.setState({
        selected: newSelected,
        text: getOptionLabel(head(newSelected), labelKey)
      });
    }
  };
  _proto.render = function render() {
    // Omit `onChange` so Flow doesn't complain.
    var _this$props3 = this.props,
      onChange = _this$props3.onChange,
      otherProps = _objectWithoutPropertiesLoose(_this$props3, _excluded);
    var mergedPropsAndState = _extends({}, otherProps, this.state);
    var filterBy = mergedPropsAndState.filterBy,
      labelKey = mergedPropsAndState.labelKey,
      options = mergedPropsAndState.options,
      paginate = mergedPropsAndState.paginate,
      shownResults = mergedPropsAndState.shownResults,
      text = mergedPropsAndState.text;
    this.isMenuShown = isShown(mergedPropsAndState);
    this.items = []; // Reset items on re-render.

    var results = [];
    if (this.isMenuShown) {
      var cb = typeof filterBy === 'function' ? filterBy : defaultFilterBy;
      results = options.filter(function (option) {
        return cb(option, mergedPropsAndState);
      });

      // This must come before results are truncated.
      var shouldPaginate = paginate && results.length > shownResults;

      // Truncate results if necessary.
      results = getTruncatedOptions(results, shownResults);

      // Add the custom option if necessary.
      if (addCustomOption(results, mergedPropsAndState)) {
        var _results$push;
        results.push((_results$push = {
          customOption: true
        }, _results$push[getStringLabelKey(labelKey)] = text, _results$push));
      }

      // Add the pagination item if necessary.
      if (shouldPaginate) {
        var _results$push2;
        results.push((_results$push2 = {}, _results$push2[getStringLabelKey(labelKey)] = '', _results$push2.paginationOption = true, _results$push2));
      }
    }
    return /*#__PURE__*/React.createElement(TypeaheadManager, _extends({}, mergedPropsAndState, {
      hideMenu: this.hideMenu,
      inputNode: this.inputNode,
      inputRef: this.inputRef,
      isMenuShown: this.isMenuShown,
      onActiveItemChange: this._handleActiveItemChange,
      onAdd: this._handleSelectionAdd,
      onBlur: this._handleBlur,
      onChange: this._handleInputChange,
      onClear: this._handleClear,
      onFocus: this._handleFocus,
      onHide: this.hideMenu,
      onInitialItemChange: this._handleInitialItemChange,
      onKeyDown: this._handleKeyDown,
      onMenuItemClick: this._handleMenuItemSelect,
      onRemove: this._handleSelectionRemove,
      results: results,
      setItem: this.setItem,
      toggleMenu: this.toggleMenu
    }));
  };
  return Typeahead;
}(React.Component);
_defineProperty(Typeahead, "propTypes", propTypes);
_defineProperty(Typeahead, "defaultProps", defaultProps);
export default Typeahead;