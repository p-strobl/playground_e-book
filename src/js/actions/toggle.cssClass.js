/**
 * Toggle "open_index_menu_button", "main_content" and "index_menu_wrap" class
 * @returns {HTMLElement}
 * */
export const toggleCssClassFrom = ([...toggleElements], cssClass) =>
  toggleElements.forEach(element => element.classList.toggle(cssClass));
