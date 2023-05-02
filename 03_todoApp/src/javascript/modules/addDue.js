import { checkOverdue } from "./checkOverdue.js";

export const addDue = (due, listItem) => {
  if (due !== '') {
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(due));

    checkOverdue(due) && span.classList.add('overdue');

    listItem.appendChild(span);
  }
}