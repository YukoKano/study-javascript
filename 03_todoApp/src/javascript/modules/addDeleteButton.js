import { loadListsArray } from "./loadListsArray.js";

export const addDeleteButton = (listItem) => {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('deleteButton');

  button.addEventListener('click', (item) => {
    const todoLists = loadListsArray();
    const list = item.target.parentNode;
    const listNum = list.dataset.list;

    todoLists[listNum].isDeleted = true;
    localStorage.setItem('todoLists', JSON.stringify(todoLists));

    // 消したものは絶対表示しない
    todoLists[listNum].isDeleted && list.classList.add('displayNone');
  })

  listItem.appendChild(button);
}