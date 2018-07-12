/**
 * Toggle "open_index_menu_button", "main_content" and "index_menu_wrap" class
 * @returns {event}
 * */
export const toggleIndexMenu = ([...toggleElements], cssClass) =>
  toggleElements.forEach(element => element.classList.toggle(cssClass));
