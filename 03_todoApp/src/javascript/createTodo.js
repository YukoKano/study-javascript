const todoListBox = document.querySelector('.todoListBox');

const addCheckbox = (item, index, listItem) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `tab${index}`);
  checkbox.classList.add('checkbox');

  checkbox.addEventListener('change', (item) => {
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

    localStorage.setItem('todoLists', JSON.stringify(todoLists));
  })

  if (item.isChecked) {
    listItem.classList.add('finished', 'hide');
    checkbox.checked = true;
  }

  listItem.appendChild(checkbox);
}

const checkOverdue = (due) => {
  const today = new Date(Date.now());
  const deadline = new Date(due);
  return (today > deadline ? true : false);
}

const addLabel = (item, index, listItem) => {
  const label = document.createElement('label');
  label.setAttribute('for', `tab${index}`);
  label.appendChild(document.createTextNode(item.content));
  listItem.appendChild(label);

  if (item.due != '') {
    const due = document.createElement('span');
    due.appendChild(document.createTextNode(item.due));

    checkOverdue(item.due) && due.classList.add('overdue');
    listItem.appendChild(due);
  }
}

const addDeleteButton = (listItem) => {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('deleteButton');
  button.addEventListener('click', (item) => {
    const list = item.target.parentNode;
    const listNum = list.dataset.list;
    todoLists[listNum].isDeleted = true;
    localStorage.setItem('todoLists', JSON.stringify(todoLists));

    const displayNone = () => {
      list.style.display = 'none';
    }

    // 消したものは絶対表示しない
    todoLists[listNum].isDeleted && displayNone();
  })

  listItem.appendChild(button);
}

export const createTodo = (item, index) => {
  const list = document.createElement('li');
  list.setAttribute('data-list', index);
  list.classList.add('todoList');

  addCheckbox(item,index, list);
  addLabel(item, index, list);
  addDeleteButton(list);

  todoListBox.appendChild(list);
}