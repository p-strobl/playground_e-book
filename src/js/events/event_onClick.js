import {getOpenIndexMenuButton, getNavIndexMenu, getMainContent} from "../helper/helper_dom.js";
import {toggleIndexMenu} from "../actions/toggle_menuButton.js";

/**
 * Event listining for click on open_menu and close_menu button
 * @returns {event}
 * */
export const initOnClick = ([...openAndCloseButtons]) =>
  //toggleTableOfContensMenu
  openAndCloseButtons.forEach(button =>
    button.addEventListener("click", () =>
      toggleIndexMenu([getOpenIndexMenuButton(), getNavIndexMenu(), getMainContent()], "toggle_index_menu")));
