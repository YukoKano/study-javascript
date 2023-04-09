window.onload = () => {
  const todoContent = document.getElementById("todoContent");
  const todoLists = document.querySelector(".todoLists");
  const todoDue = document.querySelector(".dueDate");

  let index = 0;

  const createList = (item) => {
    const list = document.createElement('li');
    if (item.checked) {
      list.className = "finished";
      list.style.display = "none";
    }

    const checkbox = document.createElement('input');
    checkbox.setAttribute('data-list', index);
    checkbox.setAttribute('type', 'checkbox');
    list.appendChild(checkbox);

    list.appendChild(document.createTextNode(item.content));

    const due = document.createElement('p');
    due.appendChild(document.createTextNode(item.dueDate));
    list.appendChild(due);

    todoLists.appendChild(list);
  }

  console.log(`現在、localstrageは${localStorage.length}個のアイテムがあります`);

  // localStorageにデータがあったら読み込む
  if (localStorage.length != 0) {
    for (var i = 0; i < localStorage.length; i++) {
      // jsonで保存されているデータを解凍する
      const todoSavedItem = JSON.parse(localStorage.getItem(`todo${i}`));
      console.log(todoSavedItem);

      createList(todoSavedItem);

      index++;
    }
  }

  // textboxの入力を追加
  document.querySelector(".addButton").addEventListener('click', () => {
    // 入力したデータをjsonに変換する
    if (todoContent.value != "") {
      const listData = {
        content: todoContent.value,
        dueDate: todoDue.value,
        checked: false
      };
      const jsonString = JSON.stringify(listData);

      // listを作成する
      createList(listData);
      localStorage.setItem(`todo${index}`, jsonString);

      index++;
      todoContent.value = "";
      todoDue.value = "";
    }
  })

  // checkbox checkしたら削除
  document.querySelectorAll('.todoLists li input').forEach((item) => {
    item.addEventListener(('change'), () => {
      const newListData = {
        content: JSON.parse(localStorage.getItem(`todo${item.dataset.list}`)).content,
        checked: true
      };

      localStorage.setItem(`todo${item.dataset.list}`,
        JSON.stringify(newListData));

      item.parentNode.classList.add('finished');
      setTimeout((i) => { i.parentNode.style.display = "none" }, 1000, item);
    })
  })

  // localstrage 削除
  const resetButton = document.querySelector('#reset');
  resetButton.addEventListener('click', () => {
    const result = confirm('本当に削除しますか？');
    if (result) {
      localStorage.clear();
      document.querySelectorAll('.todoLists li').forEach((item) => { item.remove(); })
      index = 0;
    }
  });

  // 完了したlistの表示非表示
  const toggleDisplay = (state) => {
      document.querySelectorAll('.finished').forEach((item) => {
        if (state === 'none') {
          item.style.display = "none";
        } else if (state === 'block') {
          item.style.display = "block";
        }
      })
  };

  const showFinishedButton = document.querySelector('#show');
  showFinishedButton.addEventListener('click', () => {
    if (showFinishedButton.checked) {
      toggleDisplay('block');
    } else {
      toggleDisplay('none');
    }
  })
}