import { addCheckbox } from "./addCheckbox.js";
import { addLabel } from "./addLabel.js";
import { addDeleteButton } from "./addDeleteButton.js";

export const createTodo = (object, index) => {
  const todoListBox = document.querySelector('[data-js="todoListBox"]');

  const list = document.createElement('li');
  list.setAttribute('data-list', index); // ローカルストレージの配列で0から数えて何番目か
  list.classList.add('todoList__item');

  // 引数objectのプロパティを使用して、liの子要素を作成する
  addCheckbox(list, object.isChecked);
  addLabel(list, object.content, object.due);
  addDeleteButton(list);

  todoListBox.appendChild(list);
}