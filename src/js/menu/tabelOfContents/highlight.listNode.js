/**
 * Add css class to node
 * @returns {void}
 * */
const addClassAttrTo = (node, classSelector) =>
  node.classList.add(classSelector);

/**
 * Remove css class from multiple nodes
 * @returns {HTMLElement}
 * */
const removeClassAttrFromEach = (nodes, classSelector) =>
  nodes.forEach(node => node.classList.remove(classSelector));

/**
 * Determine viewport y axis top position
 * @returns {number}
 * */
const windowScrollYTopPosition = () => Math.round(window.scrollY);

/**
 * Determine viewport y axis center position
 * @returns {number}
 * */
const windowScrollYCenterPosition = () => Math.round(window.scrollY + (window.innerHeight / 2));

/**
 * Find article node wich is currently in the center of viewport
 * @returns {HTMLElement}
 * */
const matchedArticleNode = articleNodes => {
  return articleNodes.find(article =>
    windowScrollYCenterPosition() >= article.offsetTop &&
    windowScrollYCenterPosition() <= article.offsetTop + article.offsetHeight);
};

/**
 * Find tabel_of_contents_li node matches main_article node
 * @returns {HTMLElement}
 * */
const matchedLiAnchorNode = (tableOfContentsAnchorNodes, articleNodes) =>
  tableOfContentsAnchorNodes.find(anchorNode =>
    anchorNode.name === matchedArticleNode(articleNodes).id);

/**
 * Based on article node window y position, add's highlight effect to matched table_of_contents_li node
 * @returns {onchange}
 * */
export const highlightMenuNodeByArticleOnSight = (tableOfContentsAnchorNodes, articleNodes, tableOfContentsHeader) => {
  removeClassAttrFromEach(tableOfContentsAnchorNodes, "highlight_by_scroll");
  if (matchedArticleNode(articleNodes) !== undefined) {
    addClassAttrTo(matchedLiAnchorNode(tableOfContentsAnchorNodes, articleNodes), "highlight_by_scroll");
    matchedLiAnchorNode(tableOfContentsAnchorNodes, articleNodes).scrollIntoView();
    if (windowScrollYTopPosition() <= tableOfContentsAnchorNodes[0].offsetTop) tableOfContentsHeader.scrollIntoView();
  }
};