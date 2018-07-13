import {getOpenIndexMenuButton, getNavIndexMenu, getMainContent} from "../../helper/get.domNodes.js";
import {toggleCssClassFrom} from "../../actions/toggle.cssClass.js";

/**
 * Event listining for click on open_menu and close_menu button
 * @returns {event}
 * */
export const openAndCloseTableOfContents = ([...openAndCloseButtons]) =>
  openAndCloseButtons.forEach(button =>
    button.addEventListener("click", () =>
      toggleCssClassFrom([getOpenIndexMenuButton(), getNavIndexMenu(), getMainContent()], "toggle_index_menu")));
