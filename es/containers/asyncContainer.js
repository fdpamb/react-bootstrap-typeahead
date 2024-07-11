import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import Typeahead from '../core/Typeahead';
import { optionType } from '../propTypes';
import { getDisplayName, isFunction } from '../utils';
const propTypes = {
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
  class AsyncTypeahead extends React.Component {
    constructor() {
      super(...arguments);
      _defineProperty(this, "_cache", {});
      _defineProperty(this, "_handleSearchDebounced", void 0);
      _defineProperty(this, "_query", this.props.defaultInputValue || '');
      _defineProperty(this, "_getEmptyLabel", () => {
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
      _defineProperty(this, "_handleInputChange", (query, e) => {
        this.props.onInputChange && this.props.onInputChange(query, e);
        this._handleSearchDebounced(query);
      });
      _defineProperty(this, "_handleSearch", query => {
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
      this._handleSearchDebounced = debounce(this._handleSearch, this.props.delay);
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
    }
  }
  _defineProperty(AsyncTypeahead, "displayName", "asyncContainer(" + getDisplayName(Typeahead) + ")");
  _defineProperty(AsyncTypeahead, "propTypes", propTypes);
  _defineProperty(AsyncTypeahead, "defaultProps", defaultProps);
  return /*#__PURE__*/forwardRef((props, ref) => /*#__PURE__*/React.createElement(AsyncTypeahead, _extends({}, props, {
    instanceRef: ref
  })));
};
export default asyncContainer;