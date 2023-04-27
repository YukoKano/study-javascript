import { todoLists } from "./renderLists.js"

const resetButton = document.querySelector('[data-js="resetButton"]');

export const resetButtonClickListener = () => {
  resetButton.addEventListener('click', () => {
    const result = confirm('本当に削除しますか？');
    if (result) {
      localStorage.clear();
      todoLists.length = 0;

      const box = document.querySelector('[data-js="todoListBox"]');
      while (box.firstChild) {
        box.removeChild(box.firstChild);
      }
    }
  });
}