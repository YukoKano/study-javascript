import { createOption } from "../createOption.js";
import { COLORLIST } from "../constants.js";

export const createCarColorSelectItem = () => {
  const colorSelectMenu = document.querySelector('[data-js="colorSelectMenu"]');

  COLORLIST.forEach((item) => {
    const option = createOption(item);
    colorSelectMenu.appendChild(option);
  });
}