window.onload = () => {
  const todo = {
    text: document.querySelector(".todoText"),
    due: document.querySelector(".todoDue")
  }

  const todoListBox = document.querySelector(".todoListBox");

  const addButton = document.querySelector(".addButton");
  const resetButton = document.querySelector('.resetButton');
  const showFinishedButton = document.querySelector('.showFinishedItemButton');

  // listが何個あるかを確認する変数
  let index = 0;

  // 期日が過ぎているか確認する関数
  const checkOverdue = (due) => {
    const today = new Date(Date.now());
    const deadline = new Date(due);
    if (today > deadline) {
      return true;
    } else {
      return false;
    }
  }

  // 完了したリストの表示を切り替える関数
  const toggleDisplay = (state) => {
    document.querySelectorAll('.finished').forEach((item) => {
      if (state === 'hide') {
        item.classList.add("hide");
      } else if (state === 'show') {
        item.classList.remove("hide");
      }
    })
  };


  // listを作成する関数
  const createTodo = (item) => {
    const list = document.createElement('li');
    list.setAttribute('data-list', index);
    list.classList.add('todoList');


    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add("checkbox");

    // check済みなら表示しない
    if (item.checked) {
      list.classList.add("finished", "hide");
      checkbox.checked = true;
    }

    list.appendChild(checkbox);
    list.appendChild(document.createTextNode(item.content));

    if (item.dueDate != "") {
      const due = document.createElement('span');
      due.appendChild(document.createTextNode(item.dueDate));

      // 期限過ぎてるか判定
      if (checkOverdue(item.dueDate)) {
        due.classList.add("overdue");
      }
      list.appendChild(due);
    }

    todoListBox.appendChild(list);
  }

  // localStorageにデータがあったら読み込む
  console.log(`現在、localstrageは${localStorage.length}個のアイテムがあります`);
  if (localStorage.length != 0) {
    for (var i = 0; i < localStorage.length; i++) {
      // jsonで保存されているデータを解凍してlistを作成
      const todoSavedItem = JSON.parse(localStorage.getItem(`todo${i}`));
      createTodo(todoSavedItem);
      index++;
    }
  }

  // textboxの入力を追加
  addButton.addEventListener('click', () => {
    // 中身が空っぽじゃない時、入力したデータをjsonに変換する
    if (todo.text.value != "") {
      const listData = {
        content: todo.text.value,
        dueDate: todo.due.value,
        checked: false
      };
      const jsonString = JSON.stringify(listData);

      // listを作成する
      createTodo(listData);
      localStorage.setItem(`todo${index}`, jsonString);

      index++;
      todo.text.value = "";
      todo.due.value = "";
    }
  })

  // checkbox checkしたら削除
  // Q:作成したてのtodoが消せない
  document.querySelectorAll('.checkbox').forEach((item) => {
    item.addEventListener(('change'), () => {
      const list = item.parentNode;
      const itemKey = `todo${list.dataset.list}`;

      // checkedを置き換えて保存する
      const newListData = {
        content: JSON.parse(localStorage.getItem(itemKey)).content,
        dueDate: JSON.parse(localStorage.getItem(itemKey)).dueDate,
        checked: item.checked
      };

      localStorage.setItem(itemKey, JSON.stringify(newListData));

      // checkされたら消える、外したら戻す
      if (item.checked) {
        list.classList.add('finished');
        setTimeout((i) => { i.parentNode.classList.add("hide"); }, 1000, item);
      } else {
        list.classList.remove('finished');
      }
    })
  })

  // localstrageを削除する
  resetButton.addEventListener('click', () => {
    const result = confirm('本当に削除しますか？');
    if (result) {
      localStorage.clear();
      document.querySelectorAll('.todoList').forEach((item) => { item.remove(); })
      index = 0;
    }
  });

  // 完了したlistの表示非表示
  showFinishedButton.addEventListener('click', () => {
    if (showFinishedButton.checked) {
      toggleDisplay('show');
    } else {
      toggleDisplay('hide');
    }
  })
}