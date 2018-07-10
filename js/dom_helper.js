
/**
 * Bind querySelector to $ and $$ in namespace
 * @returns {HTMLElement}
 * */
export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

/**
 * Adds on as event handler to Node and NodeList prototype
 * @returns {event}
 * */
Node.prototype.on = (name, fn) => this.addEventListener(name, fn);
NodeList.prototype.on = (name, fn) => this.forEach(element => element.on(name, fn));

export const getMainContent = () => $('#main_content');
/**
 * Create H1 node list from main content
 * @returns {HTMLElement}
 * */
export const getMainH1Node = () => $('main h1');

/**
 * Create article node List
 * @returns {HTMLElement}
 * */
export const getMainArticleNodes = () => Array.from($$('main article'));

/**
 * Create main article footer span node
 * @returns {HTMLElement}
 * */
export const getArticleFooterSpanNode = () => Array.from($$('.article_footer_p_span'));

/**
 * Create H2 node list from main content
 * @returns {HTMLElement}
 * */
export const getMainH2Nodes = () => Array.from($$('main h2'));

/**
 * Create open index menu button reference
 * @returns {HTMLElement}
 * */
export const getOpenIndexMenuButton = () => $('#open_index_menu_button');

/**
 * Create node from close index menu button
 * @returns {HTMLElement}
 * */
export const getCloseIndexMenuButton = () => $('#close_index_menu_button');

/**
 * Create nav index menu node reference
 * @returns {HTMLElement}
 * */
export const getNavIndexMenu = () => $('#nav_index_menu');

export const getIndexMenuHeader = () => $('.index_side_menu_header');
/**
 * Create ol node from index menu
 * @returns {HTMLElement}
 * */
export const getNavIndexMenuOlNode = () => $('#nav_index_menu_ol');

/**
 * Create anchor node list from index menu
 * @returns {HTMLElement}
 * */
export const getIndexMenuAnchorNodes = () => Array.from($$('#nav_index_menu_ol a'));
