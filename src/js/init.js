import {
  getArticleFooterSpanNode,
  getMainArticleNodes,
  getMainH2Nodes,
  getNavIndexMenuOlNode,
  getOpenIndexMenuButton,
  getCloseIndexMenuButton
} from "./helper/helper_dom.js";
import {addIdToArticleNodes, addPageNrToArticleFooterSpans} from "./actions/edit_articleNode.js";
import {appendLisToIndexNavbar} from "./actions/create_navbar.js";
import {initOnClick} from "./events/event_onClick.js";
import {initOnScroll} from "./events/event_onScroll.js";

/**
 * init DOM completion functions
 * @returns {void}
 * */
const initDomCompletion = () => {
  addIdToArticleNodes(getMainArticleNodes());
  appendLisToIndexNavbar(getMainH2Nodes(), getNavIndexMenuOlNode());
  addPageNrToArticleFooterSpans(getArticleFooterSpanNode());
};

/**
 * init DOM events listener
 * @returns {void}
 * */
const initDocumentEvents = () => {
  initOnClick([getOpenIndexMenuButton(), getCloseIndexMenuButton()]);
  initOnScroll();
};

/**
 * condense all init caller
 * @returns {void}
 * */
const init = () => {
  initDomCompletion();
  initDocumentEvents();
};

init();