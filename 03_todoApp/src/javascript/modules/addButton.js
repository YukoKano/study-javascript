import { createNewList } from "./createNewList.js";

const todoForm = {
  text: document.querySelector('[data-js="todoText"]'),
  due: document.querySelector('[data-js="todoDue"]'),
  addButton: document.querySelector('[data-js="addButton"]')
}

export const addButtonClickListener = () => {
  todoForm.addButton.addEventListener('click', () => {
    if (todoForm.text.value !== '') {
      createNewList(todoForm.text.value, todoForm.due.value);

      todoForm.text.value = '';
      todoForm.due.value = '';
    }
  })
}
