import { renderLocalStorageLists } from "./modules/renderLocalStorageLists.js"
import { addNewListButtonClickListener } from "./modules/addNewListButton.js"
import { resetButtonClickListener } from "./modules/resetButton.js"
import { showButtonClickListener } from "./modules/showButton.js"

window.onload = () => {
  // 最初にローカルストレージ内のリストを表示する
  renderLocalStorageLists();

  // リストを追加するボタンの挙動判定
  addNewListButtonClickListener();

  // 完了済みの表示非表示を切り替えるボタンの挙動判定
  showButtonClickListener();

  // ローカルストレージのデータを全削除するボタンの挙動判定
  resetButtonClickListener();
}