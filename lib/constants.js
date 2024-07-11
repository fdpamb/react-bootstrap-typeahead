"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UP = exports.TAB = exports.SPACE = exports.SIZE = exports.RIGHT = exports.RETURN = exports.LEFT = exports.ESC = exports.DOWN = exports.DEFAULT_LABELKEY = exports.BACKSPACE = exports.ALIGN = void 0;
/**
 * Common (non-printable) keycodes for `keydown` and `keyup` events. Note that
 * `keypress` handles things differently and may not return the same values.
 */
const BACKSPACE = exports.BACKSPACE = 8;
const TAB = exports.TAB = 9;
const RETURN = exports.RETURN = 13;
const ESC = exports.ESC = 27;
const SPACE = exports.SPACE = 32;
const LEFT = exports.LEFT = 37;
const UP = exports.UP = 38;
const RIGHT = exports.RIGHT = 39;
const DOWN = exports.DOWN = 40;
const DEFAULT_LABELKEY = exports.DEFAULT_LABELKEY = 'label';
const ALIGN = exports.ALIGN = {
  JUSTIFY: 'justify',
  LEFT: 'left',
  RIGHT: 'right'
};
const SIZE = exports.SIZE = {
  LARGE: 'large',
  LG: 'lg',
  SM: 'sm',
  SMALL: 'small'
};