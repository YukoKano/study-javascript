window.onload = () => {
  // setup-------------------------------------------------------------------------
  const todo = {
    text: document.querySelector('.todoText'),
    due: document.querySelector('.todoDue')
  }

  const todoListBox = document.querySelector('.todoListBox');

  const addButton = document.querySelector('.addButton');
  const resetButton = document.querySelector('.resetButton');
  const showFinishedButton = document.querySelector('.showFinishedItemButton');

  let todoLists = [];

  const checkOverdue = (due) => {
    const today = new Date(Date.now());
    const deadline = new Date(due);
    return (today > deadline ? true : false);
  }

  const toggleDisplay = (state) => {
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

  const createTodo = (item, index) => {
    // setup -------------------------------------
    const addCheckbox = () => {
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
        list.classList.add('finished', 'hide');
        checkbox.checked = true;
      }

      list.appendChild(checkbox);
    }

    const addLabel = () => {
      const label = document.createElement('label');
      label.setAttribute('for', `tab${index}`);
      label.appendChild(document.createTextNode(item.content));
      list.appendChild(label);

      if (item.due != '') {
        const due = document.createElement('span');
        due.appendChild(document.createTextNode(item.due));

        checkOverdue(item.due) && due.classList.add('overdue');
        list.appendChild(due);
      }
    }

    const addDeleteButton = () => {
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

      list.appendChild(button);
    }

    // main create list -------------------------------------
    const list = document.createElement('li');
    list.setAttribute('data-list', index);
    list.classList.add('todoList');

    addCheckbox();
    addLabel();
    addDeleteButton();

    todoListBox.appendChild(list);
  }

  // main-------------------------------------------------------------------------
  if (localStorage.hasOwnProperty('todoLists')) {
    todoLists = JSON.parse(localStorage.getItem('todoLists'));
    for (var i = 0; i < todoLists.length; i++) {
      !todoLists[i].isDeleted && createTodo(todoLists[i], i);
    }
  }

  addButton.addEventListener('click', () => {
    if (todo.text.value != '') {
      const list = {
        content: todo.text.value,
        due: todo.due.value,
        isChecked: false,
        isDeleted: false
      };
      todoLists.push(list);

      const jsonString = JSON.stringify(todoLists);

      createTodo(list, todoLists.length);
      localStorage.setItem('todoLists', jsonString);

      todo.text.value = '';
      todo.due.value = '';
    }
  })

  showFinishedButton.addEventListener('click', () => {
    showFinishedButton.checked ? toggleDisplay('show') : toggleDisplay('hide');
  });

  resetButton.addEventListener('click', () => {
    const result = confirm('本当に削除しますか？');
    if (result) {
      localStorage.clear();
      todoLists.length = 0;
      document.querySelectorAll('.todoList').forEach((item) => { item.remove(); })
    }
  });
}