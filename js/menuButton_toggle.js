import {toggleIndexMenu} from 'event_onClick.js';

/**
 * Toggle "open index menu button", "main content" and "index menu wrap" class
 * @returns {event}
 * */
const toggleIndexMenu = (event, [...toggleElements], cssClass) => {
  if (event.target.id === 'open_index_menu_button' || event.target.id === 'close_index_menu_button') {
    toggleElements.forEach(element => element.classList.toggle(cssClass));
  }
};