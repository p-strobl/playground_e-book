import {getIndexMenuAnchorNodes, getMainArticleNodes, getIndexMenuHeader} from "../helper/helper_dom.js";
import {highlightIndexLiNode} from "../actions/effect_highlight-navbar.js";

/**
 * Event listining for scroll
 * @returns {event}
 * */
export const initOnScroll = () => {
  document.addEventListener("scroll", () =>
    highlightIndexLiNode(getIndexMenuAnchorNodes(), getMainArticleNodes(), getIndexMenuHeader()));
};
