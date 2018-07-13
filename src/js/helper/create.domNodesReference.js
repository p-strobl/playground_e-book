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
export const getMainContent = () => $(".main_content");

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
 * Create open_table_of_contents_button node reference
 * @returns {HTMLElement}
 * */
export const getOpenTableOfContents = () => $("#open_table_of_contents");

/**
 * Create close_table_of_contents_button node reference
 * @returns {HTMLElement}
 * */
export const getCloseTableOfContents = () => $("#close_table_of_contents");

/**
 * Create table_of_contents menu node reference
 * @returns {HTMLElement}
 * */
export const getTableOfContents = () => $(".table_of_contents");

/**
 * Create table of contents_index_menu_header node reference
 * @returns {HTMLElement}
 * */
export const getTableOfContentsHeader = () => $(".table_of_contents_header");

/**
 * Create ol node reference from table_of_contents
 * @returns {HTMLElement}
 * */
export const getTableOfContentsOl = () => $(".table_of_contents_ol");

/**
 * Create anchor node array from table_of_contents
 * @returns {HTMLElement}
 * */
export const geTableOfContentsAnchorNodes = () => Array.from($$(".table_of_contents_ol a"));
