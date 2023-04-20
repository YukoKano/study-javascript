export const todo = {
  text: document.querySelector('.todoText'),
  due: document.querySelector('.todoDue')
}

export const todoListBox = document.querySelector('.todoListBox');

export const addButton = document.querySelector('.addButton');
export const resetButton = document.querySelector('.resetButton');
export const showFinishedButton = document.querySelector('.showFinishedItemButton');

export const createTodo = (item, index) => {
  const list = document.createElement('li');
  list.setAttribute('data-list', index);
  list.classList.add('todList');

  addCheckbox(item,index, list);
  addLabel(item, index, list);
  addDeleteButton(list);

  todoListBox.appendChild(list);
}

export const checkOverdue = (due) => {
  const today = new Date(Date.now());
  const deadline = new Date(due);
  return (today > deadline ? true : false);
}

export const toggleDisplay = (state) => {
  document.querySelectorAll('.finished').forEach((item) => {
    switch (state) {
      case 'hide':
        item.classList.add('hide');
        break;
      case 'show':
        item.classList.remove('hide');
        break;
    }
  })
};

export const addCheckbox = (item, index, listItem) => {
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

export const addLabel = (item, index, listItem) => {
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

export const addDeleteButton = (listItem) => {
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