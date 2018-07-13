import {getIndexMenuAnchorNodes, getMainArticleNodes, getIndexMenuHeader} from "../helper/helper_dom.js";
import {highlightListNode} from "../menu.tableOfContents/highlight.listNode.js";

/**
 * Event listining for scroll
 * @returns {event}
 * */
export const initOnScroll = () => {
  //
  document.addEventListener("scroll", () =>
    highlightListNode(getIndexMenuAnchorNodes(), getMainArticleNodes(), getIndexMenuHeader()));
//  hightlightMenuNodeByArticle
};
