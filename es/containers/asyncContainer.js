import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["allowNew", "instanceRef", "isLoading", "options", "useCache"];
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import Typeahead from '../core/Typeahead';
import { optionType } from '../propTypes';
import { getDisplayName, isFunction } from '../utils';
var propTypes = {
  /**
   * Delay, in milliseconds, before performing search.
   */
  delay: PropTypes.number,
  /**
   * Whether or not a request is currently pending. Necessary for the
   * container to know when new results are available.
   */
  isLoading: PropTypes.bool.isRequired,
  /**
   * Number of input characters that must be entered before showing results.
   */
  minLength: PropTypes.number,
  /**
   * Callback to perform when the search is executed.
   */
  onSearch: PropTypes.func.isRequired,
  /**
   * Options to be passed to the typeahead. Will typically be the query
   * results, but can also be initial default options.
   */
  options: PropTypes.arrayOf(optionType),
  /**
   * Message displayed in the menu when there is no user input.
   */
  promptText: PropTypes.node,
  /**
   * Message displayed in the menu while the request is pending.
   */
  searchText: PropTypes.node,
  /**
   * Whether or not the component should cache query results.
   */
  useCache: PropTypes.bool
};
var defaultProps = {
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
var asyncContainer = function asyncContainer(TypeaheadComponent) {
  var AsyncTypeahead = /*#__PURE__*/function (_React$Component) {
    function AsyncTypeahead() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _defineProperty(_this, "_cache", {});
      _defineProperty(_this, "_handleSearchDebounced", void 0);
      _defineProperty(_this, "_query", _this.props.defaultInputValue || '');
      _defineProperty(_this, "_getEmptyLabel", function () {
        var _this$props = _this.props,
          emptyLabel = _this$props.emptyLabel,
          isLoading = _this$props.isLoading,
          promptText = _this$props.promptText,
          searchText = _this$props.searchText;
        if (!_this._query.length) {
          return promptText;
        }
        if (isLoading) {
          return searchText;
        }
        return emptyLabel;
      });
      _defineProperty(_this, "_handleInputChange", function (query, e) {
        _this.props.onInputChange && _this.props.onInputChange(query, e);
        _this._handleSearchDebounced(query);
      });
      _defineProperty(_this, "_handleSearch", function (query) {
        _this._query = query;
        var _this$props2 = _this.props,
          minLength = _this$props2.minLength,
          onSearch = _this$props2.onSearch,
          useCache = _this$props2.useCache;
        if (!query || minLength && query.length < minLength) {
          return;
        }

        // Use cached results, if applicable.
        if (useCache && _this._cache[query]) {
          // Re-render the component with the cached results.
          _this.forceUpdate();
          return;
        }

        // Perform the search.
        onSearch(query);
      });
      return _this;
    }
    _inheritsLoose(AsyncTypeahead, _React$Component);
    var _proto = AsyncTypeahead.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this._handleSearchDebounced = debounce(this._handleSearch, this.props.delay);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
        isLoading = _this$props3.isLoading,
        options = _this$props3.options,
        useCache = _this$props3.useCache;

      // Ensure that we've gone from a loading to a completed state. Otherwise
      // an empty response could get cached if the component updates during the
      // request (eg: if the parent re-renders for some reason).
      if (!isLoading && prevProps.isLoading && useCache) {
        this._cache[this._query] = options;
      }
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this._cache = {};
      this._query = '';
      this._handleSearchDebounced && this._handleSearchDebounced.cancel();
    };
    _proto.render = function render() {
      var _this$props4 = this.props,
        allowNew = _this$props4.allowNew,
        instanceRef = _this$props4.instanceRef,
        isLoading = _this$props4.isLoading,
        options = _this$props4.options,
        useCache = _this$props4.useCache,
        props = _objectWithoutPropertiesLoose(_this$props4, _excluded);
      var cachedQuery = this._cache[this._query];
      return /*#__PURE__*/React.createElement(TypeaheadComponent, _extends({}, props, {
        allowNew:
        // Disable custom selections during a search unless
        // `allowNew` is a function.
        isFunction(allowNew) ? allowNew : allowNew && !isLoading,
        emptyLabel: this._getEmptyLabel(),
        isLoading: isLoading,
        onInputChange: this._handleInputChange,
        options: useCache && cachedQuery ? cachedQuery : options,
        ref: instanceRef
      }));
    };
    return AsyncTypeahead;
  }(React.Component);
  _defineProperty(AsyncTypeahead, "displayName", "asyncContainer(" + getDisplayName(Typeahead) + ")");
  _defineProperty(AsyncTypeahead, "propTypes", propTypes);
  _defineProperty(AsyncTypeahead, "defaultProps", defaultProps);
  return /*#__PURE__*/forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(AsyncTypeahead, _extends({}, props, {
      instanceRef: ref
    }));
  });
};
export default asyncContainer;