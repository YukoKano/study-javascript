export const addLabel = (listItem, content) => {
  const label = document.createElement('label');
  label.setAttribute('for', `tab${listItem.dataset.list}`);
  label.appendChild(document.createTextNode(content));
  listItem.appendChild(label);
}