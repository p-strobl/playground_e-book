import {
  getArticleFooterSpanNode,
  getMainArticleNodes,
  getMainH2Nodes,
  getTableOfContentsOl,
  getOpenTableOfContents,
  getCloseTableOfContents
} from "./helper/create.domNodesReference.js";
import {addIdToArticleNodes, addPageNrToArticleFooterSpans} from "./actions/edit.articleNodes.js";
import {appendLiToTableOfContents} from "./menu/tabelOfContents/append.liToTableOfContents.js";
import {openAndCloseTableOfContents} from "./menu/tabelOfContents/events/onClick.openAndCloseTableOfContents.js";
import {initOnScroll} from "./menu/tabelOfContents/events/onScroll.highlightNode.js";

/**
 * init DOM completion functions
 * @returns {void}
 * */
const initDomCompletion = () => {
  addIdToArticleNodes(getMainArticleNodes());
  addPageNrToArticleFooterSpans(getArticleFooterSpanNode());
  appendLiToTableOfContents(getMainH2Nodes(), getTableOfContentsOl());
};

/**
 * init DOM events listener
 * @returns {void}
 * */
const initEvents = () => {
  openAndCloseTableOfContents([getOpenTableOfContents(), getCloseTableOfContents()]);
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