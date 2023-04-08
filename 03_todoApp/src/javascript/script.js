window.onload = () => {
  const todoContent = document.getElementById("todoContent");
  const todoLists = document.querySelector(".todoLists");

  let index = 0;

  console.log(`現在、localstrageは${localStorage.length}個のアイテムがあります`);



  // localStorageにデータがあったら読み込む
  if (localStorage.length != 0) {
    for (var i = 0; i < localStorage.length; i++) {
      console.log(localStorage.getItem(`todo${i}`));
      const todoSavedItem = localStorage.getItem(`todo${i}`);

      const list = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('data-index', i);
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('name', 'finished');
      list.appendChild(checkbox);
      list.appendChild(document.createTextNode(todoSavedItem));

      todoLists.appendChild(list);

      index++;
    }
  }

  // textboxの入力を追加
  todoContent.addEventListener('change', () => {
    const list = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('data-index', index);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'finished');
    list.appendChild(checkbox);

    list.appendChild(document.createTextNode(todoContent.value));
    localStorage.setItem(`todo${index}`, todoContent.value);

    todoLists.appendChild(list);

    index++;
    todoContent.value = "";
  })

  const removeListItem = (i) => {
    console.log(`${i.dataset.index} checked`);
    i.parentNode.remove();
    // localStorage.removeItem(`todo${i.dataset.index}`);
  }

  // checkbox checkしたら削除
  document.querySelectorAll('.todoLists li input').forEach((item) => {
    item.addEventListener(('change'), () => {
      item.parentNode.classList.add('finished');
      setTimeout(removeListItem, 1000, item);
    })
  })

  // localstrage 削除
  const resetButton = document.querySelector('#reset');
  resetButton.addEventListener('click', () => {
    localStorage.clear();
    document.querySelectorAll('.todoLists li').forEach((item) => { item.remove(); })
    index = 0;
  });
}