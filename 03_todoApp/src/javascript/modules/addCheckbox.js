import { loadListsArray } from "./loadListsArray.js";

export const addCheckbox = (isChecked, listItem) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `tab${listItem.dataset.list}`); // labelと関連づけるため
  checkbox.classList.add('checkbox');

  if (isChecked) {
    listItem.classList.add('finished', 'hide');
    checkbox.checked = true;
  }

  checkbox.addEventListener('change', (item) => {
    const todoLists = loadListsArray();

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