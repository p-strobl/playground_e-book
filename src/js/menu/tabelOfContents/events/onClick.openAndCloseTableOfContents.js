import {getOpenTableOfContents, getTableOfContents, getMainContent} from "../../../helper/create.domNodesReference.js";
import {toggleCssClassFrom} from "../../../actions/toggle.cssClass.js";

/**
 * Event listining for click on open_menu and close_menu button
 * @returns {event}
 * */
export const openAndCloseTableOfContents = ([...openAndCloseButtons]) =>
  openAndCloseButtons.forEach(button =>
    button.addEventListener("click", () =>
      toggleCssClassFrom([getOpenTableOfContents(), getTableOfContents(), getMainContent()], "toggle_index_menu")));
