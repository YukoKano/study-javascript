export const addRequiredType = (item) => {
  const type = item.required;
  const label = document.querySelector(`label[for=${item.name}]`);

  const span = document.createElement("span");
  let text;

  if (type) {
    text = document.createTextNode("必須");
    span.classList.add("requiredText");
  } else {
    text = document.createTextNode("任意");
    span.classList.add("optional");
  }
  span.append(text);
  label.appendChild(span);
}