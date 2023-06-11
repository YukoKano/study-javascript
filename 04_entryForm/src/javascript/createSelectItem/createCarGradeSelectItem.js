import { createOption } from "../createOption.js";
import { GRADELIST } from "../constraints.js";

export const createCarGradeSelectItem = () => {
  const modelSelectMenu = document.querySelector("[data-js='modelSelectMenu']");

  const makerSelectMenu = document.querySelector("[data-js='makerSelectMenu']");
  const carNameSelectMenu = document.querySelector("[data-js='carNameSelectMenu']");
  const modelYearSelectMenu = document.querySelector("[data-js='modelYearSelectMenu']");

  const selectMenu = document.querySelectorAll(`fieldset[name="carInformation"] select[required]`);

  // 直す：走行距離の時も処理が走る
  selectMenu.forEach((item) => {
    item.addEventListener("change", () => {
      const makerItem = makerSelectMenu.value;
      const carItem = carNameSelectMenu.value;
      const yearItem = modelYearSelectMenu.value;

      // DOM上のoptionタグをリセットする
      for (let i = modelSelectMenu.options.length - 1; i >= 0; i--) {
        if (modelSelectMenu.options[i].value !== "" && modelSelectMenu.options[i].value !== "unknown") {
          modelSelectMenu.remove(i);
        }
      }

      if (makerItem !== "" & carItem !== "" & yearItem !== "") {
        // 全て入力されている時、optionタグを追加する
        modelSelectMenu.disabled = false;

        // 指定された周辺の年式のものを選べるようにする
        const yearRange = 5;

        const maxYear = parseInt(yearItem) + parseInt(yearRange);
        const minYear = parseInt(yearItem) - parseInt(yearRange);

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