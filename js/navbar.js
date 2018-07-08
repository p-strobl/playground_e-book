// "use strict";
//
// {
//   const initNavbar = (mainH2Nodes, navIndexMenuOlNode) =>
//     mainH2Nodes.forEach((h2, index) => buildAppendedIndexLiNode(navIndexMenuOlNode, h2, index));
//
//   const createAnchorNode = (setHref, setName) => {
//     const anchor = document.createElement('a');
//     anchor.setAttribute('href', setHref);
//     anchor.setAttribute('name', setName);
//     return anchor;
//   };
//
//   const createLiNode = (setClass, setTextContent) => {
//     const li = document.createElement('li');
//     li.classList.add(setClass);
//     li.textContent = setTextContent;
//     return li;
//   };
//
//   const createSpanNode = setClass => {
//     const span = document.createElement('span');
//     span.classList.add(setClass);
//     return span;
//   };
//
//   const buildAppendedIndexLiNode = (navIndexMenuOlNode, element, index) => {
//     return navIndexMenuOlNode.appendChild
//     (createAnchorNode(`#jump_to_anchor_${index}`, `jump_to_anchor_${index}`)).appendChild
//     (createLiNode('index_menu_ol_li', element.innerHTML)).appendChild
//     (createSpanNode('index_menu_ol_li_span_leading_dots'));
//   };
//
//   // const appendLisToIndexNavbar = (mainH2Nodes, navIndexMenuOlNode) => mainH2Nodes.forEach((h2, index) => buildAppendedIndexLiNode(navIndexMenuOlNode, h2, index));
//
//   initNavbar();
// }