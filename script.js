"use strict";

{
  /**
  * Toggle class @ menu button event
  * @returns {undefined}
  * */
  const toggleIndexMenu = () => {
    $('.open_index_menu_button').classList.toggle('toggle_index_menu');
    $('.index_side_menu_wrap').classList.toggle('status_open');
    $('.main_content').classList.toggle('shrink_padding');
  };

  /**
  * Add event to target element
  * @returns {undefined}
  * */
  const initToggleIndexMenu = () => {
    document.addEventListener('click', event => {
      if(event.target.id === 'open_index_menu_button' || event.target.id === 'close_index_menu_button') {
        toggleIndexMenu();
      }
    });
  };

  /**
   * Create list items for index menu
   * @returns {mixin} HTML h2 list
   */
  const fillIndexMenu = () => {
    const h2NodesArray = Array.from($$('h2'));
    const indexMenuOl = $('#index_menu_ol');
    h2NodesArray.forEach((h2, index) => indexMenuOl.insertAdjacentHTML('beforeend', `<a href="#jump_to_anchor_${index}" name="jump_to_anchor_${index}"><li>${h2.innerHTML}</li></a>`));
  };

  /**
  * Add id attribute to article node
  * @returns {undefined}
  * */
  const addIdToArticleNodes = () => {
    const articleNodesArray = Array.from($$('article'));
    articleNodesArray.forEach((article, index) => article.setAttribute('id', `jump_to_anchor_${index}`));
  };

  const highlightIndexMenuListItemByWindowYPosition = () => {
    const articleArray = Array.from($$('article'));
    const windowInnerHeight = window.innerHeight;

    const indexMenuAnchorArray = Array.from($$('#index_menu_ol a'));

    window.addEventListener('scroll', () => {
      const bodyRect = Math.round($('body').getBoundingClientRect().top);
      const articleYHeight = articleArray.map(element => Math.round(element.getBoundingClientRect().top));

      console.log(bodyRect);
      console.log(articleYHeight);




      // let matchedOffset = articleArray.find(element => pageYOffset >= element.offsetTop && pageYOffset <= (element.offsetTop * 2));
      // let matchedOffset = articleArray.find(element => pageYOffset >= element.offsetTop && !(pageYOffset >= (element.offsetTop + element.offsetTop)));
      // console.log(matchedOffset);
      // if(matchedOffset !== undefined) {
      //   let matchedAnchor = indexMenuAnchorArray.find(element => element.name === matchedOffset.id);
      //   matchedAnchor.firstChild.classList.toggle('highlight_index_li');
      // }

    });
  };

  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  fillIndexMenu();
  initToggleIndexMenu();
  addIdToArticleNodes();
  highlightIndexMenuListItemByWindowYPosition();
}

