/**
 * Add css class to node
 * @returns {undefined}
 * */
const addClassAttrTo = (node, classSelector) => {
  node.classList.add(classSelector);
};

/**
 * Remove css class from multiple nodes
 * @returns {undefined}
 * */
const removeClassAttrFromEach = (nodes, classSelector) =>
  nodes.forEach(node => node.classList.remove(classSelector));

/**
 * Based on article node window y position, adds effect to matched index menu li node
 * @returns {onchange}
 * */
export const highlightIndexLiNode = (indexMenuAnchorNodes, articleNodes, indexMenuHeader) => {
  removeClassAttrFromEach(indexMenuAnchorNodes, 'highlight_by_scroll');
  const windowScrollYTopPosition = Math.round(window.scrollY);
  const windowScrollYCenterPosition = Math.round(windowScrollYTopPosition + (window.innerHeight / 2));
  const matchedArticleNode = articleNodes.find(article =>
    windowScrollYCenterPosition >= article.offsetTop &&
    windowScrollYCenterPosition <= article.offsetTop + article.offsetHeight);
  if (matchedArticleNode !== undefined) {
    const matchedLiAnchorNode = indexMenuAnchorNodes.find(aNode => aNode.name === matchedArticleNode.id);
    if (matchedArticleNode) {
      addClassAttrTo(matchedLiAnchorNode, 'highlight_by_scroll');
      matchedLiAnchorNode.scrollIntoView();
    }
    if (windowScrollYTopPosition <= indexMenuAnchorNodes[0].offsetTop) indexMenuHeader.scrollIntoView();
  }
};