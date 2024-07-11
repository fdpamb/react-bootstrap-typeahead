"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _lodash = _interopRequireDefault(require("lodash.debounce"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _Typeahead = _interopRequireDefault(require("../core/Typeahead"));
var _propTypes2 = require("../propTypes");
var _utils = require("../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const propTypes = {
  /**
   * Delay, in milliseconds, before performing search.
   */
  delay: _propTypes.default.number,
  /**
   * Whether or not a request is currently pending. Necessary for the
   * container to know when new results are available.
   */
  isLoading: _propTypes.default.bool.isRequired,
  /**
   * Number of input characters that must be entered before showing results.
   */
  minLength: _propTypes.default.number,
  /**
   * Callback to perform when the search is executed.
   */
  onSearch: _propTypes.default.func.isRequired,
  /**
   * Options to be passed to the typeahead. Will typically be the query
   * results, but can also be initial default options.
   */
  options: _propTypes.default.arrayOf(_propTypes2.optionType),
  /**
   * Message displayed in the menu when there is no user input.
   */
  promptText: _propTypes.default.node,
  /**
   * Message displayed in the menu while the request is pending.
   */
  searchText: _propTypes.default.node,
  /**
   * Whether or not the component should cache query results.
   */
  useCache: _propTypes.default.bool
};
const defaultProps = {
  delay: 200,
  minLength: 2,
  options: [],
  promptText: 'Type to search...',
  searchText: 'Searching...',
  useCache: true
};
/**
 * HoC that encapsulates common behavior and functionality for doing
 * asynchronous searches, including:
 *
 *  - Debouncing user input
 *  - Optional query caching
 *  - Search prompt and empty results behaviors
 */
const asyncContainer = TypeaheadComponent => {
  class AsyncTypeahead extends _react.default.Component {
    constructor() {
      super(...arguments);
      (0, _defineProperty2.default)(this, "_cache", {});
      (0, _defineProperty2.default)(this, "_handleSearchDebounced", void 0);
      (0, _defineProperty2.default)(this, "_query", this.props.defaultInputValue || '');
      (0, _defineProperty2.default)(this, "_getEmptyLabel", () => {
        const {
          emptyLabel,
          isLoading,
          promptText,
          searchText
        } = this.props;
        if (!this._query.length) {
          return promptText;
        }
        if (isLoading) {
          return searchText;
        }
        return emptyLabel;
      });
      (0, _defineProperty2.default)(this, "_handleInputChange", (query, e) => {
        this.props.onInputChange && this.props.onInputChange(query, e);
        this._handleSearchDebounced(query);
      });
      (0, _defineProperty2.default)(this, "_handleSearch", query => {
        this._query = query;
        const {
          minLength,
          onSearch,
          useCache
        } = this.props;
        if (!query || minLength && query.length < minLength) {
          return;
        }

        // Use cached results, if applicable.
        if (useCache && this._cache[query]) {
          // Re-render the component with the cached results.
          this.forceUpdate();
          return;
        }

        // Perform the search.
        onSearch(query);
      });
    }
    componentDidMount() {
      this._handleSearchDebounced = (0, _lodash.default)(this._handleSearch, this.props.delay);
    }
    componentDidUpdate(prevProps) {
      const {
        isLoading,
        options,
        useCache
      } = this.props;

      // Ensure that we've gone from a loading to a completed state. Otherwise
      // an empty response could get cached if the component updates during the
      // request (eg: if the parent re-renders for some reason).
      if (!isLoading && prevProps.isLoading && useCache) {
        this._cache[this._query] = options;
      }
    }
    componentWillUnmount() {
      this._cache = {};
      this._query = '';
      this._handleSearchDebounced && this._handleSearchDebounced.cancel();
    }
    render() {
      const {
        allowNew,
        instanceRef,
        isLoading,
        options,
        useCache,
        ...props
      } = this.props;
      const cachedQuery = this._cache[this._query];
      return /*#__PURE__*/_react.default.createElement(TypeaheadComponent, (0, _extends2.default)({}, props, {
        allowNew:
        // Disable custom selections during a search unless
        // `allowNew` is a function.
        (0, _utils.isFunction)(allowNew) ? allowNew : allowNew && !isLoading,
        emptyLabel: this._getEmptyLabel(),
        isLoading: isLoading,
        onInputChange: this._handleInputChange,
        options: useCache && cachedQuery ? cachedQuery : options,
        ref: instanceRef
      }));
    }
  }
  (0, _defineProperty2.default)(AsyncTypeahead, "displayName", "asyncContainer(" + (0, _utils.getDisplayName)(_Typeahead.default) + ")");
  (0, _defineProperty2.default)(AsyncTypeahead, "propTypes", propTypes);
  (0, _defineProperty2.default)(AsyncTypeahead, "defaultProps", defaultProps);
  return /*#__PURE__*/(0, _react.forwardRef)((props, ref) => /*#__PURE__*/_react.default.createElement(AsyncTypeahead, (0, _extends2.default)({}, props, {
    instanceRef: ref
  })));
};
var _default = exports.default = asyncContainer;