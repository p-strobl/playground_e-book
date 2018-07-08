"use strict";

/**
 * Event listining for scroll
 * @returns {event}
 * */
const initOnScroll = () => document.on('scroll', () =>
  highlightIndexLiNode(getIndexMenuAnchorNodes(), getMainArticleNodes(), getIndexMenuHeader()));

/**
 * Event listining for click
 * @returns {event}
 * */
const initOnClick = () => document.on('click', event =>
  toggleIndexMenu(event, [getOpenIndexMenuButton(), getNavIndexMenu(), getMainContent()], 'toggle_index_menu'));
