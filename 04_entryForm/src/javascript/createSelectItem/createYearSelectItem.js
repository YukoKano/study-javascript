import { createOption } from "../createOption.js"
import { YEARRANGE } from "../constants.js";

export const createYearSelectItem = () => {
  const nowYear = new Date().getFullYear();
  const modelYearSelectMenu = document.querySelector("[data-js='modelYearSelectMenu']");

  for (let i = 0; i < YEARRANGE; i++) {
    const year = nowYear - i;

    const item = {
      value: year,
      label: `${year}年式`
    }
    const option = createOption(item);
    modelYearSelectMenu.appendChild(option);
  }
}