import {createAnchorNode, createLiNode, createSpanNode} from "../helper/create.domElements.js";

/**
 * Append nodes to each other to build complete anchor node for nav_index_menu_ol node
 * @returns {HTMLElement}
 * */
const buildTableOfContentsLiNode = (navIndexMenuOlNode, element, index) => {
  return navIndexMenuOlNode.appendChild
  (createAnchorNode(`#jump_to_anchor_${index}`, `jump_to_anchor_${index}`)).appendChild
  (createLiNode("index_menu_ol_li", element.innerHTML)).appendChild
  (createSpanNode("index_menu_ol_li_span_leading_dots"));
};

/**
 * Append complete build li node to nav_index_menu for each availible main_article node
 * @returns {HTMLElement}
 * */
export const appendLiToTableOfContents = (mainH2Nodes, navIndexMenuOlNode) =>
  mainH2Nodes.forEach((h2, index) => buildTableOfContentsLiNode(navIndexMenuOlNode, h2, index));