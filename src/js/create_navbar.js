import {createAnchorNode, createLiNode, createSpanNode} from './create_indexMenuLiNode.js';

/**
 * Append nodes to each other to build complete anchor node for nav_index_menu_ol
 * @returns {HTMLElement}
 * */
const buildAppendedIndexLiNode = (navIndexMenuOlNode, element, index) => {
  return navIndexMenuOlNode.appendChild
  (createAnchorNode(`#jump_to_anchor_${index}`, `jump_to_anchor_${index}`)).appendChild
  (createLiNode('index_menu_ol_li', element.innerHTML)).appendChild
  (createSpanNode('index_menu_ol_li_span_leading_dots'));
};

/**
 * Append complete build li node to nav_index_menu for each availible main_article node
 * @returns {HTMLElement}
 * */
export const appendLisToIndexNavbar = (mainH2Nodes, navIndexMenuOlNode) =>
  mainH2Nodes.forEach((h2, index) => buildAppendedIndexLiNode(navIndexMenuOlNode, h2, index));