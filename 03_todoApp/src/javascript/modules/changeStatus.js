import { loadLocalStorageLists } from "./loadLocalStorageLists.js";
import { updateLocalStorageLists } from "./updateLocalStorageLists.js";

export const changeStatus = (item, action) => {
  const todoLists = loadLocalStorageLists();

   // itemの親要素を取得して、何番目のデータかを把握する
  const list = item.target.parentNode;
  const targetListData = todoLists[list.dataset.list];

  switch (action) {
    // 削除ボタンが押された時
    case "delete":
      targetListData.isDeleted = true;
      list.classList.add('hide');
      break;

    // チェックボックスが押された時
    case "check":
      // チェックボックスのステータス判定
      if (item.target.checked) {
        targetListData.isChecked = true;
        list.classList.add('finished');
        setTimeout((i) => { i.target.parentNode.classList.add('hide'); }, 1000, item);
      } else {
        targetListData.isChecked = false;
        list.classList.remove('finished');
      }
      break;
  }

  updateLocalStorageLists(todoLists);
}
