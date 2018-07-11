import {getArticleFooterSpanNode, getMainArticleNodes, getMainH2Nodes, getNavIndexMenuOlNode} from './helper_dom.js';
import {addIdToArticleNodes, fillArticleFooterSpan} from './edit_articleNode.js';
import {appendLisToIndexNavbar} from './create_navbar.js';
import {initOnClick} from './event_onClick.js';
import {initOnScroll} from './event_onScroll.js';

  /**
   * init DOM completion functions
   * @returns {undefined}
   * */
  const initDomCompletion = () => {
    addIdToArticleNodes(getMainArticleNodes());
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