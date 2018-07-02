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

/**
 * Create anchor node list from index menu
 * @returns {HTMLElement}
 * */
const getIndexMenuAnchorNodes = () => Array.from($$('#index_menu_ol a'));

/**
 * Create article node List
 * @returns {HTMLElement}
 * */
const getMainArticleNodes = () => Array.from($$('main article'));

/**
 * Create H1 node list from main content
 * @returns {HTMLElement}
 * */
const getMainH1Node = () => $('main h1');

/**
 * Create H2 node list from main content
 * @returns {HTMLElement}
 * */
const getMainH2Nodes = () => Array.from($$('main h2'));


/**
 * Create ol node from index menu
 * @returns {HTMLElement}
 * */
const getIndexMenuOlNode = () => $('#index_menu_ol');

/**
 * Create main article footer span node
 * @returns {HTMLElement}
 * */
const getArticleFooterSpanNode = () => Array.from($$('.article_footer_p_span'));
