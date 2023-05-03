import { loadLocalStorageLists } from "./loadLocalStorageLists.js";

export const resetButtonClickListener = () => {
  const resetButton = document.querySelector('[data-js="resetButton"]');

  resetButton.addEventListener('click', () => {
    const result = confirm('本当に削除しますか？');
    if (result) {
      localStorage.clear();

      const todoLists = loadLocalStorageLists();
      todoLists.length = 0;

      const box = document.querySelector('[data-js="todoListBox"]');
      while (box.firstChild) {
        box.removeChild(box.firstChild);
      }
    }
  });
}