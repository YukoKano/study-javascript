import { addDue } from "./addDue.js";

export const addLabel = (content, due, listItem) => {
  const label = document.createElement('label');
  label.setAttribute('for', `tab${listItem.dataset.list}`);
  label.appendChild(document.createTextNode(content));
  listItem.appendChild(label);

  addDue(due, listItem);
}