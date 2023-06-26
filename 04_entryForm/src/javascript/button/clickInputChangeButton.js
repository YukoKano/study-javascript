import { changeView } from "../changeView.js";

export const clickInputChange = () => {
  const button = document.querySelector(`[data-js="inputChangeButton"]`);

  button.addEventListener("click", () => {
    changeView("input");
  })
}