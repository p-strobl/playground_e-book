"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Open Index menubar
 * @returns {undefined}
 */
const openIndexMenu = () => {
  $('.open_index_menu_wrap').classList.add('hide_menu');
  $('.index_side_menu_wrap').classList.add('status_open');
  $('.main_content').classList.add('shrink_padding');
};

/**
 * Close Index menubar
 * @returns {undefined}
 */
const closeIndexMenu = () => {
    $('.open_index_menu_wrap').classList.remove('hide_menu');
    $('.index_side_menu_wrap').classList.remove('status_open');
    $('.main_content').classList.remove('shrink_padding');
};

/**
 * Create List items for index menubar
 * @returns {mixin} HTML h2 list
 */
const fillIndexManubar = () => {
  const findAllH2Tags = Array.from($$('h2'));

};

window.onload = () => {
  openIndexMenu();
  closeIndexMenu();
  fillIndexManubar();
};