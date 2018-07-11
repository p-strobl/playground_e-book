
/**
 * Bind querySelector to $ and $$ in namespace
 * @returns {HTMLElement}
 * */
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Create main_content node from main content
 * @returns {HTMLElement}
 * */
export const getMainContent = () => $('#main_content');

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
 * Create nav_index_menu node reference
 * @returns {HTMLElement}
 * */
export const getNavIndexMenu = () => $('#nav_index_menu');

/**
 * Create nav_index_menu_header node reference
 * @returns {HTMLElement}
 * */
export const getIndexMenuHeader = () => $('.index_menu_header');

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
