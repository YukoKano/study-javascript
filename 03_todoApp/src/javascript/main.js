import { renderLists } from "./modules/renderLists.js"
import { addButtonClickListener } from "./modules/addButton.js"
import { resetButtonClickListener } from "./modules/resetButton.js"
import { showButtonClickListener } from "./modules/showButton.js"

window.onload = () => {
  renderLists();

  addButtonClickListener();

  showButtonClickListener();
  resetButtonClickListener();
}