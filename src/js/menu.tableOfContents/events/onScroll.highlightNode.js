import {getIndexMenuAnchorNodes, getMainArticleNodes, getIndexMenuHeader} from "../../helper/get.domNodes.js";
import {highlightMenuNodeByArticleOnSight} from "../highlight.listNode.js";

/**
 * Event listining for scroll
 * @returns {event}
 * */
export const initOnScroll = () => {
  document.addEventListener("scroll", () =>
    highlightMenuNodeByArticleOnSight(getIndexMenuAnchorNodes(), getMainArticleNodes(), getIndexMenuHeader()));
};
