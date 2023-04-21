import { todoLists } from "./renderLists.js"

const resetButton = document.querySelector('.resetButton');

export const resetButtonClickListener = () => {
  resetButton.addEventListener('click', () => {
    const result = confirm('本当に削除しますか？');
    if (result) {
      localStorage.clear();
      todoLists.length = 0;
      document.querySelectorAll('.todoList').forEach((item) => { item.remove(); })
    }
  });
}