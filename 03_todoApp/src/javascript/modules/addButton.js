import { createTodo } from "./createTodo.js";
import { loadListsArray } from "./loadListsArray.js";

const todoForm = {
  text: document.querySelector('[data-js="todoText"]'),
  due: document.querySelector('[data-js="todoDue"]'),
  addButton: document.querySelector('[data-js="addButton"]')
}

export const addButtonClickListener = () => {
  todoForm.addButton.addEventListener('click', () => {
    if (todoForm.text.value !== '') {
      const todoLists = loadListsArray();

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
