// import {articleNodes, articleFooterSpanNodes} from './helper_dom.js';
/**
 * Add id attribute to all main article node
 * @returns {undefined}
 * */
export const addIdToArticleNodes = articleNodes =>
  articleNodes.forEach((article, index) => article.setAttribute('id', `jump_to_anchor_${index}`));

/**
 * Add article number to span node
 * @returns {HTMLElement}
 * */
export const fillArticleFooterSpan = articleFooterSpanNodes =>
  articleFooterSpanNodes.forEach((spanNode, index) => spanNode.textContent = index + 1);