"use strict";

/**
 * Add id attribute to all main article node
 * @returns {undefined}
 * */
const addIdToArticleNodes = articleNodes =>
  articleNodes.forEach((article, index) => article.setAttribute('id', `jump_to_anchor_${index}`));

/**
 * Add article number to span node
 * @returns {HTMLElement}
 * */
const fillArticleFooterSpan = articleFooterSpanNodes =>
  articleFooterSpanNodes.forEach((spanNode, index) => spanNode.textContent = index + 1);

/**
 * Add h1 node to index menu
 * @returns {HTMLElement}
 * */
const fillIndexMenuWithH1Node = (mainH1Node, indexMenuOlNode) => {
  indexMenuOlNode.insertAdjacentHTML('afterbegin',
    `<a href="#${mainH1Node.id}" name="${mainH1Node.id}">
        <h1 class="index_menu_ol_li_h1">${mainH1Node.innerHTML}</h1>
      </a>`);
};
const indexMenuH1Node = () => {

};
/**
 * Add li nodes to ol index menu
 * @returns {HTMLElement}
 */
const fillIndexMenuWithLiNodes = (mainH2Nodes, indexMenuOlNode) => {
  mainH2Nodes.forEach((h2, index) =>
    indexMenuOlNode.insertAdjacentHTML('beforeend',
      `<a href="#jump_to_anchor_${index}" name="jump_to_anchor_${index}">
          <li class="index_menu_ol_li">${h2.innerHTML}
            <span class="index_menu_ol_li_span_leading_dots"></span>
            <span class="index_menu_ol_li_span_counter">${index + 1}</span>
          </li>
        </a>`));
};

/**
 * Adds css class to node
 * @returns {undefined}
 * */
const addClassTo = (node, classSelector) => {
  node.classList.add(classSelector);
};

/**
 * Removes css class from multiple nodes
 * @returns {undefined}
 * */
const removeClassFromEach = (nodes, classSelector) =>
  nodes.forEach(node => node.classList.remove(classSelector));

/**
 * Toggle "open index menu button", "main content" and "index menu wrap" class
 * @returns {event}
 * */
const toggleIndexMenu = event => {
  if (event.target.id === 'open_index_menu_button' || event.target.id === 'close_index_menu_button') {
    $('.open_index_menu_button').classList.toggle('toggle_index_menu');
    $('.index_side_menu_wrap').classList.toggle('status_open');
    $('.main_content').classList.toggle('shrink_padding');
  }
};

/**
 * Based on article node window y position, adds effect to matched index menu li node
 * @returns {onchange}
 * */
const highlightIndexLiNode = (indexMenuAnchorNodes, articleNodes) => {
  removeClassFromEach(indexMenuAnchorNodes, 'highlight_by_scroll');
  const windowScrollYTopPosition = Math.round(window.scrollY);
  const windowScrollYCenterPosition = Math.round(windowScrollYTopPosition + (window.innerHeight / 2));
  const matchedArticleNode = articleNodes.find(article =>
    windowScrollYCenterPosition >= article.offsetTop &&
    windowScrollYCenterPosition <= article.offsetTop + article.offsetHeight);
  if (matchedArticleNode !== undefined) {
    const matchedLiAnchorNode = indexMenuAnchorNodes.find(aNode => aNode.name === matchedArticleNode.id);
    const matchedNextLiAnchorNode = indexMenuAnchorNodes.find(aNode => windowScrollYCenterPosition >= aNode.offsetTop + aNode.offsetHeight);
    if (matchedArticleNode) {
      addClassTo(matchedLiAnchorNode, 'highlight_by_scroll');
    } else if (matchedNextLiAnchorNode) {
      addClassTo(matchedNextLiAnchorNode, 'highlight_by_scroll');
    }
    matchedLiAnchorNode.scrollIntoView();
  }
};

