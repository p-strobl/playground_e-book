"use strict";

{
  /**
   * init DOM completion functions
   * @returns {undefined}
   * */
  const initDomCompletion = () => {
    addIdToArticleNodes(getMainArticleNodes());
    // fillIndexMenuWithLiNodes(getMainH2Nodes(), getIndexMenuOlNode());
    appendLisToIndexNavbar(getMainH2Nodes(), getNavIndexMenuOlNode());
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
