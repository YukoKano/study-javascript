import { renderLists } from "./modules/renderLists.js"
import { addButtonClickListener } from "./modules/addButton.js"
import { resetButtonClickListener } from "./modules/resetButton.js"
import { showButtonClickListener } from "./modules/showButton.js"

window.onload = () => {
  // リストを表示する
  renderLists();

  // リストを追加するボタンの挙動判定
  addButtonClickListener();

  // 完了済みの表示非表示を切り替えるボタンの挙動判定
  showButtonClickListener();

  // ローカルストレージのデータを全削除するボタンの挙動判定
  resetButtonClickListener();
}