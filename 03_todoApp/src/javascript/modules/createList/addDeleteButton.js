import { changeStatus } from "./changeStatus.js";

export const addDeleteButton = (listItem) => {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('deleteButton');

  button.addEventListener('click', (item) => {
    changeStatus(item, "delete");
  })

  listItem.appendChild(button);
}