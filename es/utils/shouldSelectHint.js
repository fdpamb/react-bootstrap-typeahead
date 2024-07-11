import isSelectable from './isSelectable';
import { RETURN, RIGHT, TAB } from '../constants';
export default function shouldSelectHint(_ref, _ref2) {
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