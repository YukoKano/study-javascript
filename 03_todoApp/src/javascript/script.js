window.onload = () => {
  const todo = {
    text: document.querySelector('.todoText'),
    due: document.querySelector('.todoDue')
  }

  const todoListBox = document.querySelector('.todoListBox');

  const addButton = document.querySelector('.addButton');
  const resetButton = document.querySelector('.resetButton');
  const showFinishedButton = document.querySelector('.showFinishedItemButton');

  let todoLists = [];

  // 期日が過ぎているか確認する関数
  const checkOverdue = (due) => {
    const today = new Date(Date.now());
    const deadline = new Date(due);
    return (today > deadline ? true : false);
  }

  const createTodo = (item, index) => {
    const addCheckbox = () => {
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('id', `tab${index}`);
      checkbox.classList.add('checkbox');

      checkbox.addEventListener('change', (item) => {
        const list = item.target.parentNode;
        const listNum = list.dataset.list;

        // checkされたら消える、外したら戻す
        if (item.target.checked) {
          todoLists[listNum].isChecked = true;
          list.classList.add('finished');
          setTimeout((i) => { i.target.parentNode.classList.add('hide'); }, 1000, item);
        } else {
          todoLists[listNum].isChecked = false;
          list.classList.remove('finished');
        }

        localStorage.setItem("todoLists", JSON.stringify(todoLists));
      })

      // check済みなら表示しない
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

        // 期限過ぎてるか判定
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
        localStorage.setItem("todoLists", JSON.stringify(todoLists));

        const displayNone = () => {
          list.style.display = "none";
        }

        // 消したものは絶対表示しない
        todoLists[listNum].isDeleted && displayNone();
      })

      list.appendChild(button);
    }

    // list作成
    const list = document.createElement('li');
    list.setAttribute('data-list', index);
    list.classList.add('todoList');

    addCheckbox();
    addLabel();
    addDeleteButton();

    todoListBox.appendChild(list);
  }

  // 完了したリストの表示を切り替える関数
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


  if (localStorage.hasOwnProperty("todoLists")) {
    todoLists = JSON.parse(localStorage.getItem("todoLists"));
    for (var i = 0; i < todoLists.length; i++) {
      !todoLists[i].isDeleted && createTodo(todoLists[i], i);
    }
  }

  // textboxの入力を追加
  addButton.addEventListener('click', () => {
    // 中身が空っぽじゃない時、入力したデータをjsonに変換する
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
      localStorage.setItem("todoLists", jsonString);

      todo.text.value = '';
      todo.due.value = '';
    }
  })

  // 完了したlistの表示非表示
  showFinishedButton.addEventListener('click', () => {
    showFinishedButton.checked ? toggleDisplay('show') : toggleDisplay('hide');
  })

  // localstrageをclearする
  resetButton.addEventListener('click', () => {
    const result = confirm('本当に削除しますか？');
    if (result) {
      localStorage.clear();
      todoLists.length = 0;
      document.querySelectorAll('.todoList').forEach((item) => { item.remove(); })
    }
  });
}