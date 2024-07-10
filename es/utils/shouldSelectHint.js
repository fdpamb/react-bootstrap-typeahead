import isSelectable from './isSelectable';
import { RETURN, RIGHT, TAB } from '../constants';
export default function shouldSelectHint(_ref, _ref2) {
  var currentTarget = _ref.currentTarget,
    keyCode = _ref.keyCode;
  var hintText = _ref2.hintText,
    selectHintOnEnter = _ref2.selectHintOnEnter,
    value = _ref2.value;
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