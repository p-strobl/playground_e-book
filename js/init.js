"use strict";

{
  /**
   * init DOM completion functions
   * @returns {undefined}
   * */
  const initDomCompletion = () => {
    addIdToArticleNodes(getMainArticleNodes());
    // fillIndexMenuWithH1Node(getMainH1Node(), getCloseIndexMenuButton());
    fillIndexMenuWithLiNodes(getMainH2Nodes(), getIndexMenuOlNode());
    fillArticleFooterSpan(getArticleFooterSpanNode());
  };

  /**
   * init Document events
   * @returns {event}
   * */
  const initDocumentEvents = () => {
    initOnClick();
    initOnScroll();
  };

  /**
   * init all collector
   * @returns {undefined}
   * */
  const init = () => {
    initDomCompletion();
    initDocumentEvents();
  };

  init();

}
