import {
  getArticleFooterSpanNode,
  getMainArticleNodes,
  getMainH2Nodes,
  getNavIndexMenuOlNode,
  getOpenIndexMenuButton,
  getCloseIndexMenuButton
} from "./helper_dom.js";
import {addIdToArticleNodes, addPageNrToArticleFooterSpans} from "./edit_articleNode.js";
import {appendLisToIndexNavbar} from "./create_navbar.js";
import {initOnClick} from "./event_onClick.js";
import {initOnScroll} from "./event_onScroll.js";

/**
 * init DOM completion functions
 * @returns {undefined}
 * */
const initDomCompletion = () => {
  addIdToArticleNodes(getMainArticleNodes());
  appendLisToIndexNavbar(getMainH2Nodes(), getNavIndexMenuOlNode());
  addPageNrToArticleFooterSpans(getArticleFooterSpanNode());
};

/**
 * init DOM event listener
 * @returns {undefined}
 * */
const initDocumentEvents = () => {
  initOnClick([getOpenIndexMenuButton(), getCloseIndexMenuButton()]);
  initOnScroll();
};

/**
 * condense all init caller
 * @returns {undefined}
 * */
const init = () => {
  initDomCompletion();
  initDocumentEvents();
};

init();