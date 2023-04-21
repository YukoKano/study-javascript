import { todoLists } from "./renderLists.js"
import { createTodo } from "./createTodo.js";

const todoForm = {
  text: document.querySelector('.todoText'),
  due: document.querySelector('.todoDue'),
  addButton: document.querySelector('.addButton')
}

export const addButtonClickListener = () => {
  todoForm.addButton.addEventListener('click', () => {
    if (todoForm.text.value !== '') {
      const newList = {
        content: todoForm.text.value,
        due: todoForm.due.value,
        isChecked: false,
        isDeleted: false
      };
      todoLists.push(newList);

      const updatedListsJson = JSON.stringify(todoLists);
      localStorage.setItem('todoLists', updatedListsJson);

      const newListIndex = todoLists.indexOf(newList); // length - 1番目でもいい
      createTodo(newList, newListIndex);

      todoForm.text.value = '';
      todoForm.due.value = '';
    }
  })
}
