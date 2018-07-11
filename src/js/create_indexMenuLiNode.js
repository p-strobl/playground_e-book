/**
 * Creates <a href="..." name="..."><a/> DOM node with href and name attr.
 * @returns {HTMLElement}
 * */
export const createAnchorNode = (setHref, setName) => {
  const anchor = document.createElement('a');
  anchor.setAttribute('href', setHref);
  anchor.setAttribute('name', setName);
  return anchor;
};

/**
 * Create <li class="...">...</li> DOM node with class and text content attr.
 * @returns {HTMLElement}
 * */
export const createLiNode = (setClass, setTextContent) => {
  const li = document.createElement('li');
  li.classList.add(setClass);
  li.textContent = setTextContent;
  return li;
};

/**
 * Create <span class="..."></span> DOM node with class attr.
 * @returns {HTMLElement}
 * */
export const createSpanNode = setClass => {
  const span = document.createElement('span');
  span.classList.add(setClass);
  return span;
};