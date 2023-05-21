import { createOption } from "./createOption.js"

export const createYearSelectItem = () => {
  const basicYear = 2023;
  const yearRange = 15;

  const yearSelectMenu = document.querySelector("[data-js='yearSelectMenu']");

  for (let i = 0; i < yearRange; i++) {
    const year = basicYear - i;

    const item = {
      value: year,
      label: `${year}年式`
    }
    const option = createOption(item);
    yearSelectMenu.appendChild(option);
  }
}