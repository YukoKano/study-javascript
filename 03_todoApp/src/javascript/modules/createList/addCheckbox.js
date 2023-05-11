import { changeStatus } from "./changeStatus.js";

export const addCheckbox = (listItem, isChecked) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `tab${listItem.dataset.list}`); // labelと関連づけるため
  checkbox.classList.add('checkbox');

  // check済みだったら予めcheckedにする
  if (isChecked) {
    listItem.classList.add('finished', 'hide');
    checkbox.checked = true;
  }

  checkbox.addEventListener('change', (item) => {
    changeStatus(item, "check");
  })

  listItem.appendChild(checkbox);
}