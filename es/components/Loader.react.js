import cx from 'classnames';
import React from 'react';
import { isSizeLarge, isSizeSmall } from '../utils';
import { sizeType } from '../propTypes';
var Loader = function Loader(_ref) {
  var size = _ref.size;
  return /*#__PURE__*/React.createElement("div", {
    className: cx('rbt-loader', {
      'rbt-loader-lg': isSizeLarge(size),
      'rbt-loader-sm': isSizeSmall(size)
    })
  });
};
Loader.propTypes = {
  size: sizeType
};
export default Loader;