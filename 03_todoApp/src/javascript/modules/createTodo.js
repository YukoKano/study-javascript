import { addCheckbox } from "./addCheckbox.js";
import { addLabel } from "./addLabel.js";
import { addDeleteButton } from "./addDeleteButton.js";

export const createTodo = (object, index) => {
  const todoListBox = document.querySelector('[data-js="todoListBox"]');

  const list = document.createElement('li');
  list.setAttribute('data-list', index); // indexは、配列の0から数えて何番目か
  list.classList.add('todoList__item');

  addCheckbox(object.isChecked, list);
  addLabel(object.content, object.due, list);
  addDeleteButton(list);

  todoListBox.appendChild(list);
}