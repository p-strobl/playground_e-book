"use strict";

/**
 * Bind querySelector to $ and $$ in namespace
 * @returns {HTMLElement}
 * */
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Adds on as event handler to Node and NodeList prototype
 * @returns {event}
 * */
Node.prototype.on = (name, fn) => this.addEventListener(name, fn);
NodeList.prototype.on = (name, fn) => this.forEach(element => element.on(name, fn));

const getMainContent = () => $('#main_content');
/**
 * Create H1 node list from main content
 * @returns {HTMLElement}
 * */
const getMainH1Node = () => $('main h1');

/**
 * Create article node List
 * @returns {HTMLElement}
 * */
const getMainArticleNodes = () => Array.from($$('main article'));

/**
 * Create main article footer span node
 * @returns {HTMLElement}
 * */
const getArticleFooterSpanNode = () => Array.from($$('.article_footer_p_span'));

/**
 * Create H2 node list from main content
 * @returns {HTMLElement}
 * */
const getMainH2Nodes = () => Array.from($$('main h2'));

/**
 * Create open index menu button reference
 * @returns {HTMLElement}
 * */
const getOpenIndexMenuButton = () => $('#open_index_menu_button');

/**
 * Create node from close index menu button
 * @returns {HTMLElement}
 * */
const getCloseIndexMenuButton = () => $('#close_index_menu_button');

/**
 * Create nav index menu node reference
 * @returns {HTMLElement}
 * */
const getNavIndexMenu = () => $('#nav_index_menu');

const getIndexMenuHeader = () => $('.index_side_menu_header');
/**
 * Create ol node from index menu
 * @returns {HTMLElement}
 * */
const getNavIndexMenuOlNode = () => $('#nav_index_menu_ol');

/**
 * Create anchor node list from index menu
 * @returns {HTMLElement}
 * */
const getIndexMenuAnchorNodes = () => Array.from($$('#nav_index_menu_ol a'));
