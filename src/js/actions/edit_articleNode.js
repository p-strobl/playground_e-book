/**
 * Add id attribute to all main article nodes
 * @returns {HTMLElement}
 * */
export const addIdToArticleNodes = articleNodes =>
  articleNodes.forEach((article, index) => article.setAttribute("id", `jump_to_anchor_${index}`));

/**
 * Add page number to article_footer_span nodes
 * @returns {HTMLElement}
 * */
export const addPageNrToArticleFooterSpans = articleFooterSpanNodes =>
  articleFooterSpanNodes.forEach((spanNode, index) => spanNode.textContent = index + 1);