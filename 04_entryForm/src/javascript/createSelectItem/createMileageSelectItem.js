import { createOption } from "../createOption.js"
import { MILEAGE } from "../constants.js";

export const createMileageSelectItem = () => {
  const mileageSelectMenu = document.querySelector("[data-js='mileageSelectMenu']");

  MILEAGE.forEach((item) => {
    const option = createOption(item);
    mileageSelectMenu.appendChild(option);
  })
}