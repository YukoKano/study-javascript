import { toggleDisplay } from "./toggleDisplay.js"

export const showButtonClickListener = () => {
  const showFinishedButton = document.querySelector('[data-js="showFinishedItemButton"]');

  showFinishedButton.addEventListener('click', () => {
    showFinishedButton.checked ? toggleDisplay('show') : toggleDisplay('hide');
  });
}