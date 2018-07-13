import {geTableOfContentsAnchorNodes, getMainArticleNodes, getTableOfContentsHeader} from "../../../helper/create.domNodesReference.js";
import {highlightMenuNodeByArticleOnSight} from "../highlight.listNode.js";

/**
 * Event listining for scroll
 * @returns {event}
 * */
export const initOnScroll = () => {
  document.addEventListener("scroll", () =>
    highlightMenuNodeByArticleOnSight(geTableOfContentsAnchorNodes(), getMainArticleNodes(), getTableOfContentsHeader()));
};
