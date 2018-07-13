import {
  getArticleFooterSpanNode,
  getMainArticleNodes,
  getMainH2Nodes,
  getNavIndexMenuOlNode,
  getOpenIndexMenuButton,
  getCloseIndexMenuButton
} from "./helper/create.domNodesReference.js";
import {addIdToArticleNodes, addPageNrToArticleFooterSpans} from "./actions/edit.articleNodes.js";
import {appendLiToTableOfContents} from "./menu.tableOfContents/append.liToTableOfContents.js";
import {openAndCloseTableOfContents} from "./menu.tableOfContents/events/onClick.openAndCloseTableOfContents.js";
import {initOnScroll} from "./menu.tableOfContents/events/onScroll.highlightNode.js";

/**
 * init DOM completion functions
 * @returns {void}
 * */
const initDomCompletion = () => {
  addIdToArticleNodes(getMainArticleNodes());
  addPageNrToArticleFooterSpans(getArticleFooterSpanNode());
  appendLiToTableOfContents(getMainH2Nodes(), getNavIndexMenuOlNode());
};

/**
 * init DOM events listener
 * @returns {void}
 * */
const initEvents = () => {
  openAndCloseTableOfContents([getOpenIndexMenuButton(), getCloseIndexMenuButton()]);
  initOnScroll();
};

/**
 * condense all init caller
 * @returns {void}
 * */
const init = () => {
  initDomCompletion();
  initEvents();
};

init();