"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UP = exports.TAB = exports.SPACE = exports.SIZE = exports.RIGHT = exports.RETURN = exports.LEFT = exports.ESC = exports.DOWN = exports.DEFAULT_LABELKEY = exports.BACKSPACE = exports.ALIGN = void 0;
/**
 * Common (non-printable) keycodes for `keydown` and `keyup` events. Note that
 * `keypress` handles things differently and may not return the same values.
 */
var BACKSPACE = exports.BACKSPACE = 8;
var TAB = exports.TAB = 9;
var RETURN = exports.RETURN = 13;
var ESC = exports.ESC = 27;
var SPACE = exports.SPACE = 32;
var LEFT = exports.LEFT = 37;
var UP = exports.UP = 38;
var RIGHT = exports.RIGHT = 39;
var DOWN = exports.DOWN = 40;
var DEFAULT_LABELKEY = exports.DEFAULT_LABELKEY = 'label';
var ALIGN = exports.ALIGN = {
  JUSTIFY: 'justify',
  LEFT: 'left',
  RIGHT: 'right'
};
var SIZE = exports.SIZE = {
  LARGE: 'large',
  LG: 'lg',
  SM: 'sm',
  SMALL: 'small'
};