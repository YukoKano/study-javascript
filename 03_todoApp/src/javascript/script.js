import { checkOverdue, toggleDisplay, addCheckbox, addLabel, addDeleteButton,createTodo, todo, todoListBox,addButton, resetButton, showFinishedButton } from "./module.js"

window.onload = () => {
  let todoLists = [];
  // main-------------------------------------------------------------------------
  if (localStorage.hasOwnProperty('todoLists')) {
    todoLists = JSON.parse(localStorage.getItem('todoLists'));
    for (var i = 0; i < todoLists.length; i++) {
      !todoLists[i].isDeleted && createTodo(todoLists[i], i);
    }
  }

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

  showFinishedButton.addEventListener('click', () => {
    showFinishedButton.checked ? toggleDisplay('show') : toggleDisplay('hide');
  });

  resetButton.addEventListener('click', () => {
    const result = confirm('本当に削除しますか？');
    if (result) {
      localStorage.clear();
      todoLists.length = 0;
      document.querySelectorAll('.todoList').forEach((item) => { item.remove(); })
    }
  });
}