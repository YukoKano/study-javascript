import { todoLists } from "./renderLists.js"
import { createTodo } from "./createTodo.js";

const todo = {
  text: document.querySelector('.todoText'),
  due: document.querySelector('.todoDue')
}

const addButton = document.querySelector('.addButton');

export const addButtonClickListener = () => {
  addButton.addEventListener('click', () => {
    if (todo.text.value != '') {
      const list = {
        content: todo.text.value,
        due: todo.due.value,
        isChecked: false,
        isDeleted: false
      };
      todoLists.push(list);

      const jsonString = JSON.stringify(todoLists);

      createTodo(list, todoLists.length);
      localStorage.setItem('todoLists', jsonString);

      todo.text.value = '';
      todo.due.value = '';
    }
  })
}
