export const addRequiredType = () => {
  // console.log("add Required Type");

  const items = document.querySelectorAll(`[data-js$="SelectMenu"]`);
  // console.log(items);

  items.forEach((item) => {
    const type = item.required;
    const label = document.querySelector(`label[for=${item.id}]`);

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
  })
}