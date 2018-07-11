"use strict";

/**
 * Add id attribute to all main article node
 * @returns {undefined}
 * */
// const addIdToArticleNodes = articleNodes =>
//   articleNodes.forEach((article, index) => article.setAttribute('id', `jump_to_anchor_${index}`));

/**
 * Add article number to span node
 * @returns {HTMLElement}
 * */
// const fillArticleFooterSpan = articleFooterSpanNodes =>
//   articleFooterSpanNodes.forEach((spanNode, index) => spanNode.textContent = index + 1);

/**
 * Add li nodes to ol index menu
 * @returns {HTMLElement}
 */
// const fillIndexMenuWithLiNodes = (mainH2Nodes, indexMenuOlNode) => {
//   mainH2Nodes.forEach((h2, index) =>
//     indexMenuOlNode.insertAdjacentHTML('beforeend',
//       `<a href="#jump_to_anchor_${index}" name="jump_to_anchor_${index}">
//           <li class="index_menu_ol_li">${h2.innerHTML}
//             <span class="index_menu_ol_li_span_leading_dots"></span>
//           </li>
//         </a>`));
// };

// /**
//  * Creates <a href="..." name="..."><a/> DOM node with href and name attr.
//  * @returns {HTMLElement}
//  * */
// const createAnchorNode = (setHref, setName) => {
//   const anchor = document.createElement('a');
//   anchor.setAttribute('href', setHref);
//   anchor.setAttribute('name', setName);
//   return anchor;
// };
//
// /**
//  * Create <li class="...">...</li> DOM node with class and text content attr.
//  * @returns {HTMLElement}
//  * */
// const createLiNode = (setClass, setTextContent) => {
//   const li = document.createElement('li');
//   li.classList.add(setClass);
//   li.textContent = setTextContent;
//   return li;
// };
//
// /**
//  * Create <span class="..."></span> DOM node with class attr.
//  * @returns {HTMLElement}
//  * */
// const createSpanNode = setClass => {
//   const span = document.createElement('span');
//   span.classList.add(setClass);
//   return span;
// };
//
// /**
//  * Append nodes to each other to build complete anchor node for nav_index_menu_ol
//  * @returns {HTMLElement}
//  * */
// const buildAppendedIndexLiNode = (navIndexMenuOlNode, element, index) => {
//   return navIndexMenuOlNode.appendChild
//   (createAnchorNode(`#jump_to_anchor_${index}`, `jump_to_anchor_${index}`)).appendChild
//   (createLiNode('index_menu_ol_li', element.innerHTML)).appendChild
//   (createSpanNode('index_menu_ol_li_span_leading_dots'));
// };

// /**
//  * Append complete build li node to nav_index_menu for each availible main_article node
//  * @returns {HTMLElement}
//  * */
// const appendLisToIndexNavbar = (mainH2Nodes, navIndexMenuOlNode) =>
//   mainH2Nodes.forEach((h2, index) => buildAppendedIndexLiNode(navIndexMenuOlNode, h2, index));

/**
 * Add css class to node
 * @returns {undefined}
 * */
// const addClassAttrTo = (node, classSelector) => {
//   node.classList.add(classSelector);
// };

/**
 * Remove css class from multiple nodes
 * @returns {undefined}
 * */
// const removeClassAttrFromEach = (nodes, classSelector) =>
//   nodes.forEach(node => node.classList.remove(classSelector));

/**
 * Toggle "open index menu button", "main content" and "index menu wrap" class
 * @returns {event}
 * */
// const toggleIndexMenu = (event, [...toggleElements], cssClass) => {
//   if (event.target.id === 'open_index_menu_button' || event.target.id === 'close_index_menu_button') {
//     toggleElements.forEach(element => element.classList.toggle(cssClass));
//   }
// };

// /**
//  * Based on article node window y position, adds effect to matched index menu li node
//  * @returns {onchange}
//  * */
// const highlightIndexLiNode = (indexMenuAnchorNodes, articleNodes, indexMenuHeader) => {
//   removeClassAttrFromEach(indexMenuAnchorNodes, 'highlight_by_scroll');
//   const windowScrollYTopPosition = Math.round(window.scrollY);
//   const windowScrollYCenterPosition = Math.round(windowScrollYTopPosition + (window.innerHeight / 2));
//   const matchedArticleNode = articleNodes.find(article =>
//     windowScrollYCenterPosition >= article.offsetTop &&
//     windowScrollYCenterPosition <= article.offsetTop + article.offsetHeight);
//   if (matchedArticleNode !== undefined) {
//     // const matchedLiAnchorNode = indexMenuAnchorNodes.find((aNode, index) => aNode[index] === matchedArticleNode.indexOf(index));
//     const matchedLiAnchorNode = indexMenuAnchorNodes.find(aNode => aNode.name === matchedArticleNode.id);
//     if (matchedArticleNode) {
//       addClassAttrTo(matchedLiAnchorNode, 'highlight_by_scroll');
//       matchedLiAnchorNode.scrollIntoView();
//     }
//     if (windowScrollYTopPosition === 0) indexMenuHeader.scrollIntoView();
//   }
// };



