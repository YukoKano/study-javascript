window.onload = () => {
  const todoContent = document.getElementById("todoContent");
  const todoLists = document.querySelector(".todoLists");

  todoContent.addEventListener('change', () => {
    const list = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'finished');
    list.appendChild(checkbox);

    list.appendChild(document.createTextNode(todoContent.value));

    todoLists.appendChild(list);
    todoContent.value = "";
  })
}