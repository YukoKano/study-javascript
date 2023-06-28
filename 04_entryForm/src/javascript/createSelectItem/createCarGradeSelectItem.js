import { createOption } from "../createOption.js";
import { GRADELIST, GRADEYEARRANGE } from "../constants.js";

export const createCarGradeSelectItem = () => {
  const modelSelectMenu = document.querySelector("[data-js='modelSelectMenu']");

  const makerSelectMenu = document.querySelector("[data-js='makerSelectMenu']");
  const carNameSelectMenu = document.querySelector("[data-js='carNameSelectMenu']");
  const modelYearSelectMenu = document.querySelector("[data-js='modelYearSelectMenu']");

  const selectMenu = new Array(makerSelectMenu, carNameSelectMenu, modelYearSelectMenu);

  selectMenu.forEach((item) => {
    item.addEventListener("change", () => {
      // DOM上のoptionタグをリセットする
      for (let i = modelSelectMenu.options.length - 1; i >= 0; i--) {
        if (modelSelectMenu.options[i].value && modelSelectMenu.options[i].value !== "unknown") {
          modelSelectMenu.remove(i);
        }
      }

      const makerItem = makerSelectMenu.value;
      const carItem = carNameSelectMenu.value;
      const yearItem = modelYearSelectMenu.value;

      if (makerItem && carItem && yearItem) {
        // 全て入力されている時、optionタグを追加する
        modelSelectMenu.disabled = false;

        // 指定された周辺の年式のものを選べるようにする
        const maxYear = parseInt(yearItem) + parseInt(GRADEYEARRANGE);
        const minYear = parseInt(yearItem) - parseInt(GRADEYEARRANGE);

        GRADELIST.forEach((item) => {
          if (item.maker === makerItem && item.car === carItem) {
            if (item.year > minYear && item.year < maxYear) {
              const grade = {
                value: item.grade,
                label: item.grade
              }
              modelSelectMenu.appendChild(createOption(grade));
            }
          }
        });
      } else  {
        modelSelectMenu.disabled = true;
      }
    })

  })
}