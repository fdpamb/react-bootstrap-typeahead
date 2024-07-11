"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearTypeahead = clearTypeahead;
exports.default = void 0;
exports.getInitialState = getInitialState;
exports.hideMenu = hideMenu;
exports.toggleMenu = toggleMenu;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _fastDeepEqual = _interopRequireDefault(require("fast-deep-equal"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _TypeaheadManager = _interopRequireDefault(require("./TypeaheadManager"));
var _propTypes2 = require("../propTypes");
var _utils = require("../utils");
var _constants = require("../constants");
const propTypes = {
  /**
   * Allows the creation of new selections on the fly. Note that any new items
   * will be added to the list of selections, but not the list of original
   * options unless handled as such by `Typeahead`'s parent.
   *
   * If a function is specified, it will be used to determine whether a custom
   * option should be included. The return value should be true or false.
   */
  allowNew: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func]),
  /**
   * Autofocus the input when the component initially mounts.
   */
  autoFocus: _propTypes.default.bool,
  /**
   * Whether or not filtering should be case-sensitive.
   */
  caseSensitive: (0, _propTypes2.checkPropType)(_propTypes.default.bool, _propTypes2.caseSensitiveType),
  /**
   * The initial value displayed in the text input.
   */
  defaultInputValue: (0, _propTypes2.checkPropType)(_propTypes.default.string, _propTypes2.defaultInputValueType),
  /**
   * Whether or not the menu is displayed upon initial render.
   */
  defaultOpen: _propTypes.default.bool,
  /**
   * Specify any pre-selected options. Use only if you want the component to
   * be uncontrolled.
   */
  defaultSelected: _propTypes.default.arrayOf(_propTypes2.optionType),
  /**
   * Either an array of fields in `option` to search, or a custom filtering
   * callback.
   */
  filterBy: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string.isRequired), _propTypes.default.func]),
  /**
   * Highlights the menu item if there is only one result and allows selecting
   * that item by hitting enter. Does not work with `allowNew`.
   */
  highlightOnlyResult: (0, _propTypes2.checkPropType)(_propTypes.default.bool, _propTypes2.highlightOnlyResultType),
  /**
   * An html id attribute, required for assistive technologies such as screen
   * readers.
   */
  id: (0, _propTypes2.checkPropType)(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]), _propTypes2.isRequiredForA11y),
  /**
   * Whether the filter should ignore accents and other diacritical marks.
   */
  ignoreDiacritics: (0, _propTypes2.checkPropType)(_propTypes.default.bool, _propTypes2.ignoreDiacriticsType),
  /**
   * Specify the option key to use for display or a function returning the
   * display string. By default, the selector will use the `label` key.
   */
  labelKey: (0, _propTypes2.checkPropType)(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]), _propTypes2.labelKeyType),
  /**
   * Maximum number of results to display by default. Mostly done for
   * performance reasons so as not to render too many DOM nodes in the case of
   * large data sets.
   */
  maxResults: _propTypes.default.number,
  /**
   * Number of input characters that must be entered before showing results.
   */
  minLength: _propTypes.default.number,
  /**
   * Whether or not multiple selections are allowed.
   */
  multiple: _propTypes.default.bool,
  /**
   * Invoked when the input is blurred. Receives an event.
   */
  onBlur: _propTypes.default.func,
  /**
   * Invoked whenever items are added or removed. Receives an array of the
   * selected options.
   */
  onChange: _propTypes.default.func,
  /**
   * Invoked when the input is focused. Receives an event.
   */
  onFocus: _propTypes.default.func,
  /**
   * Invoked when the input value changes. Receives the string value of the
   * input.
   */
  onInputChange: _propTypes.default.func,
  /**
   * Invoked when a key is pressed. Receives an event.
   */
  onKeyDown: _propTypes.default.func,
  /**
   * Invoked when menu visibility changes.
   */
  onMenuToggle: _propTypes.default.func,
  /**
   * Invoked when the pagination menu item is clicked. Receives an event.
   */
  onPaginate: _propTypes.default.func,
  /**
   * Whether or not the menu should be displayed. `undefined` allows the
   * component to control visibility, while `true` and `false` show and hide
   * the menu, respectively.
   */
  open: _propTypes.default.bool,
  /**
   * Full set of options, including pre-selected options. Must either be an
   * array of objects (recommended) or strings.
   */
  options: _propTypes.default.arrayOf(_propTypes2.optionType).isRequired,
  /**
   * Give user the ability to display additional results if the number of
   * results exceeds `maxResults`.
   */
  paginate: _propTypes.default.bool,
  /**
   * The selected option(s) displayed in the input. Use this prop if you want
   * to control the component via its parent.
   */
  selected: (0, _propTypes2.checkPropType)(_propTypes.default.arrayOf(_propTypes2.optionType), _propTypes2.selectedType),
  /**
   * Allows selecting the hinted result by pressing enter.
   */
  selectHintOnEnter: _propTypes.default.bool
};
const defaultProps = {
  allowNew: false,
  autoFocus: false,
  caseSensitive: false,
  defaultInputValue: '',
  defaultOpen: false,
  defaultSelected: [],
  filterBy: [],
  highlightOnlyResult: false,
  ignoreDiacritics: true,
  labelKey: _constants.DEFAULT_LABELKEY,
  maxResults: 100,
  minLength: 0,
  multiple: false,
  onBlur: _utils.noop,
  onFocus: _utils.noop,
  onInputChange: _utils.noop,
  onKeyDown: _utils.noop,
  onMenuToggle: _utils.noop,
  onPaginate: _utils.noop,
  paginate: true,
  selectHintOnEnter: false
};
function getInitialState(props) {
  const {
    defaultInputValue,
    defaultOpen,
    defaultSelected,
    maxResults,
    multiple
  } = props;
  let selected = props.selected ? props.selected.slice() : defaultSelected.slice();
  let text = defaultInputValue;
  if (!multiple && selected.length) {
    // Set the text if an initial selection is passed in.
    text = (0, _utils.getOptionLabel)((0, _utils.head)(selected), props.labelKey);
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
    selected,
    showMenu: defaultOpen,
    shownResults: maxResults,
    text
  };
}
function clearTypeahead(state, props) {
  return {
    ...getInitialState(props),
    isFocused: state.isFocused,
    selected: [],
    text: ''
  };
}
function hideMenu(state, props) {
  const {
    activeIndex,
    activeItem,
    initialItem,
    shownResults
  } = getInitialState(props);
  return {
    activeIndex,
    activeItem,
    initialItem,
    showMenu: false,
    shownResults
  };
}
function toggleMenu(state, props) {
  return state.showMenu ? hideMenu(state, props) : {
    showMenu: true
  };
}
class Typeahead extends _react.default.Component {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "state", getInitialState(this.props));
    (0, _defineProperty2.default)(this, "inputNode", void 0);
    (0, _defineProperty2.default)(this, "isMenuShown", false);
    // Keeps track of actual items displayed in the menu, after sorting,
    // truncating, grouping, etc.
    (0, _defineProperty2.default)(this, "items", []);
    (0, _defineProperty2.default)(this, "blur", () => {
      this.inputNode && this.inputNode.blur();
      this.hideMenu();
    });
    (0, _defineProperty2.default)(this, "clear", () => {
      this.setState(clearTypeahead);
    });
    (0, _defineProperty2.default)(this, "focus", () => {
      this.inputNode && this.inputNode.focus();
    });
    (0, _defineProperty2.default)(this, "getInput", () => {
      return this.inputNode;
    });
    /**
     * For backwards compatibility...
     */
    (0, _defineProperty2.default)(this, "getInstance", () => {
      (0, _utils.warn)(false, 'The `getInstance` method is deprecated. You can now access instance ' + 'methods directly on the ref.');
      return this;
    });
    (0, _defineProperty2.default)(this, "inputRef", inputNode => {
      this.inputNode = inputNode;
    });
    (0, _defineProperty2.default)(this, "setItem", (item, position) => {
      this.items[position] = item;
    });
    (0, _defineProperty2.default)(this, "hideMenu", () => {
      this.setState(hideMenu);
    });
    (0, _defineProperty2.default)(this, "toggleMenu", () => {
      this.setState(toggleMenu);
    });
    (0, _defineProperty2.default)(this, "_handleActiveIndexChange", activeIndex => {
      this.setState(state => ({
        activeIndex,
        activeItem: activeIndex === -1 ? null : state.activeItem
      }));
    });
    (0, _defineProperty2.default)(this, "_handleActiveItemChange", activeItem => {
      // Don't update the active item if it hasn't changed.
      if (!(0, _fastDeepEqual.default)(activeItem, this.state.activeItem)) {
        this.setState({
          activeItem
        });
      }
    });
    (0, _defineProperty2.default)(this, "_handleBlur", e => {
      e.persist();
      this.setState({
        isFocused: false
      }, () => this.props.onBlur(e));
    });
    (0, _defineProperty2.default)(this, "_handleChange", selected => {
      this.props.onChange && this.props.onChange(selected);
    });
    (0, _defineProperty2.default)(this, "_handleClear", () => {
      this.setState(clearTypeahead, () => this._handleChange([]));
    });
    (0, _defineProperty2.default)(this, "_handleFocus", e => {
      e.persist();
      this.setState({
        isFocused: true,
        showMenu: true
      }, () => this.props.onFocus(e));
    });
    (0, _defineProperty2.default)(this, "_handleInitialItemChange", initialItem => {
      // Don't update the initial item if it hasn't changed.
      if (!(0, _fastDeepEqual.default)(initialItem, this.state.initialItem)) {
        this.setState({
          initialItem
        });
      }
    });
    (0, _defineProperty2.default)(this, "_handleInputChange", e => {
      e.persist();
      const text = e.currentTarget.value;
      const {
        multiple,
        onInputChange
      } = this.props;

      // Clear selections when the input value changes in single-select mode.
      const shouldClearSelections = this.state.selected.length && !multiple;
      this.setState((state, props) => {
        const {
          activeIndex,
          activeItem,
          shownResults
        } = getInitialState(props);
        return {
          activeIndex,
          activeItem,
          selected: shouldClearSelections ? [] : state.selected,
          showMenu: true,
          shownResults,
          text
        };
      }, () => {
        onInputChange(text, e);
        shouldClearSelections && this._handleChange([]);
      });
    });
    (0, _defineProperty2.default)(this, "_handleKeyDown", e => {
      const {
        activeItem
      } = this.state;

      // Skip most actions when the menu is hidden.
      if (!this.isMenuShown) {
        if (e.keyCode === _constants.UP || e.keyCode === _constants.DOWN) {
          this.setState({
            showMenu: true
          });
        }
        this.props.onKeyDown(e);
        return;
      }
      switch (e.keyCode) {
        case _constants.UP:
        case _constants.DOWN:
          // Prevent input cursor from going to the beginning when pressing up.
          e.preventDefault();
          this._handleActiveIndexChange((0, _utils.getUpdatedActiveIndex)(this.state.activeIndex, e.keyCode, this.items));
          break;
        case _constants.RETURN:
          // Prevent form submission while menu is open.
          e.preventDefault();
          activeItem && this._handleMenuItemSelect(activeItem, e);
          break;
        case _constants.ESC:
        case _constants.TAB:
          // ESC simply hides the menu. TAB will blur the input and move focus to
          // the next item; hide the menu so it doesn't gain focus.
          this.hideMenu();
          break;
        default:
          break;
      }
      this.props.onKeyDown(e);
    });
    (0, _defineProperty2.default)(this, "_handleMenuItemSelect", (option, e) => {
      if (option.paginationOption) {
        this._handlePaginate(e);
      } else {
        this._handleSelectionAdd(option);
      }
    });
    (0, _defineProperty2.default)(this, "_handlePaginate", e => {
      e.persist();
      this.setState((state, props) => ({
        shownResults: state.shownResults + props.maxResults
      }), () => this.props.onPaginate(e, this.state.shownResults));
    });
    (0, _defineProperty2.default)(this, "_handleSelectionAdd", option => {
      const {
        multiple,
        labelKey
      } = this.props;
      let selected;
      let selection = option;
      let text;

      // Add a unique id to the custom selection. Avoid doing this in `render` so
      // the id doesn't increment every time.
      if (!(0, _utils.isString)(selection) && selection.customOption) {
        selection = {
          ...selection,
          id: (0, _utils.uniqueId)('new-id-')
        };
      }
      if (multiple) {
        // If multiple selections are allowed, add the new selection to the
        // existing selections.
        selected = this.state.selected.concat(selection);
        text = '';
      } else {
        // If only a single selection is allowed, replace the existing selection
        // with the new one.
        selected = [selection];
        text = (0, _utils.getOptionLabel)(selection, labelKey);
      }
      this.setState((state, props) => ({
        ...hideMenu(state, props),
        initialItem: selection,
        selected,
        text
      }), () => this._handleChange(selected));
    });
    (0, _defineProperty2.default)(this, "_handleSelectionRemove", selection => {
      const selected = this.state.selected.filter(option => !(0, _fastDeepEqual.default)(option, selection));

      // Make sure the input stays focused after the item is removed.
      this.focus();
      this.setState((state, props) => ({
        ...hideMenu(state, props),
        selected
      }), () => this._handleChange(selected));
    });
  }
  componentDidMount() {
    this.props.autoFocus && this.focus();
  }

  /* eslint-disable-next-line camelcase */
  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      labelKey,
      multiple,
      selected
    } = nextProps;
    (0, _utils.validateSelectedPropChange)(selected, this.props.selected);
    if (multiple !== this.props.multiple) {
      this.setState({
        text: ''
      });
    }

    // If new selections are passed via props, treat as a controlled input.
    if (selected && !(0, _fastDeepEqual.default)(selected, this.state.selected)) {
      this.setState({
        selected
      });
      if (multiple) {
        return;
      }
      this.setState({
        text: selected.length ? (0, _utils.getOptionLabel)((0, _utils.head)(selected), labelKey) : ''
      });
    }

    // Truncate selections when in single-select mode.
    let newSelected = selected || this.state.selected;
    if (!multiple && newSelected.length > 1) {
      newSelected = newSelected.slice(0, 1);
      this.setState({
        selected: newSelected,
        text: (0, _utils.getOptionLabel)((0, _utils.head)(newSelected), labelKey)
      });
    }
  }
  render() {
    // Omit `onChange` so Flow doesn't complain.
    const {
      onChange,
      ...otherProps
    } = this.props;
    const mergedPropsAndState = {
      ...otherProps,
      ...this.state
    };
    const {
      filterBy,
      labelKey,
      options,
      paginate,
      shownResults,
      text
    } = mergedPropsAndState;
    this.isMenuShown = (0, _utils.isShown)(mergedPropsAndState);
    this.items = []; // Reset items on re-render.

    let results = [];
    if (this.isMenuShown) {
      const cb = typeof filterBy === 'function' ? filterBy : _utils.defaultFilterBy;
      results = options.filter(option => cb(option, mergedPropsAndState));

      // This must come before results are truncated.
      const shouldPaginate = paginate && results.length > shownResults;

      // Truncate results if necessary.
      results = (0, _utils.getTruncatedOptions)(results, shownResults);

      // Add the custom option if necessary.
      if ((0, _utils.addCustomOption)(results, mergedPropsAndState)) {
        results.push({
          customOption: true,
          [(0, _utils.getStringLabelKey)(labelKey)]: text
        });
      }

      // Add the pagination item if necessary.
      if (shouldPaginate) {
        results.push({
          [(0, _utils.getStringLabelKey)(labelKey)]: '',
          paginationOption: true
        });
      }
    }
    return /*#__PURE__*/_react.default.createElement(_TypeaheadManager.default, (0, _extends2.default)({}, mergedPropsAndState, {
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
  }
}
(0, _defineProperty2.default)(Typeahead, "propTypes", propTypes);
(0, _defineProperty2.default)(Typeahead, "defaultProps", defaultProps);
var _default = exports.default = Typeahead;