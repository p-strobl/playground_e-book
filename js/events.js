"use strict";

/**
 * Event listining for scroll
 * @returns {event}
 * */
const initOnScroll = () => document.on('scroll', () => highlightIndexLiNode(getIndexMenuAnchorNodes(), getMainArticleNodes()));

/**
 * Event listining for click
 * @returns {event}
 * */
const initOnClick = () => document.on('click', event => toggleIndexMenu(event));
