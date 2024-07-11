(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactBootstrapTypeahead = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, require$$0) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var React__namespace = /*#__PURE__*/_interopNamespace(React);
  var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
  var require$$0__namespace = /*#__PURE__*/_interopNamespace(require$$0);

  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return root.Date.now();
  };

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce$1(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          result = wait - timeSinceLastCall;

      return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var lodash_debounce = debounce$1;

  var debounce$2 = /*@__PURE__*/getDefaultExportFromCjs(lodash_debounce);

  var propTypes$b = {exports: {}};

  var reactIs = {exports: {}};

  var reactIs_development = {};

  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactIs_development;

  function requireReactIs_development () {
  	if (hasRequiredReactIs_development) return reactIs_development;
  	hasRequiredReactIs_development = 1;



  	{
  	  (function() {

  	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  	// nor polyfill, then a plain number is used for performance.
  	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  	// (unstable) APIs that have been removed. Can we remove the symbols?

  	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
  	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

  	function isValidElementType(type) {
  	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  	}

  	function typeOf(object) {
  	  if (typeof object === 'object' && object !== null) {
  	    var $$typeof = object.$$typeof;

  	    switch ($$typeof) {
  	      case REACT_ELEMENT_TYPE:
  	        var type = object.type;

  	        switch (type) {
  	          case REACT_ASYNC_MODE_TYPE:
  	          case REACT_CONCURRENT_MODE_TYPE:
  	          case REACT_FRAGMENT_TYPE:
  	          case REACT_PROFILER_TYPE:
  	          case REACT_STRICT_MODE_TYPE:
  	          case REACT_SUSPENSE_TYPE:
  	            return type;

  	          default:
  	            var $$typeofType = type && type.$$typeof;

  	            switch ($$typeofType) {
  	              case REACT_CONTEXT_TYPE:
  	              case REACT_FORWARD_REF_TYPE:
  	              case REACT_LAZY_TYPE:
  	              case REACT_MEMO_TYPE:
  	              case REACT_PROVIDER_TYPE:
  	                return $$typeofType;

  	              default:
  	                return $$typeof;
  	            }

  	        }

  	      case REACT_PORTAL_TYPE:
  	        return $$typeof;
  	    }
  	  }

  	  return undefined;
  	} // AsyncMode is deprecated along with isAsyncMode

  	var AsyncMode = REACT_ASYNC_MODE_TYPE;
  	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  	var ContextConsumer = REACT_CONTEXT_TYPE;
  	var ContextProvider = REACT_PROVIDER_TYPE;
  	var Element = REACT_ELEMENT_TYPE;
  	var ForwardRef = REACT_FORWARD_REF_TYPE;
  	var Fragment = REACT_FRAGMENT_TYPE;
  	var Lazy = REACT_LAZY_TYPE;
  	var Memo = REACT_MEMO_TYPE;
  	var Portal = REACT_PORTAL_TYPE;
  	var Profiler = REACT_PROFILER_TYPE;
  	var StrictMode = REACT_STRICT_MODE_TYPE;
  	var Suspense = REACT_SUSPENSE_TYPE;
  	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

  	function isAsyncMode(object) {
  	  {
  	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
  	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

  	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
  	    }
  	  }

  	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  	}
  	function isConcurrentMode(object) {
  	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  	}
  	function isContextConsumer(object) {
  	  return typeOf(object) === REACT_CONTEXT_TYPE;
  	}
  	function isContextProvider(object) {
  	  return typeOf(object) === REACT_PROVIDER_TYPE;
  	}
  	function isElement(object) {
  	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  	}
  	function isForwardRef(object) {
  	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
  	}
  	function isFragment(object) {
  	  return typeOf(object) === REACT_FRAGMENT_TYPE;
  	}
  	function isLazy(object) {
  	  return typeOf(object) === REACT_LAZY_TYPE;
  	}
  	function isMemo(object) {
  	  return typeOf(object) === REACT_MEMO_TYPE;
  	}
  	function isPortal(object) {
  	  return typeOf(object) === REACT_PORTAL_TYPE;
  	}
  	function isProfiler(object) {
  	  return typeOf(object) === REACT_PROFILER_TYPE;
  	}
  	function isStrictMode(object) {
  	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
  	}
  	function isSuspense(object) {
  	  return typeOf(object) === REACT_SUSPENSE_TYPE;
  	}

  	reactIs_development.AsyncMode = AsyncMode;
  	reactIs_development.ConcurrentMode = ConcurrentMode;
  	reactIs_development.ContextConsumer = ContextConsumer;
  	reactIs_development.ContextProvider = ContextProvider;
  	reactIs_development.Element = Element;
  	reactIs_development.ForwardRef = ForwardRef;
  	reactIs_development.Fragment = Fragment;
  	reactIs_development.Lazy = Lazy;
  	reactIs_development.Memo = Memo;
  	reactIs_development.Portal = Portal;
  	reactIs_development.Profiler = Profiler;
  	reactIs_development.StrictMode = StrictMode;
  	reactIs_development.Suspense = Suspense;
  	reactIs_development.isAsyncMode = isAsyncMode;
  	reactIs_development.isConcurrentMode = isConcurrentMode;
  	reactIs_development.isContextConsumer = isContextConsumer;
  	reactIs_development.isContextProvider = isContextProvider;
  	reactIs_development.isElement = isElement;
  	reactIs_development.isForwardRef = isForwardRef;
  	reactIs_development.isFragment = isFragment;
  	reactIs_development.isLazy = isLazy;
  	reactIs_development.isMemo = isMemo;
  	reactIs_development.isPortal = isPortal;
  	reactIs_development.isProfiler = isProfiler;
  	reactIs_development.isStrictMode = isStrictMode;
  	reactIs_development.isSuspense = isSuspense;
  	reactIs_development.isValidElementType = isValidElementType;
  	reactIs_development.typeOf = typeOf;
  	  })();
  	}
  	return reactIs_development;
  }

  var hasRequiredReactIs;

  function requireReactIs () {
  	if (hasRequiredReactIs) return reactIs.exports;
  	hasRequiredReactIs = 1;

  	{
  	  reactIs.exports = requireReactIs_development();
  	}
  	return reactIs.exports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */

  var objectAssign;
  var hasRequiredObjectAssign;

  function requireObjectAssign () {
  	if (hasRequiredObjectAssign) return objectAssign;
  	hasRequiredObjectAssign = 1;
  	/* eslint-disable no-unused-vars */
  	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  	var hasOwnProperty = Object.prototype.hasOwnProperty;
  	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  	function toObject(val) {
  		if (val === null || val === undefined) {
  			throw new TypeError('Object.assign cannot be called with null or undefined');
  		}

  		return Object(val);
  	}

  	function shouldUseNative() {
  		try {
  			if (!Object.assign) {
  				return false;
  			}

  			// Detect buggy property enumeration order in older V8 versions.

  			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  			test1[5] = 'de';
  			if (Object.getOwnPropertyNames(test1)[0] === '5') {
  				return false;
  			}

  			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  			var test2 = {};
  			for (var i = 0; i < 10; i++) {
  				test2['_' + String.fromCharCode(i)] = i;
  			}
  			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  				return test2[n];
  			});
  			if (order2.join('') !== '0123456789') {
  				return false;
  			}

  			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  			var test3 = {};
  			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  				test3[letter] = letter;
  			});
  			if (Object.keys(Object.assign({}, test3)).join('') !==
  					'abcdefghijklmnopqrst') {
  				return false;
  			}

  			return true;
  		} catch (err) {
  			// We don't expect any of the above to throw, but better to be safe.
  			return false;
  		}
  	}

  	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  		var from;
  		var to = toObject(target);
  		var symbols;

  		for (var s = 1; s < arguments.length; s++) {
  			from = Object(arguments[s]);

  			for (var key in from) {
  				if (hasOwnProperty.call(from, key)) {
  					to[key] = from[key];
  				}
  			}

  			if (getOwnPropertySymbols) {
  				symbols = getOwnPropertySymbols(from);
  				for (var i = 0; i < symbols.length; i++) {
  					if (propIsEnumerable.call(from, symbols[i])) {
  						to[symbols[i]] = from[symbols[i]];
  					}
  				}
  			}
  		}

  		return to;
  	};
  	return objectAssign;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret_1;
  var hasRequiredReactPropTypesSecret;

  function requireReactPropTypesSecret () {
  	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  	hasRequiredReactPropTypesSecret = 1;

  	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  	ReactPropTypesSecret_1 = ReactPropTypesSecret;
  	return ReactPropTypesSecret_1;
  }

  var has;
  var hasRequiredHas;

  function requireHas () {
  	if (hasRequiredHas) return has;
  	hasRequiredHas = 1;
  	has = Function.call.bind(Object.prototype.hasOwnProperty);
  	return has;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var checkPropTypes_1;
  var hasRequiredCheckPropTypes;

  function requireCheckPropTypes () {
  	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  	hasRequiredCheckPropTypes = 1;

  	var printWarning = function() {};

  	{
  	  var ReactPropTypesSecret = requireReactPropTypesSecret();
  	  var loggedTypeFailures = {};
  	  var has = requireHas();

  	  printWarning = function(text) {
  	    var message = 'Warning: ' + text;
  	    if (typeof console !== 'undefined') {
  	      console.error(message);
  	    }
  	    try {
  	      // --- Welcome to debugging React ---
  	      // This error was thrown as a convenience so that you can use this stack
  	      // to find the callsite that caused this warning to fire.
  	      throw new Error(message);
  	    } catch (x) { /**/ }
  	  };
  	}

  	/**
  	 * Assert that the values match with the type specs.
  	 * Error messages are memorized and will only be shown once.
  	 *
  	 * @param {object} typeSpecs Map of name to a ReactPropType
  	 * @param {object} values Runtime values that need to be type-checked
  	 * @param {string} location e.g. "prop", "context", "child context"
  	 * @param {string} componentName Name of the component for error messages.
  	 * @param {?Function} getStack Returns the component stack.
  	 * @private
  	 */
  	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  	  {
  	    for (var typeSpecName in typeSpecs) {
  	      if (has(typeSpecs, typeSpecName)) {
  	        var error;
  	        // Prop type validation may throw. In case they do, we don't want to
  	        // fail the render phase where it didn't fail before. So we log it.
  	        // After these have been cleaned up, we'll let them throw.
  	        try {
  	          // This is intentionally an invariant that gets caught. It's the same
  	          // behavior as without this statement except with a better message.
  	          if (typeof typeSpecs[typeSpecName] !== 'function') {
  	            var err = Error(
  	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
  	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
  	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
  	            );
  	            err.name = 'Invariant Violation';
  	            throw err;
  	          }
  	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
  	        } catch (ex) {
  	          error = ex;
  	        }
  	        if (error && !(error instanceof Error)) {
  	          printWarning(
  	            (componentName || 'React class') + ': type specification of ' +
  	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
  	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
  	            'You may have forgotten to pass an argument to the type checker ' +
  	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
  	            'shape all require an argument).'
  	          );
  	        }
  	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
  	          // Only monitor this failure once because there tends to be a lot of the
  	          // same error.
  	          loggedTypeFailures[error.message] = true;

  	          var stack = getStack ? getStack() : '';

  	          printWarning(
  	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
  	          );
  	        }
  	      }
  	    }
  	  }
  	}

  	/**
  	 * Resets warning cache when testing.
  	 *
  	 * @private
  	 */
  	checkPropTypes.resetWarningCache = function() {
  	  {
  	    loggedTypeFailures = {};
  	  }
  	};

  	checkPropTypes_1 = checkPropTypes;
  	return checkPropTypes_1;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var factoryWithTypeCheckers;
  var hasRequiredFactoryWithTypeCheckers;

  function requireFactoryWithTypeCheckers () {
  	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
  	hasRequiredFactoryWithTypeCheckers = 1;

  	var ReactIs = requireReactIs();
  	var assign = requireObjectAssign();

  	var ReactPropTypesSecret = requireReactPropTypesSecret();
  	var has = requireHas();
  	var checkPropTypes = requireCheckPropTypes();

  	var printWarning = function() {};

  	{
  	  printWarning = function(text) {
  	    var message = 'Warning: ' + text;
  	    if (typeof console !== 'undefined') {
  	      console.error(message);
  	    }
  	    try {
  	      // --- Welcome to debugging React ---
  	      // This error was thrown as a convenience so that you can use this stack
  	      // to find the callsite that caused this warning to fire.
  	      throw new Error(message);
  	    } catch (x) {}
  	  };
  	}

  	function emptyFunctionThatReturnsNull() {
  	  return null;
  	}

  	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  	  /* global Symbol */
  	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  	  /**
  	   * Returns the iterator method function contained on the iterable object.
  	   *
  	   * Be sure to invoke the function with the iterable as context:
  	   *
  	   *     var iteratorFn = getIteratorFn(myIterable);
  	   *     if (iteratorFn) {
  	   *       var iterator = iteratorFn.call(myIterable);
  	   *       ...
  	   *     }
  	   *
  	   * @param {?object} maybeIterable
  	   * @return {?function}
  	   */
  	  function getIteratorFn(maybeIterable) {
  	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  	    if (typeof iteratorFn === 'function') {
  	      return iteratorFn;
  	    }
  	  }

  	  /**
  	   * Collection of methods that allow declaration and validation of props that are
  	   * supplied to React components. Example usage:
  	   *
  	   *   var Props = require('ReactPropTypes');
  	   *   var MyArticle = React.createClass({
  	   *     propTypes: {
  	   *       // An optional string prop named "description".
  	   *       description: Props.string,
  	   *
  	   *       // A required enum prop named "category".
  	   *       category: Props.oneOf(['News','Photos']).isRequired,
  	   *
  	   *       // A prop named "dialog" that requires an instance of Dialog.
  	   *       dialog: Props.instanceOf(Dialog).isRequired
  	   *     },
  	   *     render: function() { ... }
  	   *   });
  	   *
  	   * A more formal specification of how these methods are used:
  	   *
  	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
  	   *   decl := ReactPropTypes.{type}(.isRequired)?
  	   *
  	   * Each and every declaration produces a function with the same signature. This
  	   * allows the creation of custom validation functions. For example:
  	   *
  	   *  var MyLink = React.createClass({
  	   *    propTypes: {
  	   *      // An optional string or URI prop named "href".
  	   *      href: function(props, propName, componentName) {
  	   *        var propValue = props[propName];
  	   *        if (propValue != null && typeof propValue !== 'string' &&
  	   *            !(propValue instanceof URI)) {
  	   *          return new Error(
  	   *            'Expected a string or an URI for ' + propName + ' in ' +
  	   *            componentName
  	   *          );
  	   *        }
  	   *      }
  	   *    },
  	   *    render: function() {...}
  	   *  });
  	   *
  	   * @internal
  	   */

  	  var ANONYMOUS = '<<anonymous>>';

  	  // Important!
  	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  	  var ReactPropTypes = {
  	    array: createPrimitiveTypeChecker('array'),
  	    bigint: createPrimitiveTypeChecker('bigint'),
  	    bool: createPrimitiveTypeChecker('boolean'),
  	    func: createPrimitiveTypeChecker('function'),
  	    number: createPrimitiveTypeChecker('number'),
  	    object: createPrimitiveTypeChecker('object'),
  	    string: createPrimitiveTypeChecker('string'),
  	    symbol: createPrimitiveTypeChecker('symbol'),

  	    any: createAnyTypeChecker(),
  	    arrayOf: createArrayOfTypeChecker,
  	    element: createElementTypeChecker(),
  	    elementType: createElementTypeTypeChecker(),
  	    instanceOf: createInstanceTypeChecker,
  	    node: createNodeChecker(),
  	    objectOf: createObjectOfTypeChecker,
  	    oneOf: createEnumTypeChecker,
  	    oneOfType: createUnionTypeChecker,
  	    shape: createShapeTypeChecker,
  	    exact: createStrictShapeTypeChecker,
  	  };

  	  /**
  	   * inlined Object.is polyfill to avoid requiring consumers ship their own
  	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  	   */
  	  /*eslint-disable no-self-compare*/
  	  function is(x, y) {
  	    // SameValue algorithm
  	    if (x === y) {
  	      // Steps 1-5, 7-10
  	      // Steps 6.b-6.e: +0 != -0
  	      return x !== 0 || 1 / x === 1 / y;
  	    } else {
  	      // Step 6.a: NaN == NaN
  	      return x !== x && y !== y;
  	    }
  	  }
  	  /*eslint-enable no-self-compare*/

  	  /**
  	   * We use an Error-like object for backward compatibility as people may call
  	   * PropTypes directly and inspect their output. However, we don't use real
  	   * Errors anymore. We don't inspect their stack anyway, and creating them
  	   * is prohibitively expensive if they are created too often, such as what
  	   * happens in oneOfType() for any type before the one that matched.
  	   */
  	  function PropTypeError(message, data) {
  	    this.message = message;
  	    this.data = data && typeof data === 'object' ? data: {};
  	    this.stack = '';
  	  }
  	  // Make `instanceof Error` still work for returned errors.
  	  PropTypeError.prototype = Error.prototype;

  	  function createChainableTypeChecker(validate) {
  	    {
  	      var manualPropTypeCallCache = {};
  	      var manualPropTypeWarningCount = 0;
  	    }
  	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
  	      componentName = componentName || ANONYMOUS;
  	      propFullName = propFullName || propName;

  	      if (secret !== ReactPropTypesSecret) {
  	        if (throwOnDirectAccess) {
  	          // New behavior only for users of `prop-types` package
  	          var err = new Error(
  	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
  	            'Use `PropTypes.checkPropTypes()` to call them. ' +
  	            'Read more at http://fb.me/use-check-prop-types'
  	          );
  	          err.name = 'Invariant Violation';
  	          throw err;
  	        } else if (typeof console !== 'undefined') {
  	          // Old behavior for people using React.PropTypes
  	          var cacheKey = componentName + ':' + propName;
  	          if (
  	            !manualPropTypeCallCache[cacheKey] &&
  	            // Avoid spamming the console because they are often not actionable except for lib authors
  	            manualPropTypeWarningCount < 3
  	          ) {
  	            printWarning(
  	              'You are manually calling a React.PropTypes validation ' +
  	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
  	              'and will throw in the standalone `prop-types` package. ' +
  	              'You may be seeing this warning due to a third-party PropTypes ' +
  	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
  	            );
  	            manualPropTypeCallCache[cacheKey] = true;
  	            manualPropTypeWarningCount++;
  	          }
  	        }
  	      }
  	      if (props[propName] == null) {
  	        if (isRequired) {
  	          if (props[propName] === null) {
  	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
  	          }
  	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
  	        }
  	        return null;
  	      } else {
  	        return validate(props, propName, componentName, location, propFullName);
  	      }
  	    }

  	    var chainedCheckType = checkType.bind(null, false);
  	    chainedCheckType.isRequired = checkType.bind(null, true);

  	    return chainedCheckType;
  	  }

  	  function createPrimitiveTypeChecker(expectedType) {
  	    function validate(props, propName, componentName, location, propFullName, secret) {
  	      var propValue = props[propName];
  	      var propType = getPropType(propValue);
  	      if (propType !== expectedType) {
  	        // `propValue` being instance of, say, date/regexp, pass the 'object'
  	        // check, but we can offer a more precise error message here rather than
  	        // 'of type `object`'.
  	        var preciseType = getPreciseType(propValue);

  	        return new PropTypeError(
  	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
  	          {expectedType: expectedType}
  	        );
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createAnyTypeChecker() {
  	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  	  }

  	  function createArrayOfTypeChecker(typeChecker) {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      if (typeof typeChecker !== 'function') {
  	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
  	      }
  	      var propValue = props[propName];
  	      if (!Array.isArray(propValue)) {
  	        var propType = getPropType(propValue);
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
  	      }
  	      for (var i = 0; i < propValue.length; i++) {
  	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
  	        if (error instanceof Error) {
  	          return error;
  	        }
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createElementTypeChecker() {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      var propValue = props[propName];
  	      if (!isValidElement(propValue)) {
  	        var propType = getPropType(propValue);
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createElementTypeTypeChecker() {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      var propValue = props[propName];
  	      if (!ReactIs.isValidElementType(propValue)) {
  	        var propType = getPropType(propValue);
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createInstanceTypeChecker(expectedClass) {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      if (!(props[propName] instanceof expectedClass)) {
  	        var expectedClassName = expectedClass.name || ANONYMOUS;
  	        var actualClassName = getClassName(props[propName]);
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createEnumTypeChecker(expectedValues) {
  	    if (!Array.isArray(expectedValues)) {
  	      {
  	        if (arguments.length > 1) {
  	          printWarning(
  	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
  	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
  	          );
  	        } else {
  	          printWarning('Invalid argument supplied to oneOf, expected an array.');
  	        }
  	      }
  	      return emptyFunctionThatReturnsNull;
  	    }

  	    function validate(props, propName, componentName, location, propFullName) {
  	      var propValue = props[propName];
  	      for (var i = 0; i < expectedValues.length; i++) {
  	        if (is(propValue, expectedValues[i])) {
  	          return null;
  	        }
  	      }

  	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
  	        var type = getPreciseType(value);
  	        if (type === 'symbol') {
  	          return String(value);
  	        }
  	        return value;
  	      });
  	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createObjectOfTypeChecker(typeChecker) {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      if (typeof typeChecker !== 'function') {
  	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
  	      }
  	      var propValue = props[propName];
  	      var propType = getPropType(propValue);
  	      if (propType !== 'object') {
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
  	      }
  	      for (var key in propValue) {
  	        if (has(propValue, key)) {
  	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
  	          if (error instanceof Error) {
  	            return error;
  	          }
  	        }
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createUnionTypeChecker(arrayOfTypeCheckers) {
  	    if (!Array.isArray(arrayOfTypeCheckers)) {
  	      printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') ;
  	      return emptyFunctionThatReturnsNull;
  	    }

  	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
  	      var checker = arrayOfTypeCheckers[i];
  	      if (typeof checker !== 'function') {
  	        printWarning(
  	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
  	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
  	        );
  	        return emptyFunctionThatReturnsNull;
  	      }
  	    }

  	    function validate(props, propName, componentName, location, propFullName) {
  	      var expectedTypes = [];
  	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
  	        var checker = arrayOfTypeCheckers[i];
  	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
  	        if (checkerResult == null) {
  	          return null;
  	        }
  	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
  	          expectedTypes.push(checkerResult.data.expectedType);
  	        }
  	      }
  	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
  	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createNodeChecker() {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      if (!isNode(props[propName])) {
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function invalidValidatorError(componentName, location, propFullName, key, type) {
  	    return new PropTypeError(
  	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
  	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
  	    );
  	  }

  	  function createShapeTypeChecker(shapeTypes) {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      var propValue = props[propName];
  	      var propType = getPropType(propValue);
  	      if (propType !== 'object') {
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
  	      }
  	      for (var key in shapeTypes) {
  	        var checker = shapeTypes[key];
  	        if (typeof checker !== 'function') {
  	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
  	        }
  	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
  	        if (error) {
  	          return error;
  	        }
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createStrictShapeTypeChecker(shapeTypes) {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      var propValue = props[propName];
  	      var propType = getPropType(propValue);
  	      if (propType !== 'object') {
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
  	      }
  	      // We need to check all keys in case some are required but missing from props.
  	      var allKeys = assign({}, props[propName], shapeTypes);
  	      for (var key in allKeys) {
  	        var checker = shapeTypes[key];
  	        if (has(shapeTypes, key) && typeof checker !== 'function') {
  	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
  	        }
  	        if (!checker) {
  	          return new PropTypeError(
  	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
  	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
  	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
  	          );
  	        }
  	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
  	        if (error) {
  	          return error;
  	        }
  	      }
  	      return null;
  	    }

  	    return createChainableTypeChecker(validate);
  	  }

  	  function isNode(propValue) {
  	    switch (typeof propValue) {
  	      case 'number':
  	      case 'string':
  	      case 'undefined':
  	        return true;
  	      case 'boolean':
  	        return !propValue;
  	      case 'object':
  	        if (Array.isArray(propValue)) {
  	          return propValue.every(isNode);
  	        }
  	        if (propValue === null || isValidElement(propValue)) {
  	          return true;
  	        }

  	        var iteratorFn = getIteratorFn(propValue);
  	        if (iteratorFn) {
  	          var iterator = iteratorFn.call(propValue);
  	          var step;
  	          if (iteratorFn !== propValue.entries) {
  	            while (!(step = iterator.next()).done) {
  	              if (!isNode(step.value)) {
  	                return false;
  	              }
  	            }
  	          } else {
  	            // Iterator will provide entry [k,v] tuples rather than values.
  	            while (!(step = iterator.next()).done) {
  	              var entry = step.value;
  	              if (entry) {
  	                if (!isNode(entry[1])) {
  	                  return false;
  	                }
  	              }
  	            }
  	          }
  	        } else {
  	          return false;
  	        }

  	        return true;
  	      default:
  	        return false;
  	    }
  	  }

  	  function isSymbol(propType, propValue) {
  	    // Native Symbol.
  	    if (propType === 'symbol') {
  	      return true;
  	    }

  	    // falsy value can't be a Symbol
  	    if (!propValue) {
  	      return false;
  	    }

  	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
  	    if (propValue['@@toStringTag'] === 'Symbol') {
  	      return true;
  	    }

  	    // Fallback for non-spec compliant Symbols which are polyfilled.
  	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
  	      return true;
  	    }

  	    return false;
  	  }

  	  // Equivalent of `typeof` but with special handling for array and regexp.
  	  function getPropType(propValue) {
  	    var propType = typeof propValue;
  	    if (Array.isArray(propValue)) {
  	      return 'array';
  	    }
  	    if (propValue instanceof RegExp) {
  	      // Old webkits (at least until Android 4.0) return 'function' rather than
  	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
  	      // passes PropTypes.object.
  	      return 'object';
  	    }
  	    if (isSymbol(propType, propValue)) {
  	      return 'symbol';
  	    }
  	    return propType;
  	  }

  	  // This handles more types than `getPropType`. Only used for error messages.
  	  // See `createPrimitiveTypeChecker`.
  	  function getPreciseType(propValue) {
  	    if (typeof propValue === 'undefined' || propValue === null) {
  	      return '' + propValue;
  	    }
  	    var propType = getPropType(propValue);
  	    if (propType === 'object') {
  	      if (propValue instanceof Date) {
  	        return 'date';
  	      } else if (propValue instanceof RegExp) {
  	        return 'regexp';
  	      }
  	    }
  	    return propType;
  	  }

  	  // Returns a string that is postfixed to a warning about an invalid type.
  	  // For example, "undefined" or "of type array"
  	  function getPostfixForTypeWarning(value) {
  	    var type = getPreciseType(value);
  	    switch (type) {
  	      case 'array':
  	      case 'object':
  	        return 'an ' + type;
  	      case 'boolean':
  	      case 'date':
  	      case 'regexp':
  	        return 'a ' + type;
  	      default:
  	        return type;
  	    }
  	  }

  	  // Returns class name of the object, if any.
  	  function getClassName(propValue) {
  	    if (!propValue.constructor || !propValue.constructor.name) {
  	      return ANONYMOUS;
  	    }
  	    return propValue.constructor.name;
  	  }

  	  ReactPropTypes.checkPropTypes = checkPropTypes;
  	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  	  ReactPropTypes.PropTypes = ReactPropTypes;

  	  return ReactPropTypes;
  	};
  	return factoryWithTypeCheckers;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    var ReactIs = requireReactIs();

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    propTypes$b.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
  }

  var propTypesExports = propTypes$b.exports;
  var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

  // do not edit .js files directly - edit src/index.jst



  var fastDeepEqual = function equal(a, b) {
    if (a === b) return true;

    if (a && b && typeof a == 'object' && typeof b == 'object') {
      if (a.constructor !== b.constructor) return false;

      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (!equal(a[i], b[i])) return false;
        return true;
      }



      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;

      for (i = length; i-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

      for (i = length; i-- !== 0;) {
        var key = keys[i];

        if (!equal(a[key], b[key])) return false;
      }

      return true;
    }

    // true if both NaN, false otherwise
    return a!==a && b!==b;
  };

  var isEqual$1 = /*@__PURE__*/getDefaultExportFromCjs(fastDeepEqual);

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var invariant = function(condition, format, a, b, c, d, e, f) {
    {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error(
          'Minified exception occurred; use the non-minified dev environment ' +
          'for the full error message and additional helpful warnings.'
        );
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(
          format.replace(/%s/g, function() { return args[argIndex++]; })
        );
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  };

  var invariant_1 = invariant;

  var invariant$1 = /*@__PURE__*/getDefaultExportFromCjs(invariant_1);

  /**
   * Common (non-printable) keycodes for `keydown` and `keyup` events. Note that
   * `keypress` handles things differently and may not return the same values.
   */
  const BACKSPACE = 8;
  const TAB = 9;
  const RETURN = 13;
  const ESC = 27;
  const UP = 38;
  const RIGHT = 39;
  const DOWN = 40;
  const DEFAULT_LABELKEY = 'label';
  const ALIGN = {
    JUSTIFY: 'justify',
    LEFT: 'left',
    RIGHT: 'right'
  };
  const SIZE = {
    LARGE: 'large',
    LG: 'lg',
    SM: 'sm',
    SMALL: 'small'
  };

  function getStringLabelKey(labelKey) {
    return typeof labelKey === 'string' ? labelKey : DEFAULT_LABELKEY;
  }

  let idCounter = 0;
  function head(arr) {
    return Array.isArray(arr) && arr.length ? arr[0] : undefined;
  }
  function isFunction(value) {
    return typeof value === 'function';
  }
  function isString(value) {
    return typeof value === 'string';
  }
  function noop() {}
  function pick(obj, keys) {
    const result = {};
    keys.forEach(k => {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        result[k] = obj[k];
      }
    });
    return result;
  }
  function uniqueId(prefix) {
    idCounter += 1;
    return (prefix == null ? '' : String(prefix)) + idCounter;
  }

  // Export for testing purposes.
  function valuesPolyfill(obj) {
    return Object.keys(obj).reduce((accum, key) => {
      if (Object.prototype.propertyIsEnumerable.call(obj, key)) {
        accum.push(obj[key]);
      }
      return accum;
    }, []);
  }
  function values(obj) {
    return isFunction(Object.values) ? Object.values(obj) : valuesPolyfill(obj);
  }

  /**
   * Retrieves the display string from an option. Options can be the string
   * themselves, or an object with a defined display string. Anything else throws
   * an error.
   */
  function getOptionLabel(option, labelKey) {
    // Handle internally created options first.
    if (!isString(option) && (option.paginationOption || option.customOption)) {
      return option[getStringLabelKey(labelKey)];
    }
    let optionLabel;
    if (isFunction(labelKey)) {
      optionLabel = labelKey(option);
    } else if (isString(option)) {
      optionLabel = option;
    } else {
      // `option` is an object and `labelKey` is a string.
      optionLabel = option[labelKey];
    }
    !isString(optionLabel) ? invariant$1(false, 'One or more options does not have a valid label string. Check the ' + '`labelKey` prop to ensure that it matches the correct option key and ' + 'provides a string for filtering and display.')  : void 0;
    return optionLabel;
  }

  function addCustomOption(results, props) {
    const {
      allowNew,
      labelKey,
      text
    } = props;
    if (!allowNew || !text.trim()) {
      return false;
    }

    // If the consumer has provided a callback, use that to determine whether or
    // not to add the custom option.
    if (typeof allowNew === 'function') {
      return allowNew(results, props);
    }

    // By default, don't add the custom option if there is an exact text match
    // with an existing option.
    return !results.some(o => getOptionLabel(o, labelKey) === text);
  }

  function getOptionProperty(option, key) {
    if (isString(option)) {
      return undefined;
    }
    return option[key];
  }

  /**
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * Taken from: http://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/18391901#18391901
   */
  const map = [{
    base: 'A',
    letters: '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'
  }, {
    base: 'AA',
    letters: '\uA732'
  }, {
    base: 'AE',
    letters: '\u00C6\u01FC\u01E2'
  }, {
    base: 'AO',
    letters: '\uA734'
  }, {
    base: 'AU',
    letters: '\uA736'
  }, {
    base: 'AV',
    letters: '\uA738\uA73A'
  }, {
    base: 'AY',
    letters: '\uA73C'
  }, {
    base: 'B',
    letters: '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'
  }, {
    base: 'C',
    letters: '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E'
  }, {
    base: 'D',
    letters: '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0'
  }, {
    base: 'DZ',
    letters: '\u01F1\u01C4'
  }, {
    base: 'Dz',
    letters: '\u01F2\u01C5'
  }, {
    base: 'E',
    letters: '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'
  }, {
    base: 'F',
    letters: '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B'
  }, {
    base: 'G',
    letters: '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'
  }, {
    base: 'H',
    letters: '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'
  }, {
    base: 'I',
    letters: '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'
  }, {
    base: 'J',
    letters: '\u004A\u24BF\uFF2A\u0134\u0248'
  }, {
    base: 'K',
    letters: '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'
  }, {
    base: 'L',
    letters: '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'
  }, {
    base: 'LJ',
    letters: '\u01C7'
  }, {
    base: 'Lj',
    letters: '\u01C8'
  }, {
    base: 'M',
    letters: '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'
  }, {
    base: 'N',
    letters: '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'
  }, {
    base: 'NJ',
    letters: '\u01CA'
  }, {
    base: 'Nj',
    letters: '\u01CB'
  }, {
    base: 'O',
    letters: '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'
  }, {
    base: 'OI',
    letters: '\u01A2'
  }, {
    base: 'OO',
    letters: '\uA74E'
  }, {
    base: 'OU',
    letters: '\u0222'
  }, {
    base: 'OE',
    letters: '\u008C\u0152'
  }, {
    base: 'oe',
    letters: '\u009C\u0153'
  }, {
    base: 'P',
    letters: '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'
  }, {
    base: 'Q',
    letters: '\u0051\u24C6\uFF31\uA756\uA758\u024A'
  }, {
    base: 'R',
    letters: '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'
  }, {
    base: 'S',
    letters: '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'
  }, {
    base: 'T',
    letters: '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'
  }, {
    base: 'TZ',
    letters: '\uA728'
  }, {
    base: 'U',
    letters: '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'
  }, {
    base: 'V',
    letters: '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'
  }, {
    base: 'VY',
    letters: '\uA760'
  }, {
    base: 'W',
    letters: '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'
  }, {
    base: 'X',
    letters: '\u0058\u24CD\uFF38\u1E8A\u1E8C'
  }, {
    base: 'Y',
    letters: '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'
  }, {
    base: 'Z',
    letters: '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'
  }, {
    base: 'a',
    letters: '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'
  }, {
    base: 'aa',
    letters: '\uA733'
  }, {
    base: 'ae',
    letters: '\u00E6\u01FD\u01E3'
  }, {
    base: 'ao',
    letters: '\uA735'
  }, {
    base: 'au',
    letters: '\uA737'
  }, {
    base: 'av',
    letters: '\uA739\uA73B'
  }, {
    base: 'ay',
    letters: '\uA73D'
  }, {
    base: 'b',
    letters: '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'
  }, {
    base: 'c',
    letters: '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184'
  }, {
    base: 'd',
    letters: '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'
  }, {
    base: 'dz',
    letters: '\u01F3\u01C6'
  }, {
    base: 'e',
    letters: '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'
  }, {
    base: 'f',
    letters: '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C'
  }, {
    base: 'g',
    letters: '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'
  }, {
    base: 'h',
    letters: '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'
  }, {
    base: 'hv',
    letters: '\u0195'
  }, {
    base: 'i',
    letters: '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'
  }, {
    base: 'j',
    letters: '\u006A\u24D9\uFF4A\u0135\u01F0\u0249'
  }, {
    base: 'k',
    letters: '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'
  }, {
    base: 'l',
    letters: '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'
  }, {
    base: 'lj',
    letters: '\u01C9'
  }, {
    base: 'm',
    letters: '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'
  }, {
    base: 'n',
    letters: '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5'
  }, {
    base: 'nj',
    letters: '\u01CC'
  }, {
    base: 'o',
    letters: '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'
  }, {
    base: 'oi',
    letters: '\u01A3'
  }, {
    base: 'ou',
    letters: '\u0223'
  }, {
    base: 'oo',
    letters: '\uA74F'
  }, {
    base: 'p',
    letters: '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'
  }, {
    base: 'q',
    letters: '\u0071\u24E0\uFF51\u024B\uA757\uA759'
  }, {
    base: 'r',
    letters: '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'
  }, {
    base: 's',
    letters: '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'
  }, {
    base: 't',
    letters: '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'
  }, {
    base: 'tz',
    letters: '\uA729'
  }, {
    base: 'u',
    letters: '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'
  }, {
    base: 'v',
    letters: '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'
  }, {
    base: 'vy',
    letters: '\uA761'
  }, {
    base: 'w',
    letters: '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'
  }, {
    base: 'x',
    letters: '\u0078\u24E7\uFF58\u1E8B\u1E8D'
  }, {
    base: 'y',
    letters: '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'
  }, {
    base: 'z',
    letters: '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'
  }];
  const diacriticsMap = {};
  for (let ii = 0; ii < map.length; ii++) {
    const {
      letters
    } = map[ii];
    for (let jj = 0; jj < letters.length; jj++) {
      diacriticsMap[letters[jj]] = map[ii].base;
    }
  }

  // "what?" version ... http://jsperf.com/diacritics/12
  function stripDiacritics(str) {
    return str.replace(/[\u0300-\u036F]/g, '') // Remove combining diacritics
    .replace(/[^\u0000-\u007E]/g, a => diacriticsMap[a] || a);
  }

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var warning = function() {};

  {
    var printWarning = function printWarning(format, args) {
      var len = arguments.length;
      args = new Array(len > 1 ? len - 1 : 0);
      for (var key = 1; key < len; key++) {
        args[key - 1] = arguments[key];
      }
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function(condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      if (format === undefined) {
        throw new Error(
            '`warning(condition, format, ...args)` requires a warning ' +
            'message argument'
        );
      }
      if (!condition) {
        printWarning.apply(null, [format].concat(args));
      }
    };
  }

  var warning_1 = warning;

  var warning$1 = /*@__PURE__*/getDefaultExportFromCjs(warning_1);

  let warned = {};

  /**
   * Copied from: https://github.com/ReactTraining/react-router/blob/master/modules/routerWarning.js
   */
  function warn(falseToWarn, message) {
    // Only issue deprecation warnings once.
    if (!falseToWarn && message.indexOf('deprecated') !== -1) {
      if (warned[message]) {
        return;
      }
      warned[message] = true;
    }
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    warning$1(falseToWarn, "[react-bootstrap-typeahead] " + message, ...args) ;
  }

  function isMatch(input, string, props) {
    let searchStr = input;
    let str = string;
    if (!props.caseSensitive) {
      searchStr = searchStr.toLowerCase();
      str = str.toLowerCase();
    }
    if (props.ignoreDiacritics) {
      searchStr = stripDiacritics(searchStr);
      str = stripDiacritics(str);
    }
    return str.indexOf(searchStr) !== -1;
  }

  /**
   * Default algorithm for filtering results.
   */
  function defaultFilterBy(option, props) {
    const {
      filterBy,
      labelKey,
      multiple,
      selected,
      text
    } = props;

    // Don't show selected options in the menu for the multi-select case.
    if (multiple && selected.some(o => isEqual$1(o, option))) {
      return false;
    }
    if (isFunction(labelKey) && isMatch(text, labelKey(option), props)) {
      return true;
    }
    const fields = filterBy.slice();
    if (isString(labelKey)) {
      // Add the `labelKey` field to the list of fields if it isn't already there.
      if (fields.indexOf(labelKey) === -1) {
        fields.unshift(labelKey);
      }
    }
    if (isString(option)) {
      warn(fields.length <= 1, 'You cannot filter by properties when `option` is a string.');
      return isMatch(text, option, props);
    }
    return fields.some(field => {
      let value = getOptionProperty(option, field);
      if (!isString(value)) {
        warn(false, 'Fields passed to `filterBy` should have string values. Value will ' + 'be converted to a string; results may be unexpected.');
        value = String(value);
      }
      return isMatch(text, value, props);
    });
  }

  function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
  }

  const CASE_INSENSITIVE = 'i';
  const COMBINING_MARKS = /[\u0300-\u036F]/;
  // Export for testing.
  function escapeStringRegexp(str) {
    !(typeof str === 'string') ? invariant$1(false, '`escapeStringRegexp` expected a string.')  : void 0;

    // Escape characters with special meaning either inside or outside character
    // sets. Use a simple backslash escape when it’s always valid, and a \unnnn
    // escape when the simpler form would be disallowed by Unicode patterns’
    // stricter grammar.
    return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
  }
  function getMatchBounds(subject, str) {
    const search = new RegExp(escapeStringRegexp(stripDiacritics(str)), CASE_INSENSITIVE);
    const matches = search.exec(stripDiacritics(subject));
    if (!matches) {
      return null;
    }
    let start = matches.index;
    let matchLength = matches[0].length;

    // Account for combining marks, which changes the indices.
    if (COMBINING_MARKS.test(subject)) {
      // Starting at the beginning of the subject string, check for the number of
      // combining marks and increment the start index whenever one is found.
      for (let ii = 0; ii <= start; ii++) {
        if (COMBINING_MARKS.test(subject[ii])) {
          start += 1;
        }
      }

      // Similarly, increment the length of the match string if it contains a
      // combining mark.
      for (let ii = start; ii <= start + matchLength; ii++) {
        if (COMBINING_MARKS.test(subject[ii])) {
          matchLength += 1;
        }
      }
    }
    return {
      end: start + matchLength,
      start
    };
  }

  function getHintText(props) {
    const {
      activeIndex,
      initialItem,
      isFocused,
      isMenuShown,
      labelKey,
      multiple,
      selected,
      text
    } = props;

    // Don't display a hint under the following conditions:
    if (
    // No text entered.
    !text ||
    // The input is not focused.
    !isFocused ||
    // The menu is hidden.
    !isMenuShown ||
    // No item in the menu.
    !initialItem ||
    // The initial item is a custom option.
    initialItem.customOption ||
    // One of the menu items is active.
    activeIndex > -1 ||
    // There's already a selection in single-select mode.
    !!selected.length && !multiple) {
      return '';
    }
    const initialItemStr = getOptionLabel(initialItem, labelKey);
    const bounds = getMatchBounds(initialItemStr.toLowerCase(), text.toLowerCase());
    if (!(bounds && bounds.start === 0)) {
      return '';
    }

    // Text matching is case- and accent-insensitive, so to display the hint
    // correctly, splice the input string with the hint string.
    return text + initialItemStr.slice(bounds.end, initialItemStr.length);
  }

  var classnames = {exports: {}};

  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  classnames.exports;

  (function (module) {
  	/* global define */

  	(function () {

  		var hasOwn = {}.hasOwnProperty;

  		function classNames () {
  			var classes = '';

  			for (var i = 0; i < arguments.length; i++) {
  				var arg = arguments[i];
  				if (arg) {
  					classes = appendClass(classes, parseValue(arg));
  				}
  			}

  			return classes;
  		}

  		function parseValue (arg) {
  			if (typeof arg === 'string' || typeof arg === 'number') {
  				return arg;
  			}

  			if (typeof arg !== 'object') {
  				return '';
  			}

  			if (Array.isArray(arg)) {
  				return classNames.apply(null, arg);
  			}

  			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
  				return arg.toString();
  			}

  			var classes = '';

  			for (var key in arg) {
  				if (hasOwn.call(arg, key) && arg[key]) {
  					classes = appendClass(classes, key);
  				}
  			}

  			return classes;
  		}

  		function appendClass (value, newClass) {
  			if (!newClass) {
  				return value;
  			}
  		
  			if (value) {
  				return value + ' ' + newClass;
  			}
  		
  			return value + newClass;
  		}

  		if (module.exports) {
  			classNames.default = classNames;
  			module.exports = classNames;
  		} else {
  			window.classNames = classNames;
  		}
  	}()); 
  } (classnames));

  var classnamesExports = classnames.exports;
  var cx = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

  function getMenuItemId(id, position) {
    return (id || '') + "-item-" + position;
  }

  const getInputProps = _ref => {
    let {
      activeIndex,
      id,
      isFocused,
      isMenuShown,
      multiple,
      onFocus,
      placeholder,
      ...rest
    } = _ref;
    return function (_temp) {
      let {
        className,
        ...inputProps
      } = _temp === void 0 ? {} : _temp;
      const props = {
        // These props can be overridden by values in `inputProps`.
        autoComplete: 'off',
        placeholder,
        type: 'text',
        ...inputProps,
        ...rest,
        'aria-activedescendant': activeIndex >= 0 ? getMenuItemId(id, activeIndex) : undefined,
        'aria-autocomplete': 'both',
        'aria-expanded': isMenuShown,
        'aria-haspopup': 'listbox',
        'aria-owns': isMenuShown ? id : undefined,
        className: cx({
          [className || '']: !multiple,
          focus: isFocused
        }),
        // Re-open the menu, eg: if it's closed via ESC.
        onClick: onFocus,
        onFocus,
        // Comboboxes are single-select by definition:
        // https://www.w3.org/TR/wai-aria-practices-1.1/#combobox
        role: 'combobox'
      };
      if (!multiple) {
        return props;
      }
      return {
        ...props,
        'aria-autocomplete': 'list',
        'aria-expanded': undefined,
        inputClassName: className,
        role: undefined
      };
    };
  };

  function getInputText(props) {
    const {
      activeItem,
      labelKey,
      multiple,
      selected,
      text
    } = props;
    if (activeItem) {
      // Display the input value if the pagination item is active.
      return getOptionLabel(activeItem, labelKey);
    }
    const selectedItem = !multiple && !!selected.length && head(selected);
    if (selectedItem) {
      return getOptionLabel(selectedItem, labelKey);
    }
    return text;
  }

  function getIsOnlyResult(props) {
    const {
      allowNew,
      highlightOnlyResult,
      results
    } = props;
    if (!highlightOnlyResult || allowNew) {
      return false;
    }
    return results.length === 1 && !getOptionProperty(head(results), 'disabled');
  }

  /**
   * Truncates the result set based on `maxResults` and returns the new set.
   */
  function getTruncatedOptions(options, maxResults) {
    if (!maxResults || maxResults >= options.length) {
      return options;
    }
    return options.slice(0, maxResults);
  }

  function skipDisabledOptions(currentIndex, keyCode, items) {
    let newIndex = currentIndex;
    while (items[newIndex] && items[newIndex].disabled) {
      newIndex += keyCode === UP ? -1 : 1;
    }
    return newIndex;
  }
  function getUpdatedActiveIndex(currentIndex, keyCode, items) {
    let newIndex = currentIndex;

    // Increment or decrement index based on user keystroke.
    newIndex += keyCode === UP ? -1 : 1;

    // Skip over any disabled options.
    newIndex = skipDisabledOptions(newIndex, keyCode, items);

    // If we've reached the end, go back to the beginning or vice-versa.
    if (newIndex === items.length) {
      newIndex = -1;
    } else if (newIndex === -2) {
      newIndex = items.length - 1;

      // Skip over any disabled options.
      newIndex = skipDisabledOptions(newIndex, keyCode, items);
    }
    return newIndex;
  }

  /**
   * Check if an input type is selectable, based on WHATWG spec.
   *
   * See:
   *  - https://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome/24175357
   *  - https://html.spec.whatwg.org/multipage/input.html#do-not-apply
   */
  function isSelectable(inputNode) {
    return inputNode.selectionStart != null;
  }

  function isShown(props) {
    const {
      open,
      minLength,
      showMenu,
      text
    } = props;

    // If menu visibility is controlled via props, that value takes precedence.
    if (open || open === false) {
      return open;
    }
    if (text.length < minLength) {
      return false;
    }
    return showMenu;
  }

  /**
   * Prevent the main input from blurring when a menu item or the clear button is
   * clicked. (#226 & #310)
   */
  function preventInputBlur(e) {
    e.preventDefault();
  }

  function shouldSelectHint(_ref, _ref2) {
    let {
      currentTarget,
      keyCode
    } = _ref;
    let {
      hintText,
      selectHintOnEnter,
      value
    } = _ref2;
    if (!hintText) {
      return false;
    }
    if (keyCode === RIGHT) {
      // For selectable input types ("text", "search"), only select the hint if
      // it's at the end of the input value. For non-selectable types ("email",
      // "number"), always select the hint.
      return isSelectable(currentTarget) ? currentTarget.selectionStart === value.length : true;
    }
    if (keyCode === TAB) {
      return true;
    }
    if (keyCode === RETURN && selectHintOnEnter) {
      return true;
    }
    return false;
  }

  function isSizeLarge(size) {
    return size === 'large' || size === 'lg';
  }
  function isSizeSmall(size) {
    return size === 'small' || size === 'sm';
  }

  function validateSelectedPropChange(prevSelected, selected) {
    const uncontrolledToControlled = !prevSelected && selected;
    const controlledToUncontrolled = prevSelected && !selected;
    let from, to, precedent;
    if (uncontrolledToControlled) {
      from = 'uncontrolled';
      to = 'controlled';
      precedent = 'an';
    } else {
      from = 'controlled';
      to = 'uncontrolled';
      precedent = 'a';
    }
    const message = "You are changing " + precedent + " " + from + " typeahead to be " + to + ". " + ("Input elements should not switch from " + from + " to " + to + " (or vice versa). ") + 'Decide between using a controlled or uncontrolled element for the ' + 'lifetime of the component.';
    warn(!(uncontrolledToControlled || controlledToUncontrolled), message);
  }

  const TypeaheadContext = /*#__PURE__*/React.createContext({});
  const withContext = (Component, values) => {
    // Note: Use a class instead of function component to support refs.

    return class extends React__default["default"].Component {
      render() {
        return /*#__PURE__*/React__default["default"].createElement(TypeaheadContext.Consumer, null, context => /*#__PURE__*/React__default["default"].createElement(Component, _extends({}, this.props, pick(context, values))));
      }
    };
  };

  const inputPropKeys = ['activeIndex', 'disabled', 'id', 'inputRef', 'isFocused', 'isMenuShown', 'multiple', 'onBlur', 'onChange', 'onFocus', 'onKeyDown', 'placeholder'];
  const propKeys = ['activeIndex', 'hideMenu', 'isMenuShown', 'labelKey', 'onClear', 'onHide', 'onRemove', 'results', 'selected', 'text', 'toggleMenu'];
  const typeaheadContextKeys = ['activeIndex', 'id', 'initialItem', 'inputNode', 'onActiveItemChange', 'onAdd', 'onInitialItemChange', 'onMenuItemClick', 'selectHintOnEnter', 'setItem'];
  function getTypeaheadContextValue(props) {
    return {
      ...pick(props, typeaheadContextKeys),
      hintText: getHintText(props),
      isOnlyResult: getIsOnlyResult(props)
    };
  }
  class TypeaheadManager extends React__default["default"].Component {
    constructor() {
      super(...arguments);
      _defineProperty(this, "_handleKeyDown", e => {
        const {
          initialItem,
          onKeyDown,
          onAdd
        } = this.props;
        switch (e.keyCode) {
          case RETURN:
            if (initialItem && getIsOnlyResult(this.props)) {
              onAdd(initialItem);
            }
            break;
        }
        onKeyDown(e);
      });
    }
    componentDidUpdate(prevProps) {
      const {
        allowNew,
        isMenuShown,
        onInitialItemChange,
        onMenuToggle,
        results
      } = this.props;

      // Clear the initial item when there are no results.
      if (!(allowNew || results.length)) {
        onInitialItemChange(null);
      }
      if (isMenuShown !== prevProps.isMenuShown) {
        onMenuToggle(isMenuShown);
      }
    }
    render() {
      const childProps = {
        ...pick(this.props, propKeys),
        getInputProps: getInputProps({
          ...pick(this.props, inputPropKeys),
          onKeyDown: this._handleKeyDown,
          value: getInputText(this.props)
        })
      };
      return /*#__PURE__*/React__default["default"].createElement(TypeaheadContext.Provider, {
        value: getTypeaheadContextValue(this.props)
      }, this.props.children(childProps));
    }
  }

  const INPUT_PROPS_BLACKLIST = [{
    alt: 'onBlur',
    prop: 'onBlur'
  }, {
    alt: 'onInputChange',
    prop: 'onChange'
  }, {
    alt: 'onFocus',
    prop: 'onFocus'
  }, {
    alt: 'onKeyDown',
    prop: 'onKeyDown'
  }];
  const sizeType = PropTypes.oneOf(values(SIZE));

  /**
   * Allows additional warnings or messaging related to prop validation.
   */
  function checkPropType(validator, callback) {
    return (props, propName, componentName) => {
      PropTypes.checkPropTypes({
        [propName]: validator
      }, props, 'prop', componentName);
      isFunction(callback) && callback(props, propName, componentName);
    };
  }
  function caseSensitiveType(props, propName, componentName) {
    const {
      caseSensitive,
      filterBy
    } = props;
    warn(!caseSensitive || typeof filterBy !== 'function', 'Your `filterBy` function will override the `caseSensitive` prop.');
  }
  function deprecated(validator, reason) {
    return function validate(props, propName, componentName) {
      if (props[propName] != null) {
        warn(false, "The prop `" + propName + "` is deprecated. " + reason);
      }
      return PropTypes.checkPropTypes({
        [propName]: validator
      }, props, 'prop', componentName);
    };
  }
  function defaultInputValueType(props, propName, componentName) {
    const {
      defaultInputValue,
      defaultSelected,
      multiple,
      selected
    } = props;
    const name = defaultSelected.length ? 'defaultSelected' : 'selected';
    warn(!(!multiple && defaultInputValue && (defaultSelected.length || selected && selected.length)), "`defaultInputValue` will be overridden by the value from `" + name + "`.");
  }
  function highlightOnlyResultType(props, propName, componentName) {
    const {
      allowNew,
      highlightOnlyResult
    } = props;
    warn(!(highlightOnlyResult && allowNew), '`highlightOnlyResult` will not work with `allowNew`.');
  }
  function ignoreDiacriticsType(props, propName, componentName) {
    const {
      filterBy,
      ignoreDiacritics
    } = props;
    warn(ignoreDiacritics || typeof filterBy !== 'function', 'Your `filterBy` function will override the `ignoreDiacritics` prop.');
  }
  function inputPropsType(props, propName, componentName) {
    const {
      inputProps
    } = props;
    if (!(inputProps && Object.prototype.toString.call(inputProps) === '[object Object]')) {
      return;
    }

    // Blacklisted properties.
    INPUT_PROPS_BLACKLIST.forEach(_ref => {
      let {
        alt,
        prop
      } = _ref;
      const msg = alt ? " Use the top-level `" + alt + "` prop instead." : null;
      warn(!inputProps[prop], "The `" + prop + "` property of `inputProps` will be ignored." + msg);
    });
  }
  function isRequiredForA11y(props, propName, componentName) {
    warn(props[propName] != null, "The prop `" + propName + "` is required to make `" + componentName + "` " + 'accessible for users of assistive technologies such as screen readers.');
  }
  function labelKeyType(props, propName, componentName) {
    const {
      allowNew,
      labelKey
    } = props;
    warn(!(isFunction(labelKey) && allowNew), '`labelKey` must be a string when `allowNew={true}`.');
  }
  const optionType = PropTypes.oneOfType([PropTypes.object, PropTypes.string]);
  function selectedType(props, propName, componentName) {
    const {
      onChange,
      selected
    } = props;
    warn(!selected || selected && isFunction(onChange), 'You provided a `selected` prop without an `onChange` handler. If you ' + 'want the typeahead to be uncontrolled, use `defaultSelected`. ' + 'Otherwise, set `onChange`.');
  }

  const propTypes$a = {
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
  const defaultProps$9 = {
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
  class Typeahead$1 extends React__default["default"].Component {
    constructor() {
      super(...arguments);
      _defineProperty(this, "state", getInitialState(this.props));
      _defineProperty(this, "inputNode", void 0);
      _defineProperty(this, "isMenuShown", false);
      // Keeps track of actual items displayed in the menu, after sorting,
      // truncating, grouping, etc.
      _defineProperty(this, "items", []);
      _defineProperty(this, "blur", () => {
        this.inputNode && this.inputNode.blur();
        this.hideMenu();
      });
      _defineProperty(this, "clear", () => {
        this.setState(clearTypeahead);
      });
      _defineProperty(this, "focus", () => {
        this.inputNode && this.inputNode.focus();
      });
      _defineProperty(this, "getInput", () => {
        return this.inputNode;
      });
      /**
       * For backwards compatibility...
       */
      _defineProperty(this, "getInstance", () => {
        warn(false, 'The `getInstance` method is deprecated. You can now access instance ' + 'methods directly on the ref.');
        return this;
      });
      _defineProperty(this, "inputRef", inputNode => {
        this.inputNode = inputNode;
      });
      _defineProperty(this, "setItem", (item, position) => {
        this.items[position] = item;
      });
      _defineProperty(this, "hideMenu", () => {
        this.setState(hideMenu);
      });
      _defineProperty(this, "toggleMenu", () => {
        this.setState(toggleMenu);
      });
      _defineProperty(this, "_handleActiveIndexChange", activeIndex => {
        this.setState(state => ({
          activeIndex,
          activeItem: activeIndex === -1 ? null : state.activeItem
        }));
      });
      _defineProperty(this, "_handleActiveItemChange", activeItem => {
        // Don't update the active item if it hasn't changed.
        if (!isEqual$1(activeItem, this.state.activeItem)) {
          this.setState({
            activeItem
          });
        }
      });
      _defineProperty(this, "_handleBlur", e => {
        e.persist();
        this.setState({
          isFocused: false
        }, () => this.props.onBlur(e));
      });
      _defineProperty(this, "_handleChange", selected => {
        this.props.onChange && this.props.onChange(selected);
      });
      _defineProperty(this, "_handleClear", () => {
        this.setState(clearTypeahead, () => this._handleChange([]));
      });
      _defineProperty(this, "_handleFocus", e => {
        e.persist();
        this.setState({
          isFocused: true,
          showMenu: true
        }, () => this.props.onFocus(e));
      });
      _defineProperty(this, "_handleInitialItemChange", initialItem => {
        // Don't update the initial item if it hasn't changed.
        if (!isEqual$1(initialItem, this.state.initialItem)) {
          this.setState({
            initialItem
          });
        }
      });
      _defineProperty(this, "_handleInputChange", e => {
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
      _defineProperty(this, "_handleKeyDown", e => {
        const {
          activeItem
        } = this.state;

        // Skip most actions when the menu is hidden.
        if (!this.isMenuShown) {
          if (e.keyCode === UP || e.keyCode === DOWN) {
            this.setState({
              showMenu: true
            });
          }
          this.props.onKeyDown(e);
          return;
        }
        switch (e.keyCode) {
          case UP:
          case DOWN:
            // Prevent input cursor from going to the beginning when pressing up.
            e.preventDefault();
            this._handleActiveIndexChange(getUpdatedActiveIndex(this.state.activeIndex, e.keyCode, this.items));
            break;
          case RETURN:
            // Prevent form submission while menu is open.
            e.preventDefault();
            activeItem && this._handleMenuItemSelect(activeItem, e);
            break;
          case ESC:
          case TAB:
            // ESC simply hides the menu. TAB will blur the input and move focus to
            // the next item; hide the menu so it doesn't gain focus.
            this.hideMenu();
            break;
        }
        this.props.onKeyDown(e);
      });
      _defineProperty(this, "_handleMenuItemSelect", (option, e) => {
        if (option.paginationOption) {
          this._handlePaginate(e);
        } else {
          this._handleSelectionAdd(option);
        }
      });
      _defineProperty(this, "_handlePaginate", e => {
        e.persist();
        this.setState((state, props) => ({
          shownResults: state.shownResults + props.maxResults
        }), () => this.props.onPaginate(e, this.state.shownResults));
      });
      _defineProperty(this, "_handleSelectionAdd", option => {
        const {
          multiple,
          labelKey
        } = this.props;
        let selected;
        let selection = option;
        let text;

        // Add a unique id to the custom selection. Avoid doing this in `render` so
        // the id doesn't increment every time.
        if (!isString(selection) && selection.customOption) {
          selection = {
            ...selection,
            id: uniqueId('new-id-')
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
          text = getOptionLabel(selection, labelKey);
        }
        this.setState((state, props) => ({
          ...hideMenu(state, props),
          initialItem: selection,
          selected,
          text
        }), () => this._handleChange(selected));
      });
      _defineProperty(this, "_handleSelectionRemove", selection => {
        const selected = this.state.selected.filter(option => !isEqual$1(option, selection));

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
    UNSAFE_componentWillReceiveProps(nextProps) {
      const {
        labelKey,
        multiple,
        selected
      } = nextProps;
      validateSelectedPropChange(selected, this.props.selected);
      if (multiple !== this.props.multiple) {
        this.setState({
          text: ''
        });
      }

      // If new selections are passed via props, treat as a controlled input.
      if (selected && !isEqual$1(selected, this.state.selected)) {
        this.setState({
          selected
        });
        if (multiple) {
          return;
        }
        this.setState({
          text: selected.length ? getOptionLabel(head(selected), labelKey) : ''
        });
      }

      // Truncate selections when in single-select mode.
      let newSelected = selected || this.state.selected;
      if (!multiple && newSelected.length > 1) {
        newSelected = newSelected.slice(0, 1);
        this.setState({
          selected: newSelected,
          text: getOptionLabel(head(newSelected), labelKey)
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
      this.isMenuShown = isShown(mergedPropsAndState);
      this.items = []; // Reset items on re-render.

      let results = [];
      if (this.isMenuShown) {
        const cb = typeof filterBy === 'function' ? filterBy : defaultFilterBy;
        results = options.filter(option => cb(option, mergedPropsAndState));

        // This must come before results are truncated.
        const shouldPaginate = paginate && results.length > shownResults;

        // Truncate results if necessary.
        results = getTruncatedOptions(results, shownResults);

        // Add the custom option if necessary.
        if (addCustomOption(results, mergedPropsAndState)) {
          results.push({
            customOption: true,
            [getStringLabelKey(labelKey)]: text
          });
        }

        // Add the pagination item if necessary.
        if (shouldPaginate) {
          results.push({
            [getStringLabelKey(labelKey)]: '',
            paginationOption: true
          });
        }
      }
      return /*#__PURE__*/React__default["default"].createElement(TypeaheadManager, _extends({}, mergedPropsAndState, {
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
  _defineProperty(Typeahead$1, "propTypes", propTypes$a);
  _defineProperty(Typeahead$1, "defaultProps", defaultProps$9);

  const propTypes$9 = {
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
  const defaultProps$8 = {
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
    class AsyncTypeahead extends React__default["default"].Component {
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
        this._handleSearchDebounced = debounce$2(this._handleSearch, this.props.delay);
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
        return /*#__PURE__*/React__default["default"].createElement(TypeaheadComponent, _extends({}, props, {
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
    _defineProperty(AsyncTypeahead, "displayName", "asyncContainer(" + getDisplayName(Typeahead$1) + ")");
    _defineProperty(AsyncTypeahead, "propTypes", propTypes$9);
    _defineProperty(AsyncTypeahead, "defaultProps", defaultProps$8);
    return /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React__default["default"].createElement(AsyncTypeahead, _extends({}, props, {
      instanceRef: ref
    })));
  };

  var RootCloseWrapper$1 = {exports: {}};

  var contains$1 = {exports: {}};

  var interopRequireDefault = {exports: {}};

  interopRequireDefault.exports;

  (function (module) {
  	function _interopRequireDefault(e) {
  	  return e && e.__esModule ? e : {
  	    "default": e
  	  };
  	}
  	module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports; 
  } (interopRequireDefault));

  var interopRequireDefaultExports = interopRequireDefault.exports;

  var inDOM = {exports: {}};

  inDOM.exports;

  var hasRequiredInDOM;

  function requireInDOM () {
  	if (hasRequiredInDOM) return inDOM.exports;
  	hasRequiredInDOM = 1;
  	(function (module, exports) {

  		exports.__esModule = true;
  		exports.default = void 0;

  		var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  		exports.default = _default;
  		module.exports = exports["default"]; 
  	} (inDOM, inDOM.exports));
  	return inDOM.exports;
  }

  contains$1.exports;

  (function (module, exports) {

  	var _interopRequireDefault = interopRequireDefaultExports;

  	exports.__esModule = true;
  	exports.default = void 0;

  	var _inDOM = _interopRequireDefault(requireInDOM());

  	var _default = function () {
  	  // HTML DOM and SVG DOM may have different support levels,
  	  // so we need to check on context instead of a document root element.
  	  return _inDOM.default ? function (context, node) {
  	    if (context.contains) {
  	      return context.contains(node);
  	    } else if (context.compareDocumentPosition) {
  	      return context === node || !!(context.compareDocumentPosition(node) & 16);
  	    } else {
  	      return fallback(context, node);
  	    }
  	  } : fallback;
  	}();

  	exports.default = _default;

  	function fallback(context, node) {
  	  if (node) do {
  	    if (node === context) return true;
  	  } while (node = node.parentNode);
  	  return false;
  	}

  	module.exports = exports["default"]; 
  } (contains$1, contains$1.exports));

  var containsExports = contains$1.exports;

  var listen = {exports: {}};

  var on = {exports: {}};

  on.exports;

  var hasRequiredOn;

  function requireOn () {
  	if (hasRequiredOn) return on.exports;
  	hasRequiredOn = 1;
  	(function (module, exports) {

  		var _interopRequireDefault = interopRequireDefaultExports;

  		exports.__esModule = true;
  		exports.default = void 0;

  		var _inDOM = _interopRequireDefault(requireInDOM());

  		var on = function on() {};

  		if (_inDOM.default) {
  		  on = function () {
  		    if (document.addEventListener) return function (node, eventName, handler, capture) {
  		      return node.addEventListener(eventName, handler, capture || false);
  		    };else if (document.attachEvent) return function (node, eventName, handler) {
  		      return node.attachEvent('on' + eventName, function (e) {
  		        e = e || window.event;
  		        e.target = e.target || e.srcElement;
  		        e.currentTarget = node;
  		        handler.call(node, e);
  		      });
  		    };
  		  }();
  		}

  		var _default = on;
  		exports.default = _default;
  		module.exports = exports["default"]; 
  	} (on, on.exports));
  	return on.exports;
  }

  var off = {exports: {}};

  off.exports;

  var hasRequiredOff;

  function requireOff () {
  	if (hasRequiredOff) return off.exports;
  	hasRequiredOff = 1;
  	(function (module, exports) {

  		var _interopRequireDefault = interopRequireDefaultExports;

  		exports.__esModule = true;
  		exports.default = void 0;

  		var _inDOM = _interopRequireDefault(requireInDOM());

  		var off = function off() {};

  		if (_inDOM.default) {
  		  off = function () {
  		    if (document.addEventListener) return function (node, eventName, handler, capture) {
  		      return node.removeEventListener(eventName, handler, capture || false);
  		    };else if (document.attachEvent) return function (node, eventName, handler) {
  		      return node.detachEvent('on' + eventName, handler);
  		    };
  		  }();
  		}

  		var _default = off;
  		exports.default = _default;
  		module.exports = exports["default"]; 
  	} (off, off.exports));
  	return off.exports;
  }

  listen.exports;

  (function (module, exports) {

  	var _interopRequireDefault = interopRequireDefaultExports;

  	exports.__esModule = true;
  	exports.default = void 0;

  	var _inDOM = _interopRequireDefault(requireInDOM());

  	var _on = _interopRequireDefault(requireOn());

  	var _off = _interopRequireDefault(requireOff());

  	var listen = function listen() {};

  	if (_inDOM.default) {
  	  listen = function listen(node, eventName, handler, capture) {
  	    (0, _on.default)(node, eventName, handler, capture);
  	    return function () {
  	      (0, _off.default)(node, eventName, handler, capture);
  	    };
  	  };
  	}

  	var _default = listen;
  	exports.default = _default;
  	module.exports = exports["default"]; 
  } (listen, listen.exports));

  var listenExports = listen.exports;

  var ownerDocument$1 = {exports: {}};

  var ownerDocument = {exports: {}};

  ownerDocument.exports;

  (function (module, exports) {

  	exports.__esModule = true;
  	exports.default = ownerDocument;

  	function ownerDocument(node) {
  	  return node && node.ownerDocument || document;
  	}

  	module.exports = exports["default"]; 
  } (ownerDocument, ownerDocument.exports));

  var ownerDocumentExports$1 = ownerDocument.exports;

  ownerDocument$1.exports;

  (function (module, exports) {

  	exports.__esModule = true;
  	exports.default = _default;

  	var _reactDom = _interopRequireDefault(require$$0__default["default"]);

  	var _ownerDocument = _interopRequireDefault(ownerDocumentExports$1);

  	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  	function _default(componentOrElement) {
  	  return (0, _ownerDocument.default)(_reactDom.default.findDOMNode(componentOrElement));
  	}

  	module.exports = exports.default; 
  } (ownerDocument$1, ownerDocument$1.exports));

  var ownerDocumentExports = ownerDocument$1.exports;

  RootCloseWrapper$1.exports;

  (function (module, exports) {

  	exports.__esModule = true;
  	exports.default = void 0;

  	var _contains = _interopRequireDefault(containsExports);

  	var _listen = _interopRequireDefault(listenExports);

  	var _propTypes = _interopRequireDefault(propTypesExports);

  	var _react = _interopRequireDefault(React__default["default"]);

  	var _reactDom = _interopRequireDefault(require$$0__default["default"]);

  	var _ownerDocument = _interopRequireDefault(ownerDocumentExports);

  	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  	function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  	var escapeKeyCode = 27;

  	var noop = function noop() {};

  	function isLeftClickEvent(event) {
  	  return event.button === 0;
  	}

  	function isModifiedEvent(event) {
  	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  	}
  	/**
  	 * The `<RootCloseWrapper/>` component registers your callback on the document
  	 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
  	 * style behavior where your callback is triggered when the user tries to
  	 * interact with the rest of the document or hits the `esc` key.
  	 */


  	var RootCloseWrapper =
  	/*#__PURE__*/
  	function (_React$Component) {
  	  _inheritsLoose(RootCloseWrapper, _React$Component);

  	  function RootCloseWrapper(props, context) {
  	    var _this;

  	    _this = _React$Component.call(this, props, context) || this;

  	    _this.addEventListeners = function () {
  	      var event = _this.props.event;
  	      var doc = (0, _ownerDocument.default)(_assertThisInitialized(_assertThisInitialized(_this))); // Use capture for this listener so it fires before React's listener, to
  	      // avoid false positives in the contains() check below if the target DOM
  	      // element is removed in the React mouse callback.

  	      _this.removeMouseCaptureListener = (0, _listen.default)(doc, event, _this.handleMouseCapture, true);
  	      _this.removeMouseListener = (0, _listen.default)(doc, event, _this.handleMouse);
  	      _this.removeKeyupListener = (0, _listen.default)(doc, 'keyup', _this.handleKeyUp);

  	      if ('ontouchstart' in doc.documentElement) {
  	        _this.mobileSafariHackListeners = [].slice.call(document.body.children).map(function (el) {
  	          return (0, _listen.default)(el, 'mousemove', noop);
  	        });
  	      }
  	    };

  	    _this.removeEventListeners = function () {
  	      if (_this.removeMouseCaptureListener) _this.removeMouseCaptureListener();
  	      if (_this.removeMouseListener) _this.removeMouseListener();
  	      if (_this.removeKeyupListener) _this.removeKeyupListener();
  	      if (_this.mobileSafariHackListeners) _this.mobileSafariHackListeners.forEach(function (remove) {
  	        return remove();
  	      });
  	    };

  	    _this.handleMouseCapture = function (e) {
  	      _this.preventMouseRootClose = isModifiedEvent(e) || !isLeftClickEvent(e) || (0, _contains.default)(_reactDom.default.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this))), e.target);
  	    };

  	    _this.handleMouse = function (e) {
  	      if (!_this.preventMouseRootClose && _this.props.onRootClose) {
  	        _this.props.onRootClose(e);
  	      }
  	    };

  	    _this.handleKeyUp = function (e) {
  	      if (e.keyCode === escapeKeyCode && _this.props.onRootClose) {
  	        _this.props.onRootClose(e);
  	      }
  	    };

  	    _this.preventMouseRootClose = false;
  	    return _this;
  	  }

  	  var _proto = RootCloseWrapper.prototype;

  	  _proto.componentDidMount = function componentDidMount() {
  	    if (!this.props.disabled) {
  	      this.addEventListeners();
  	    }
  	  };

  	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
  	    if (!this.props.disabled && prevProps.disabled) {
  	      this.addEventListeners();
  	    } else if (this.props.disabled && !prevProps.disabled) {
  	      this.removeEventListeners();
  	    }
  	  };

  	  _proto.componentWillUnmount = function componentWillUnmount() {
  	    if (!this.props.disabled) {
  	      this.removeEventListeners();
  	    }
  	  };

  	  _proto.render = function render() {
  	    return this.props.children;
  	  };

  	  return RootCloseWrapper;
  	}(_react.default.Component);

  	RootCloseWrapper.displayName = 'RootCloseWrapper';
  	RootCloseWrapper.propTypes = {
  	  /**
  	   * Callback fired after click or mousedown. Also triggers when user hits `esc`.
  	   */
  	  onRootClose: _propTypes.default.func,

  	  /**
  	   * Children to render.
  	   */
  	  children: _propTypes.default.element,

  	  /**
  	   * Disable the the RootCloseWrapper, preventing it from triggering `onRootClose`.
  	   */
  	  disabled: _propTypes.default.bool,

  	  /**
  	   * Choose which document mouse event to bind to.
  	   */
  	  event: _propTypes.default.oneOf(['click', 'mousedown'])
  	};
  	RootCloseWrapper.defaultProps = {
  	  event: 'click'
  	};
  	var _default = RootCloseWrapper;
  	exports.default = _default;
  	module.exports = exports.default; 
  } (RootCloseWrapper$1, RootCloseWrapper$1.exports));

  var RootCloseWrapperExports = RootCloseWrapper$1.exports;
  var RootCloseWrapper = /*@__PURE__*/getDefaultExportFromCjs(RootCloseWrapperExports);

  var ManagerReferenceNodeContext = React__namespace.createContext();
  React__namespace.createContext();

  /**
   * Takes an argument and if it's an array, returns the first item in the array,
   * otherwise returns the argument. Used for Preact compatibility.
   */
  var unwrapArray = function unwrapArray(arg) {
    return Array.isArray(arg) ? arg[0] : arg;
  };
  /**
   * Takes a maybe-undefined function and arbitrary args and invokes the function
   * only if it is defined.
   */

  var safeInvoke = function safeInvoke(fn) {
    if (typeof fn === 'function') {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return fn.apply(void 0, args);
    }
  };
  /**
   * Sets a ref using either a ref callback or a ref object
   */

  var setRef = function setRef(ref, node) {
    // if its a function call it
    if (typeof ref === 'function') {
      return safeInvoke(ref, node);
    } // otherwise we should treat it as a ref object
    else if (ref != null) {
        ref.current = node;
      }
  };
  /**
   * Simple ponyfill for Object.fromEntries
   */

  var fromEntries = function fromEntries(entries) {
    return entries.reduce(function (acc, _ref) {
      var key = _ref[0],
          value = _ref[1];
      acc[key] = value;
      return acc;
    }, {});
  };
  /**
   * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
   */

  var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? React__namespace.useLayoutEffect : React__namespace.useEffect;

  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getWindow(node) {
    if (node == null) {
      return window;
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }

  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }

    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$2,
    requires: ['computeStyles']
  };

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  function getUAString() {
    var uaData = navigator.userAgentData;

    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function (item) {
        return item.brand + "/" + item.version;
      }).join(' ');
    }

    return navigator.userAgent;
  }

  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }

    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }

    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;

    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }

    var _ref = isElement(element) ? getWindow(element) : window,
        visualViewport = _ref.visualViewport;

    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width: width,
      height: height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x: x,
      y: y
    };
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;

        do {
          if (next && parent.isSameNode(next)) {
            return true;
          } // $FlowFixMe[prop-missing]: need a better way to handle this...


          next = next.parentNode || next.host;
        } while (next);
      } // Give up, the result is false


    return false;
  }

  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || ( // DOM Element detected
      isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle$1(element).position === 'fixed') {
      return null;
    }

    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());

    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle$1(element);

      if (elementCss.position === 'fixed') {
        return null;
      }
    }

    var currentNode = getParentNode(element);

    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }
  function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name,
        options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect$1(_ref2) {
    var state = _ref2.state,
        options = _ref2.options;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }

    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x,
        y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        variation = _ref2.variation,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive,
        roundOffsets = _ref2.roundOffsets,
        isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x,
        x = _offsets$x === void 0 ? 0 : _offsets$x,
        _offsets$y = offsets.y,
        y = _offsets$y === void 0 ? 0 : _offsets$y;

    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
      x: x,
      y: y
    }) : {
      x: x,
      y: y
    };

    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);

        if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


      offsetParent = offsetParent;

      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
        offsetParent[heightProp];
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
        offsetParent[widthProp];
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x: x,
      y: y
    }, getWindow(popper)) : {
      x: x,
      y: y
    };

    x = _ref4.x;
    y = _ref4.y;

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref5) {
    var state = _ref5.state,
        options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
        _options$roundOffsets = options.roundOffsets,
        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration,
      isFixed: state.options.strategy === 'fixed'
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };

  var passive = {
    passive: true
  };

  function effect(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
  };

  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: 'end',
    end: 'start'
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();

      if (layoutViewport || !layoutViewport && strategy === 'fixed') {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen;

    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle$1(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle$1(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen;

    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === 'fixed');
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$strategy = _options.strategy,
        strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis) {
      var _offsetModifierState$;

      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = offset + overflow[mainSide];
      var max$1 = offset - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _offsetModifierState$2;

      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _len = altAxis === 'y' ? 'height' : 'width';

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  } // Returns the composite rect of an element relative to its offsetParent.
  // Composite means it takes into account transforms as well as layout.


  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(setOptionsAction) {
          var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });

          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {
        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref) {
          var name = _ref.name,
              _ref$options = _ref.options,
              options = _ref$options === void 0 ? {} : _ref$options,
              effect = _ref.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  /* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

  var hasElementType = typeof Element !== 'undefined';
  var hasMap = typeof Map === 'function';
  var hasSet = typeof Set === 'function';
  var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

  // Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

  function equal(a, b) {
    // START: fast-deep-equal es6/index.js 3.1.3
    if (a === b) return true;

    if (a && b && typeof a == 'object' && typeof b == 'object') {
      if (a.constructor !== b.constructor) return false;

      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (!equal(a[i], b[i])) return false;
        return true;
      }

      // START: Modifications:
      // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
      //    to co-exist with es5.
      // 2. Replace `for of` with es5 compliant iteration using `for`.
      //    Basically, take:
      //
      //    ```js
      //    for (i of a.entries())
      //      if (!b.has(i[0])) return false;
      //    ```
      //
      //    ... and convert to:
      //
      //    ```js
      //    it = a.entries();
      //    while (!(i = it.next()).done)
      //      if (!b.has(i.value[0])) return false;
      //    ```
      //
      //    **Note**: `i` access switches to `i.value`.
      var it;
      if (hasMap && (a instanceof Map) && (b instanceof Map)) {
        if (a.size !== b.size) return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!b.has(i.value[0])) return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!equal(i.value[1], b.get(i.value[0]))) return false;
        return true;
      }

      if (hasSet && (a instanceof Set) && (b instanceof Set)) {
        if (a.size !== b.size) return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!b.has(i.value[0])) return false;
        return true;
      }
      // END: Modifications

      if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (a[i] !== b[i]) return false;
        return true;
      }

      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      // START: Modifications:
      // Apply guards for `Object.create(null)` handling. See:
      // - https://github.com/FormidableLabs/react-fast-compare/issues/64
      // - https://github.com/epoberezkin/fast-deep-equal/issues/49
      if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
      // END: Modifications

      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;

      for (i = length; i-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      // END: fast-deep-equal

      // START: react-fast-compare
      // custom handling for DOM elements
      if (hasElementType && a instanceof Element) return false;

      // custom handling for React/Preact
      for (i = length; i-- !== 0;) {
        if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
          // React-specific: avoid traversing React elements' _owner
          // Preact-specific: avoid traversing Preact elements' __v and __o
          //    __v = $_original / $_vnode
          //    __o = $_owner
          // These properties contain circular references and are not needed when
          // comparing the actual elements (and not their owners)
          // .$$typeof and ._store on just reasonable markers of elements

          continue;
        }

        // all other properties should be traversed as usual
        if (!equal(a[keys[i]], b[keys[i]])) return false;
      }
      // END: react-fast-compare

      // START: fast-deep-equal
      return true;
    }

    return a !== a && b !== b;
  }
  // end fast-deep-equal

  var reactFastCompare = function isEqual(a, b) {
    try {
      return equal(a, b);
    } catch (error) {
      if (((error.message || '').match(/stack|recursion/i))) {
        // warn on circular references, don't crash
        // browsers give this different errors name and messages:
        // chrome/safari: "RangeError", "Maximum call stack size exceeded"
        // firefox: "InternalError", too much recursion"
        // edge: "Error", "Out of stack space"
        console.warn('react-fast-compare cannot handle circular refs');
        return false;
      }
      // some other error. we should definitely know about these
      throw error;
    }
  };

  var isEqual = /*@__PURE__*/getDefaultExportFromCjs(reactFastCompare);

  var EMPTY_MODIFIERS$1 = [];
  var usePopper = function usePopper(referenceElement, popperElement, options) {
    if (options === void 0) {
      options = {};
    }

    var prevOptions = React__namespace.useRef(null);
    var optionsWithDefaults = {
      onFirstUpdate: options.onFirstUpdate,
      placement: options.placement || 'bottom',
      strategy: options.strategy || 'absolute',
      modifiers: options.modifiers || EMPTY_MODIFIERS$1
    };

    var _React$useState = React__namespace.useState({
      styles: {
        popper: {
          position: optionsWithDefaults.strategy,
          left: '0',
          top: '0'
        },
        arrow: {
          position: 'absolute'
        }
      },
      attributes: {}
    }),
        state = _React$useState[0],
        setState = _React$useState[1];

    var updateStateModifier = React__namespace.useMemo(function () {
      return {
        name: 'updateState',
        enabled: true,
        phase: 'write',
        fn: function fn(_ref) {
          var state = _ref.state;
          var elements = Object.keys(state.elements);
          require$$0__namespace.flushSync(function () {
            setState({
              styles: fromEntries(elements.map(function (element) {
                return [element, state.styles[element] || {}];
              })),
              attributes: fromEntries(elements.map(function (element) {
                return [element, state.attributes[element]];
              }))
            });
          });
        },
        requires: ['computeStyles']
      };
    }, []);
    var popperOptions = React__namespace.useMemo(function () {
      var newOptions = {
        onFirstUpdate: optionsWithDefaults.onFirstUpdate,
        placement: optionsWithDefaults.placement,
        strategy: optionsWithDefaults.strategy,
        modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
          name: 'applyStyles',
          enabled: false
        }])
      };

      if (isEqual(prevOptions.current, newOptions)) {
        return prevOptions.current || newOptions;
      } else {
        prevOptions.current = newOptions;
        return newOptions;
      }
    }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
    var popperInstanceRef = React__namespace.useRef();
    useIsomorphicLayoutEffect(function () {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.setOptions(popperOptions);
      }
    }, [popperOptions]);
    useIsomorphicLayoutEffect(function () {
      if (referenceElement == null || popperElement == null) {
        return;
      }

      var createPopper$1 = options.createPopper || createPopper;
      var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
      popperInstanceRef.current = popperInstance;
      return function () {
        popperInstance.destroy();
        popperInstanceRef.current = null;
      };
    }, [referenceElement, popperElement, options.createPopper]);
    return {
      state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
      styles: state.styles,
      attributes: state.attributes,
      update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
      forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
    };
  };

  var NOOP = function NOOP() {
    return void 0;
  };

  var NOOP_PROMISE = function NOOP_PROMISE() {
    return Promise.resolve(null);
  };

  var EMPTY_MODIFIERS = [];
  function Popper(_ref) {
    var _ref$placement = _ref.placement,
        placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
        _ref$strategy = _ref.strategy,
        strategy = _ref$strategy === void 0 ? 'absolute' : _ref$strategy,
        _ref$modifiers = _ref.modifiers,
        modifiers = _ref$modifiers === void 0 ? EMPTY_MODIFIERS : _ref$modifiers,
        referenceElement = _ref.referenceElement,
        onFirstUpdate = _ref.onFirstUpdate,
        innerRef = _ref.innerRef,
        children = _ref.children;
    var referenceNode = React__namespace.useContext(ManagerReferenceNodeContext);

    var _React$useState = React__namespace.useState(null),
        popperElement = _React$useState[0],
        setPopperElement = _React$useState[1];

    var _React$useState2 = React__namespace.useState(null),
        arrowElement = _React$useState2[0],
        setArrowElement = _React$useState2[1];

    React__namespace.useEffect(function () {
      setRef(innerRef, popperElement);
    }, [innerRef, popperElement]);
    var options = React__namespace.useMemo(function () {
      return {
        placement: placement,
        strategy: strategy,
        onFirstUpdate: onFirstUpdate,
        modifiers: [].concat(modifiers, [{
          name: 'arrow',
          enabled: arrowElement != null,
          options: {
            element: arrowElement
          }
        }])
      };
    }, [placement, strategy, onFirstUpdate, modifiers, arrowElement]);

    var _usePopper = usePopper(referenceElement || referenceNode, popperElement, options),
        state = _usePopper.state,
        styles = _usePopper.styles,
        forceUpdate = _usePopper.forceUpdate,
        update = _usePopper.update;

    var childrenProps = React__namespace.useMemo(function () {
      return {
        ref: setPopperElement,
        style: styles.popper,
        placement: state ? state.placement : placement,
        hasPopperEscaped: state && state.modifiersData.hide ? state.modifiersData.hide.hasPopperEscaped : null,
        isReferenceHidden: state && state.modifiersData.hide ? state.modifiersData.hide.isReferenceHidden : null,
        arrowProps: {
          style: styles.arrow,
          ref: setArrowElement
        },
        forceUpdate: forceUpdate || NOOP,
        update: update || NOOP_PROMISE
      };
    }, [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate]);
    return unwrapArray(children)(childrenProps);
  }

  // `Element` is not defined during server-side rendering, so shim it here.
  /* istanbul ignore next */
  const SafeElement = typeof Element === 'undefined' ? () => {} : Element;
  const propTypes$8 = {
    /**
     * Specify menu alignment. The default value is `justify`, which makes the
     * menu as wide as the input and truncates long values. Specifying `left`
     * or `right` will align the menu to that side and the width will be
     * determined by the length of menu item values.
     */
    align: PropTypes.oneOf(values(ALIGN)),
    children: PropTypes.func.isRequired,
    /**
     * Specify whether the menu should appear above the input.
     */
    dropup: PropTypes.bool,
    /**
     * Whether or not to automatically adjust the position of the menu when it
     * reaches the viewport boundaries.
     */
    flip: PropTypes.bool,
    isMenuShown: PropTypes.bool,
    positionFixed: PropTypes.bool,
    referenceElement: PropTypes.instanceOf(SafeElement)
  };
  const defaultProps$7 = {
    align: ALIGN.JUSTIFY,
    dropup: false,
    flip: false,
    isMenuShown: false,
    positionFixed: false
  };
  function getModifiers(_ref) {
    let {
      align,
      flip
    } = _ref;
    return {
      computeStyles: {
        enabled: true,
        fn: _ref2 => {
          let {
            styles,
            ...data
          } = _ref2;
          return {
            ...data,
            styles: {
              ...styles,
              // Use the following condition instead of `align === 'justify'`
              // since it allows the component to fall back to justifying the
              // menu width if `align` is undefined.
              width: align !== ALIGN.RIGHT && align !== ALIGN.LEFT ?
              // Set the popper width to match the target width.
              data.offsets.reference.width : styles.width
            }
          };
        }
      },
      flip: {
        enabled: flip
      },
      preventOverflow: {
        escapeWithReference: true
      }
    };
  }

  // Flow expects a string literal value for `placement`.
  const PLACEMENT = {
    bottom: {
      end: 'bottom-end',
      start: 'bottom-start'
    },
    top: {
      end: 'top-end',
      start: 'top-start'
    }
  };
  function getPlacement(_ref3) {
    let {
      align,
      dropup
    } = _ref3;
    const x = align === ALIGN.RIGHT ? 'end' : 'start';
    const y = dropup ? 'top' : 'bottom';
    return PLACEMENT[y][x];
  }
  const Overlay = props => {
    const {
      children,
      isMenuShown,
      positionFixed,
      referenceElement
    } = props;
    if (!isMenuShown) {
      return null;
    }
    return /*#__PURE__*/React__namespace.createElement(Popper, {
      modifiers: getModifiers(props),
      placement: getPlacement(props),
      positionFixed: positionFixed,
      referenceElement: referenceElement
    }, _ref4 => {
      let {
        ref,
        ...popperProps
      } = _ref4;
      return children({
        ...popperProps,
        innerRef: ref,
        inputHeight: referenceElement ? referenceElement.offsetHeight : 0
      });
    });
  };
  Overlay.propTypes = propTypes$8;
  Overlay.defaultProps = defaultProps$7;

  const propTypes$7 = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    size: sizeType
  };
  const defaultProps$6 = {
    label: 'Clear',
    onClick: noop
  };
  /**
   * ClearButton
   *
   * http://getbootstrap.com/css/#helper-classes-close
   */
  const ClearButton = _ref => {
    let {
      className,
      label,
      onClick,
      size,
      ...props
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement("button", _extends({}, props, {
      "aria-label": label,
      className: cx('close', 'rbt-close', {
        'rbt-close-lg': isSizeLarge(size)
      }, className),
      onClick: e => {
        e.stopPropagation();
        onClick(e);
      },
      type: "button"
    }), /*#__PURE__*/React__default["default"].createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"), /*#__PURE__*/React__default["default"].createElement("span", {
      className: "sr-only"
    }, label));
  };
  ClearButton.propTypes = propTypes$7;
  ClearButton.defaultProps = defaultProps$6;

  const Loader = _ref => {
    let {
      size
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: cx('rbt-loader', {
        'rbt-loader-lg': isSizeLarge(size),
        'rbt-loader-sm': isSizeSmall(size)
      })
    });
  };
  Loader.propTypes = {
    size: sizeType
  };

  const propTypes$6 = {
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onRemove: PropTypes.func,
    option: optionType.isRequired
  };
  const defaultProps$5 = {
    onBlur: noop,
    onClick: noop,
    onFocus: noop
  };

  /**
   * Higher-order component to encapsulate Token behaviors.
   */
  const tokenContainer = Component => {
    class WrappedComponent extends React__default["default"].Component {
      constructor() {
        super(...arguments);
        _defineProperty(this, "state", {
          active: false
        });
        _defineProperty(this, "_handleActiveChange", (e, active, callback) => {
          // e.persist() isn't always present.
          e.persist && e.persist();
          e.stopPropagation();
          this.setState({
            active
          }, () => callback(e));
        });
        _defineProperty(this, "_handleBlur", e => {
          this._handleActiveChange(e, false, this.props.onBlur);
        });
        _defineProperty(this, "_handleClick", e => {
          this._handleActiveChange(e, true, this.props.onClick);
        });
        _defineProperty(this, "_handleFocus", e => {
          this._handleActiveChange(e, true, this.props.onFocus);
        });
        _defineProperty(this, "_handleKeyDown", e => {
          switch (e.keyCode) {
            case BACKSPACE:
              if (this.state.active) {
                // Prevent backspace keypress from triggering the browser "back"
                // action.
                e.preventDefault();
                this._handleRemove();
              }
              break;
          }
        });
        _defineProperty(this, "_handleRemove", () => {
          const {
            onRemove,
            option
          } = this.props;

          // Flow having trouble with `isFunction` here for some reason...
          if (typeof onRemove === 'function') {
            onRemove(option);
          }
        });
      }
      render() {
        const {
          onRemove
        } = this.props;
        const {
          active
        } = this.state;
        return /*#__PURE__*/React__default["default"].createElement(RootCloseWrapper, {
          disabled: !active,
          onRootClose: this._handleBlur
        }, /*#__PURE__*/React__default["default"].createElement(Component, _extends({}, this.props, {
          active: active,
          onBlur: this._handleBlur,
          onClick: this._handleClick,
          onFocus: this._handleFocus,
          onKeyDown: this._handleKeyDown,
          onRemove: isFunction(onRemove) ? this._handleRemove : undefined
        })));
      }
    }
    _defineProperty(WrappedComponent, "displayName", "tokenContainer(" + getDisplayName(Component) + ")");
    _defineProperty(WrappedComponent, "propTypes", propTypes$6);
    _defineProperty(WrappedComponent, "defaultProps", defaultProps$5);
    return WrappedComponent;
  };

  const propTypes$5 = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    /**
     * Handler for removing/deleting the token. If not defined, the token will
     * be rendered in a read-only state.
     */
    onRemove: PropTypes.func,
    /**
     * Explicitly force a read-only state on the token.
     */
    readOnly: PropTypes.bool,
    tabIndex: PropTypes.number
  };
  const defaultProps$4 = {
    active: false,
    disabled: false,
    tabIndex: 0
  };
  /**
   * Token
   *
   * Individual token component, generally displayed within the TokenizerInput
   * component, but can also be rendered on its own.
   */
  class Token extends React__default["default"].Component {
    constructor() {
      super(...arguments);
      _defineProperty(this, "_renderRemoveableToken", () => {
        const {
          active,
          children,
          className,
          onRemove,
          ...props
        } = this.props;
        return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
          className: cx('rbt-token', 'rbt-token-removeable', {
            'rbt-token-active': active
          }, className)
        }), children, /*#__PURE__*/React__default["default"].createElement(ClearButton, {
          className: "rbt-token-remove-button",
          label: "Remove",
          onClick: onRemove,
          tabIndex: -1
        }));
      });
      _defineProperty(this, "_renderToken", () => {
        const {
          children,
          className,
          disabled,
          href
        } = this.props;
        const classnames = cx('rbt-token', {
          'rbt-token-disabled': disabled
        }, className);
        if (href && !disabled) {
          return /*#__PURE__*/React__default["default"].createElement("a", {
            className: classnames,
            href: href
          }, children);
        }
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: classnames
        }, children);
      });
    }
    render() {
      const {
        disabled,
        onRemove,
        readOnly
      } = this.props;
      return !disabled && !readOnly && isFunction(onRemove) ? this._renderRemoveableToken() : this._renderToken();
    }
  }
  _defineProperty(Token, "propTypes", propTypes$5);
  _defineProperty(Token, "defaultProps", defaultProps$4);
  var Token$1 = tokenContainer(Token);

  const Input = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => /*#__PURE__*/React__default["default"].createElement("input", _extends({}, props, {
    className: cx('rbt-input-main', props.className),
    ref: ref
  })));

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
    class HintedInput extends React__default["default"].Component {
      constructor() {
        super(...arguments);
        _defineProperty(this, "hintRef", /*#__PURE__*/React__default["default"].createRef());
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
        return /*#__PURE__*/React__default["default"].createElement("div", {
          style: {
            display: 'flex',
            flex: 1,
            height: '100%',
            position: 'relative'
          }
        }, /*#__PURE__*/React__default["default"].createElement(Input, _extends({}, props, {
          onKeyDown: this._handleKeyDown,
          ref: forwardedRef
        })), /*#__PURE__*/React__default["default"].createElement("input", {
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
    return /*#__PURE__*/React__default["default"].forwardRef((props, ref) => /*#__PURE__*/React__default["default"].createElement(HintedInputWithContext, _extends({}, props, {
      forwardedRef: ref
    })));
  }

  function withClassNames(Component) {
    // Use a class instead of function component to support refs.

    class WrappedComponent extends React__default["default"].Component {
      render() {
        const {
          className,
          isInvalid,
          isValid,
          size,
          ...props
        } = this.props;
        return /*#__PURE__*/React__default["default"].createElement(Component, _extends({}, props, {
          className: cx('form-control', 'rbt-input', {
            'input-lg form-control-lg': isSizeLarge(size),
            'input-sm form-control-sm': isSizeSmall(size),
            'is-invalid': isInvalid,
            'is-valid': isValid
          }, className)
        }));
      }
    }
    _defineProperty(WrappedComponent, "displayName", "withClassNames(" + getDisplayName(Component) + ")");
    return WrappedComponent;
  }

  const HintedInput$1 = hintContainer(Input);
  class TypeaheadInputMulti extends React__default["default"].Component {
    constructor() {
      super(...arguments);
      _defineProperty(this, "wrapperRef", /*#__PURE__*/React__default["default"].createRef());
      _defineProperty(this, "_input", void 0);
      _defineProperty(this, "getInputRef", input => {
        this._input = input;
        this.props.inputRef(input);
      });
      /**
       * Forward click or focus events on the container element to the input.
       */
      _defineProperty(this, "_handleContainerClickOrFocus", e => {
        // Don't focus the input if it's disabled.
        if (this.props.disabled) {
          e.currentTarget.blur();
          return;
        }

        // Move cursor to the end if the user clicks outside the actual input.
        const inputNode = this._input;
        if (!inputNode) {
          return;
        }
        if (e.currentTarget !== inputNode && isSelectable(inputNode)) {
          inputNode.selectionStart = inputNode.value.length;
        }
        inputNode.focus();
      });
      _defineProperty(this, "_handleKeyDown", e => {
        const {
          onKeyDown,
          selected,
          value
        } = this.props;
        switch (e.keyCode) {
          case BACKSPACE:
            if (e.currentTarget === this._input && selected.length && !value) {
              // Prevent browser from going back.
              e.preventDefault();

              // If the input is selected and there is no text, focus the last
              // token when the user hits backspace.
              if (this.wrapperRef.current) {
                const {
                  children
                } = this.wrapperRef.current;
                const lastToken = children[children.length - 2];
                lastToken && lastToken.focus();
              }
            }
            break;
        }
        onKeyDown(e);
      });
    }
    render() {
      const {
        children,
        className,
        inputClassName,
        inputRef,
        placeholder,
        selected,
        ...props
      } = this.props;
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: cx('rbt-input-multi', className),
        disabled: props.disabled,
        onClick: this._handleContainerClickOrFocus,
        onFocus: this._handleContainerClickOrFocus,
        tabIndex: -1
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "rbt-input-wrapper",
        ref: this.wrapperRef
      }, children, /*#__PURE__*/React__default["default"].createElement(HintedInput$1, _extends({}, props, {
        className: inputClassName,
        onKeyDown: this._handleKeyDown,
        placeholder: selected.length ? '' : placeholder,
        ref: this.getInputRef,
        style: {
          backgroundColor: 'transparent',
          border: 0,
          boxShadow: 'none',
          cursor: 'inherit',
          outline: 'none',
          padding: 0,
          width: '100%',
          zIndex: 1
        }
      }))));
    }
  }
  var TypeaheadInputMulti$1 = withClassNames(TypeaheadInputMulti);

  const HintedInput = hintContainer(Input);
  var TypeaheadInputSingle = withClassNames(_ref => {
    let {
      inputRef,
      ...props
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement(HintedInput, _extends({}, props, {
      ref: inputRef
    }));
  });

  const propTypes$4 = {
    children: PropTypes.string.isRequired,
    highlightClassName: PropTypes.string,
    search: PropTypes.string.isRequired
  };
  const defaultProps$3 = {
    highlightClassName: 'rbt-highlight-text'
  };
  /**
   * Stripped-down version of https://github.com/helior/react-highlighter
   *
   * Results are already filtered by the time the component is used internally so
   * we can safely ignore case and diacritical marks for the purposes of matching.
   */
  class Highlighter extends React__default["default"].PureComponent {
    render() {
      const {
        children,
        highlightClassName,
        search
      } = this.props;
      if (!search || !children) {
        return children;
      }
      let matchCount = 0;
      let remaining = children;
      const highlighterChildren = [];
      while (remaining) {
        const bounds = getMatchBounds(remaining, search);

        // No match anywhere in the remaining string, stop.
        if (!bounds) {
          highlighterChildren.push(remaining);
          break;
        }

        // Capture the string that leads up to a match.
        const nonMatch = remaining.slice(0, bounds.start);
        if (nonMatch) {
          highlighterChildren.push(nonMatch);
        }

        // Capture the matching string.
        const match = remaining.slice(bounds.start, bounds.end);
        highlighterChildren.push( /*#__PURE__*/React__default["default"].createElement("mark", {
          className: highlightClassName,
          key: matchCount
        }, match));
        matchCount += 1;

        // And if there's anything left over, continue the loop.
        remaining = remaining.slice(bounds.end);
      }
      return highlighterChildren;
    }
  }
  _defineProperty(Highlighter, "propTypes", propTypes$4);
  _defineProperty(Highlighter, "defaultProps", defaultProps$3);

  const t=t=>"object"==typeof t&&null!=t&&1===t.nodeType,e$1=(t,e)=>(!e||"hidden"!==t)&&("visible"!==t&&"clip"!==t),n=(t,n)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const o=getComputedStyle(t,null);return e$1(o.overflowY,n)||e$1(o.overflowX,n)||(t=>{const e=(t=>{if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}})(t);return !!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)})(t)}return !1},o$1=(t,e,n,o,l,r,i,s)=>r<t&&i>e||r>t&&i<e?0:r<=t&&s<=n||i>=e&&s>=n?r-t-o:i>e&&s<n||r<t&&s>n?i-e+l:0,l=t=>{const e=t.parentElement;return null==e?t.getRootNode().host||null:e},r=(e,r)=>{var i,s,d,h;if("undefined"==typeof document)return [];const{scrollMode:c,block:f,inline:u,boundary:a,skipOverflowHiddenElements:g}=r,p="function"==typeof a?a:t=>t!==a;if(!t(e))throw new TypeError("Invalid target");const m=document.scrollingElement||document.documentElement,w=[];let W=e;for(;t(W)&&p(W);){if(W=l(W),W===m){w.push(W);break}null!=W&&W===document.body&&n(W)&&!n(document.documentElement)||null!=W&&n(W,g)&&w.push(W);}const b=null!=(s=null==(i=window.visualViewport)?void 0:i.width)?s:innerWidth,H=null!=(h=null==(d=window.visualViewport)?void 0:d.height)?h:innerHeight,{scrollX:y,scrollY:M}=window,{height:v,width:E,top:x,right:C,bottom:I,left:R}=e.getBoundingClientRect(),{top:T,right:B,bottom:F,left:V}=(t=>{const e=window.getComputedStyle(t);return {top:parseFloat(e.scrollMarginTop)||0,right:parseFloat(e.scrollMarginRight)||0,bottom:parseFloat(e.scrollMarginBottom)||0,left:parseFloat(e.scrollMarginLeft)||0}})(e);let k="start"===f||"nearest"===f?x-T:"end"===f?I+F:x+v/2-T+F,D="center"===u?R+E/2-V+B:"end"===u?C+B:R-V;const L=[];for(let t=0;t<w.length;t++){const e=w[t],{height:n,width:l,top:r,right:i,bottom:s,left:d}=e.getBoundingClientRect();if("if-needed"===c&&x>=0&&R>=0&&I<=H&&C<=b&&x>=r&&I<=s&&R>=d&&C<=i)return L;const h=getComputedStyle(e),a=parseInt(h.borderLeftWidth,10),g=parseInt(h.borderTopWidth,10),p=parseInt(h.borderRightWidth,10),W=parseInt(h.borderBottomWidth,10);let T=0,B=0;const F="offsetWidth"in e?e.offsetWidth-e.clientWidth-a-p:0,V="offsetHeight"in e?e.offsetHeight-e.clientHeight-g-W:0,S="offsetWidth"in e?0===e.offsetWidth?0:l/e.offsetWidth:0,X="offsetHeight"in e?0===e.offsetHeight?0:n/e.offsetHeight:0;if(m===e)T="start"===f?k:"end"===f?k-H:"nearest"===f?o$1(M,M+H,H,g,W,M+k,M+k+v,v):k-H/2,B="start"===u?D:"center"===u?D-b/2:"end"===u?D-b:o$1(y,y+b,b,a,p,y+D,y+D+E,E),T=Math.max(0,T+M),B=Math.max(0,B+y);else {T="start"===f?k-r-g:"end"===f?k-s+W+V:"nearest"===f?o$1(r,s,n,g,W+V,k,k+v,v):k-(r+n/2)+V/2,B="start"===u?D-d-a:"center"===u?D-(d+l/2)+F/2:"end"===u?D-i+p+F:o$1(d,i,l,a,p+F,D,D+E,E);const{scrollLeft:t,scrollTop:h}=e;T=0===X?0:Math.max(0,Math.min(h+T/X,e.scrollHeight-n/X+V)),B=0===S?0:Math.max(0,Math.min(t+B/S,e.scrollWidth-l/S+F)),k+=h-T,D+=t-B;}L.push({el:e,top:T,left:B});}return L};

  const o=t=>!1===t?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&0!==Object.keys(t).length)(t)?t:{block:"start",inline:"nearest"};function e(e,r$1){if(!e.isConnected||!(t=>{let o=t;for(;o&&o.parentNode;){if(o.parentNode===document)return !0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode;}return !1})(e))return;const n=(t=>{const o=window.getComputedStyle(t);return {top:parseFloat(o.scrollMarginTop)||0,right:parseFloat(o.scrollMarginRight)||0,bottom:parseFloat(o.scrollMarginBottom)||0,left:parseFloat(o.scrollMarginLeft)||0}})(e);if((t=>"object"==typeof t&&"function"==typeof t.behavior)(r$1))return r$1.behavior(r(e,r$1));const l="boolean"==typeof r$1||null==r$1?void 0:r$1.behavior;for(const{el:a,top:i,left:s}of r(e,o(r$1))){const t=i-n.top+n.bottom,o=s-n.left+n.right;a.scroll({top:t,left:o,behavior:l});}}

  const propTypes$3 = {
    option: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    position: PropTypes.number
  };
  const menuItemContainer = Component => {
    class WrappedMenuItem extends React__default["default"].Component {
      constructor() {
        super(...arguments);
        _defineProperty(this, "itemRef", /*#__PURE__*/React__default["default"].createRef());
        _defineProperty(this, "_handleClick", e => {
          const {
            onMenuItemClick,
            option,
            onClick
          } = this.props;
          onMenuItemClick(option, e);
          onClick && onClick(e);
        });
        _defineProperty(this, "_maybeUpdateItem", () => {
          const {
            activeIndex,
            onActiveItemChange,
            onInitialItemChange,
            option,
            position
          } = this.props;
          if (position === 0) {
            onInitialItemChange(option);
          }
          if (position === activeIndex) {
            onActiveItemChange(option);

            // Automatically scroll the menu as the user keys through it.
            const node = this.itemRef.current;
            node && e(node, {
              block: 'nearest',
              boundary: node.parentNode,
              inline: 'nearest',
              scrollMode: 'if-needed'
            });
          }
        });
      }
      componentDidMount() {
        this._maybeUpdateItem();
      }
      componentDidUpdate(prevProps, prevState) {
        this._maybeUpdateItem();
      }
      render() {
        const {
          activeIndex,
          id,
          isOnlyResult,
          label,
          onActiveItemChange,
          onInitialItemChange,
          onMenuItemClick,
          option,
          position,
          setItem,
          ...props
        } = this.props;
        const active = isOnlyResult || activeIndex === position;

        // Update the item's position in the item stack.
        setItem(option, position);
        return /*#__PURE__*/React__default["default"].createElement(Component, _extends({}, props, {
          active: active,
          "aria-label": label,
          "aria-selected": active,
          id: getMenuItemId(id, position),
          onClick: this._handleClick,
          onMouseDown: preventInputBlur,
          ref: this.itemRef,
          role: "option"
        }));
      }
    }
    _defineProperty(WrappedMenuItem, "displayName", "menuItemContainer(" + getDisplayName(Component) + ")");
    _defineProperty(WrappedMenuItem, "propTypes", propTypes$3);
    return withContext(WrappedMenuItem, ['activeIndex', 'id', 'isOnlyResult', 'items', 'onActiveItemChange', 'onInitialItemChange', 'onMenuItemClick', 'setItem']);
  };

  const BaseMenuItem = /*#__PURE__*/React__default["default"].forwardRef((_ref, ref) => {
    let {
      active,
      children,
      className,
      disabled,
      onClick,
      onMouseDown,
      ...props
    } = _ref;
    const conditionalClassNames = {
      active,
      disabled
    };
    return /*#__PURE__*/React__default["default"].createElement("li", _extends({}, props, {
      className: cx(conditionalClassNames, className),
      ref: ref
    }), /*#__PURE__*/React__default["default"].createElement("a", {
      className: cx('dropdown-item', conditionalClassNames),
      href: "#",
      onClick: e => {
        e.preventDefault();
        !disabled && onClick && onClick(e);
      },
      onMouseDown: onMouseDown
    }, children));
  });
  var MenuItem = menuItemContainer(BaseMenuItem);

  const MenuDivider = props => /*#__PURE__*/React__default["default"].createElement("li", {
    className: "divider dropdown-divider",
    role: "separator"
  });
  const MenuHeader = props => /*#__PURE__*/React__default["default"].createElement("li", _extends({}, props, {
    className: "dropdown-header"
  }));
  const propTypes$2 = {
    'aria-label': PropTypes.string,
    /**
     * Message to display in the menu if there are no valid results.
     */
    emptyLabel: PropTypes.node,
    /**
     * Needed for accessibility.
     */
    id: checkPropType(PropTypes.oneOfType([PropTypes.number, PropTypes.string]), isRequiredForA11y),
    /**
     * Maximum height of the dropdown menu.
     */
    maxHeight: PropTypes.string
  };
  const defaultProps$2 = {
    'aria-label': 'menu-options',
    emptyLabel: 'No matches found.',
    maxHeight: '300px'
  };
  /**
   * Menu component that handles empty state when passed a set of results.
   */
  class Menu extends React__default["default"].Component {
    componentDidUpdate(prevProps) {
      const {
        inputHeight,
        scheduleUpdate
      } = this.props;

      // Update the menu position if the height of the input changes.
      if (inputHeight !== prevProps.inputHeight) {
        scheduleUpdate();
      }
    }
    render() {
      const {
        children,
        className,
        emptyLabel,
        id,
        innerRef,
        maxHeight,
        style,
        text
      } = this.props;
      const contents = React.Children.count(children) === 0 ? /*#__PURE__*/React__default["default"].createElement(BaseMenuItem, {
        disabled: true,
        role: "option"
      }, emptyLabel) : children;
      return /*#__PURE__*/React__default["default"].createElement("ul", {
        "aria-label": this.props['aria-label'],
        className: cx('rbt-menu', 'dropdown-menu', 'show', className),
        id: id,
        key:
        // Force a re-render if the text changes to ensure that menu
        // positioning updates correctly.
        text,
        ref: innerRef,
        role: "listbox",
        style: {
          ...style,
          display: 'block',
          maxHeight,
          overflow: 'auto'
        }
      }, contents);
    }
  }
  _defineProperty(Menu, "propTypes", propTypes$2);
  _defineProperty(Menu, "defaultProps", defaultProps$2);
  _defineProperty(Menu, "Divider", MenuDivider);
  _defineProperty(Menu, "Header", MenuHeader);

  const propTypes$1 = {
    /**
     * Provides the ability to specify a prefix before the user-entered text to
     * indicate that the selection will be new. No-op unless `allowNew={true}`.
     */
    newSelectionPrefix: PropTypes.node,
    /**
     * Prompt displayed when large data sets are paginated.
     */
    paginationText: PropTypes.node,
    /**
     * Provides a hook for customized rendering of menu item contents.
     */
    renderMenuItemChildren: PropTypes.func
  };
  const defaultProps$1 = {
    newSelectionPrefix: 'New selection: ',
    paginationText: 'Display additional results...',
    renderMenuItemChildren: (option, props, idx) => /*#__PURE__*/React__namespace.createElement(Highlighter, {
      search: props.text
    }, getOptionLabel(option, props.labelKey))
  };
  class TypeaheadMenu extends React__namespace.Component {
    constructor() {
      super(...arguments);
      _defineProperty(this, "_renderMenuItem", (option, position) => {
        const {
          labelKey,
          newSelectionPrefix,
          paginationText,
          renderMenuItemChildren,
          text
        } = this.props;
        const label = getOptionLabel(option, labelKey);
        const menuItemProps = {
          disabled: getOptionProperty(option, 'disabled'),
          label,
          option,
          position
        };
        if (option.customOption) {
          return /*#__PURE__*/React__namespace.createElement(MenuItem, _extends({}, menuItemProps, {
            className: "rbt-menu-custom-option",
            key: position,
            label: newSelectionPrefix + label
          }), newSelectionPrefix, /*#__PURE__*/React__namespace.createElement(Highlighter, {
            search: text
          }, label));
        }
        if (option.paginationOption) {
          return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, {
            key: "pagination-item"
          }, /*#__PURE__*/React__namespace.createElement(Menu.Divider, null), /*#__PURE__*/React__namespace.createElement(MenuItem, _extends({}, menuItemProps, {
            className: "rbt-menu-pagination-option",
            label: paginationText
          }), paginationText));
        }
        return /*#__PURE__*/React__namespace.createElement(MenuItem, _extends({}, menuItemProps, {
          key: position
        }), renderMenuItemChildren(option, this.props, position));
      });
    }
    render() {
      const {
        id,
        labelKey,
        newSelectionPrefix,
        options,
        renderMenuItemChildren,
        text,
        ...menuProps
      } = this.props;
      return (
        /*#__PURE__*/
        // Explictly pass some props so Flow doesn't complain...
        React__namespace.createElement(Menu, _extends({}, menuProps, {
          id: id,
          text: text
        }), options.map(this._renderMenuItem))
      );
    }
  }
  _defineProperty(TypeaheadMenu, "propTypes", propTypes$1);
  _defineProperty(TypeaheadMenu, "defaultProps", defaultProps$1);

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
    renderMenu: (results, menuProps, props) => /*#__PURE__*/React__default["default"].createElement(TypeaheadMenu, _extends({}, menuProps, {
      labelKey: props.labelKey,
      options: results,
      text: props.text
    })),
    renderToken: (option, props, idx) => /*#__PURE__*/React__default["default"].createElement(Token$1, {
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
  class TypeaheadComponent extends React__default["default"].Component {
    constructor() {
      super(...arguments);
      _defineProperty(this, "_referenceElement", void 0);
      _defineProperty(this, "referenceElementRef", element => {
        // Use `findDOMNode` here because it's easier and less fragile than
        // forwarding refs to the input's container.

        // $FlowFixMe: `findDOMNode` could return Text or an Element.
        this._referenceElement = require$$0.findDOMNode(element);
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
          return /*#__PURE__*/React__default["default"].createElement(TypeaheadInputSingle, commonProps);
        }
        const {
          labelKey,
          onRemove,
          selected
        } = props;
        return /*#__PURE__*/React__default["default"].createElement(TypeaheadInputMulti$1, _extends({}, commonProps, {
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
          content = /*#__PURE__*/React__default["default"].createElement(Loader, {
            size: bsSize || size
          });
        } else if (clearButton && !disabled && selected.length) {
          content = /*#__PURE__*/React__default["default"].createElement(ClearButton, {
            size: bsSize || size,
            onClick: onClear,
            onFocus: e => {
              // Prevent the main input from auto-focusing again.
              e.stopPropagation();
            },
            onMouseDown: preventInputBlur
          });
        }
        return content ? /*#__PURE__*/React__default["default"].createElement("div", {
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
      return /*#__PURE__*/React__default["default"].createElement(Typeahead$1, _extends({}, this.props, {
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
        return /*#__PURE__*/React__default["default"].createElement(RootCloseWrapper, {
          disabled: open || !isMenuShown,
          onRootClose: hideMenu
        }, /*#__PURE__*/React__default["default"].createElement("div", {
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
        }, props), /*#__PURE__*/React__default["default"].createElement(Overlay, _extends({}, getOverlayProps(this.props), {
          isMenuShown: isMenuShown,
          referenceElement: this._referenceElement
        }), menuProps => this._renderMenu(results, menuProps, props)), auxContent, isFunction(children) ? children(props) : children));
      });
    }
  }
  _defineProperty(TypeaheadComponent, "propTypes", propTypes);
  _defineProperty(TypeaheadComponent, "defaultProps", defaultProps);
  var Typeahead = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React__default["default"].createElement(TypeaheadComponent, _extends({}, props, {
    instanceRef: ref
  })));

  var AsyncTypeahead_react = asyncContainer(Typeahead);

  exports.AsyncTypeahead = AsyncTypeahead_react;
  exports.ClearButton = ClearButton;
  exports.Highlighter = Highlighter;
  exports.Input = Input;
  exports.Loader = Loader;
  exports.Menu = Menu;
  exports.MenuItem = MenuItem;
  exports.Token = Token$1;
  exports.Typeahead = Typeahead;
  exports.TypeaheadInputMulti = TypeaheadInputMulti$1;
  exports.TypeaheadInputSingle = TypeaheadInputSingle;
  exports.TypeaheadMenu = TypeaheadMenu;
  exports.asyncContainer = asyncContainer;
  exports.hintContainer = hintContainer;
  exports.menuItemContainer = menuItemContainer;
  exports.tokenContainer = tokenContainer;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
