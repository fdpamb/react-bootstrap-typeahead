import cx from 'classnames';
import React from 'react';
import { isSizeLarge, isSizeSmall } from '../utils';
import { sizeType } from '../propTypes';
const Loader = _ref => {
  let {
    size
  } = _ref;
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