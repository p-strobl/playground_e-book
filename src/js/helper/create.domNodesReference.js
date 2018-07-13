/**
 * Bind querySelector to $ and querySelectorAll to $$ in namespace
 * @returns {HTMLElement}
 * */
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Create main_content node reference
 * @returns {HTMLElement}
 * */
export const getMainContent = () => $("#main_content");

/**
 * Create article node array
 * @returns {HTMLElement}
 * */
export const getMainArticleNodes = () => Array.from($$("main article"));

/**
 * Create main_article_footer_span node array
 * @returns {HTMLElement}
 * */
export const getArticleFooterSpanNode = () => Array.from($$(".article_footer_p_span"));

/**
 * Create H2 node array from main_content
 * @returns {HTMLElement}
 * */
export const getMainH2Nodes = () => Array.from($$("main h2"));

/**
 * Create open_index_menu_button node reference
 * @returns {HTMLElement}
 * */
export const getOpenIndexMenuButton = () => $("#open_index_menu_button");

/**
 * Create close_index_menu_button node reference
 * @returns {HTMLElement}
 * */
export const getCloseIndexMenuButton = () => $("#close_index_menu_button");

/**
 * Create nav_index_menu node reference
 * @returns {HTMLElement}
 * */
export const getNavIndexMenu = () => $("#nav_index_menu");

/**
 * Create ol node reference from index_menu
 * @returns {HTMLElement}
 * */
export const getNavIndexMenuOlNode = () => $("#nav_index_menu_ol");

/**
 * Create anchor node array from index_menu
 * @returns {HTMLElement}
 * */
export const getIndexMenuAnchorNodes = () => Array.from($$("#nav_index_menu_ol a"));
