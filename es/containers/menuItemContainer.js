import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import scrollIntoView from 'scroll-into-view-if-needed';
import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../core/Context';
import { getDisplayName, getMenuItemId, preventInputBlur } from '../utils';
const propTypes = {
  option: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  position: PropTypes.number
};
const menuItemContainer = Component => {
  class WrappedMenuItem extends React.Component {
    constructor() {
      super(...arguments);
      _defineProperty(this, "itemRef", /*#__PURE__*/React.createRef());
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
          node && scrollIntoView(node, {
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
      return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
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
  _defineProperty(WrappedMenuItem, "propTypes", propTypes);
  return withContext(WrappedMenuItem, ['activeIndex', 'id', 'isOnlyResult', 'items', 'onActiveItemChange', 'onInitialItemChange', 'onMenuItemClick', 'setItem']);
};
export default menuItemContainer;