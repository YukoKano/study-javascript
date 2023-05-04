import { createNewList } from "./createNewList.js";

const todoForm = {
  text: document.querySelector('[data-js="todoText"]'),
  due: document.querySelector('[data-js="todoDue"]'),
  addNewListButton: document.querySelector('[data-js="addNewListButton"]')
}

export const addNewListButtonClickListener = () => {
  todoForm.addNewListButton.addEventListener('click', () => {
    if (todoForm.text.value !== '') {
      createNewList(todoForm.text.value, todoForm.due.value);

      todoForm.text.value = '';
      todoForm.due.value = '';
    }
  })
}
