import { displayNone } from "./displayNone.js";
import { todoLists } from "./renderLists.js"

const todoListBox = document.querySelector('[data-js="todoListBox"]');

const addCheckbox = (isChecked, listItem) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `tab${listItem.dataset.list}`); // labelと関連づけるため
  checkbox.classList.add('checkbox');

  if (isChecked) {
    listItem.classList.add('finished', 'hide');
    checkbox.checked = true;
  }

  checkbox.addEventListener('change', (item) => {
    const list = item.target.parentNode;
    const listNum = list.dataset.list;

    if (item.target.checked) {
      todoLists[listNum].isChecked = true;
      list.classList.add('finished');
      setTimeout((i) => { i.target.parentNode.classList.add('hide'); }, 1000, item);
    } else {
      todoLists[listNum].isChecked = false;
      list.classList.remove('finished');
    }

    localStorage.setItem('todoLists', JSON.stringify(todoLists)); // isCheckedの記録のため
  })

  listItem.appendChild(checkbox);
}

const checkOverdue = (due) => {
  const today = new Date(Date.now());
  const deadline = new Date(due);
  const overdue = today > deadline;
  return overdue;
}

const addDue = (due, listItem) => {
  if (due !== '') {
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(due));

    checkOverdue(due) && span.classList.add('overdue');

    listItem.appendChild(span);
  }
}

const addLabel = (content, due, listItem) => {
  const label = document.createElement('label');
  label.setAttribute('for', `tab${listItem.dataset.list}`);
  label.appendChild(document.createTextNode(content));
  listItem.appendChild(label);

  addDue(due, listItem);
}

const addDeleteButton = (listItem) => {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('deleteButton');

  button.addEventListener('click', (item) => {
    const list = item.target.parentNode;
    const listNum = list.dataset.list;

    todoLists[listNum].isDeleted = true;
    localStorage.setItem('todoLists', JSON.stringify(todoLists));

    // 消したものは絶対表示しない
    todoLists[listNum].isDeleted && displayNone(list);
  })

  listItem.appendChild(button);
}

export const createTodo = (object, index) => {
  const list = document.createElement('li');
  list.setAttribute('data-list', index); // indexは、配列の0から数えて何番目か
  list.classList.add('todoList__item');

  addCheckbox(object.isChecked, list);
  addLabel(object.content, object.due, list);
  addDeleteButton(list);

  todoListBox.appendChild(list);
}