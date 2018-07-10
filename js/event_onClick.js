import {getOpenIndexMenuButton, getNavIndexMenu, getMainContent} from 'dom_helper.js';

/**
 * Event listining for click
 * @returns {event}
 * */
export const initOnClick = () => document.on('click', event =>
   toggleIndexMenu(event, [getOpenIndexMenuButton(), getNavIndexMenu(), getMainContent()], 'toggle_index_menu'));
