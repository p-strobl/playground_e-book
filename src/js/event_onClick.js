import {getOpenIndexMenuButton, getNavIndexMenu, getMainContent} from "./helper_dom.js";
import {toggleIndexMenu} from "./toggle_menuButton.js";

/**
 * Event listining for click on open_menu and close_menu button
 * @returns {event}
 * */
export const initOnClick = ([...openCloseButtons]) =>
  openCloseButtons.forEach(button =>
    button.addEventListener("click", () =>
      toggleIndexMenu([getOpenIndexMenuButton(), getNavIndexMenu(), getMainContent()], "toggle_index_menu")));
