import {getIndexMenuAnchorNodes, getMainArticleNodes, getIndexMenuHeader} from './helper_dom.js';
import {highlightIndexLiNode} from './effect_highlight-navbar.js';

/**
 * Event listining for scroll
 * @returns {event}
 * */
export const initOnScroll = () => document.addEventListener('scroll', () =>
  highlightIndexLiNode(getIndexMenuAnchorNodes(), getMainArticleNodes(), getIndexMenuHeader()));
