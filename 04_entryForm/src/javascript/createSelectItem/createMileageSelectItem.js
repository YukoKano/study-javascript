import { createOption } from "../createOption.js"
import { MILEAGE } from "../constants.js";

export const createMileageSelectItem = () => {
  const range = 10;
  const mileageText = "万キロ";

  const mileageSelectMenu = document.querySelector("[data-js='mileageSelectMenu']");

  // それ以降は以上
  MILEAGE.forEach((item) => {
    const option = createOption(item);
    mileageSelectMenu.appendChild(option);
  })
}