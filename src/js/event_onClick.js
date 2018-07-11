import {getOpenIndexMenuButton, getNavIndexMenu, getMainContent} from './helper_dom.js';
import {toggleIndexMenu} from './toggle_menuButton.js';

/**
 * Event listining for click
 * @returns {event}
 * */
export const initOnClick = () => document.addEventListener('click', event =>
   toggleIndexMenu(event, [getOpenIndexMenuButton(), getNavIndexMenu(), getMainContent()], 'toggle_index_menu'));