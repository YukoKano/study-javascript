import { createOption } from "./createOption.js"

export const createMileageSelectItem = () => {
  const range = 10;
  const mileageText = "万キロ";

  const mileageSelectMenu = document.querySelector("[data-js='mileageSelectMenu']");


  // 一番最初は未満
  const firstItem = {
    value: "under10000",
    label: `1${mileageText}未満`
  }
  const firstOption = createOption(firstItem);
  mileageSelectMenu.appendChild(firstOption);

  // それ以降は以上
  for (let i = 1; i <= range; i++) {
    const item = {
      value: `${i*10000}over`,
      label: `${i}${mileageText}以上`
    }

    const option = createOption(item);
    mileageSelectMenu.appendChild(option);
  }
}