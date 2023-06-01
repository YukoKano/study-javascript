import { createOption } from "./createOption.js";
import { createYearSelectItem } from "./createYearSelectItem.js";

export const createCarGradeSelectItem = () => {
  const gradeSelectMenu = document.querySelector("[data-js='gradeSelectMenu']");
  const makerSelectMenu = document.querySelector("[data-js='makerSelectMenu']");
  const carNameSelectMenu = document.querySelector("[data-js='carNameSelectMenu']");
  const modelYearSelectMenu = document.querySelector("[data-js='modelYearSelectMenu']");

  const yearRange = 5;

  const gradeList = [
    {
      maker: "toyota",
      car: "aqua",
      grade: "G",
      year: 2021
    },
    {
      maker: "toyota",
      car: "aqua",
      grade: "AQUA MARINE",
      year: 2020
    },
    {
      maker: "nissan",
      car: "serena",
      grade: "X",
      year: 2022
    },
    {
      maker: "nissan",
      car: "serena",
      grade: "ハイウェイスターＶ",
      year: 2022
    },
    {
      maker: "nissan",
      car: "serena",
      grade: "オーテック",
      year: 2022
    }
  ]

  makerSelectMenu.addEventListener("change", () => {
    if (carNameSelectMenu.value === "") {
      gradeSelectMenu.disabled = true;
    }
  })

  modelYearSelectMenu.addEventListener("change", () => {
    const makerItem = makerSelectMenu.value;
    const carItem = carNameSelectMenu.value;
    const yearItem = modelYearSelectMenu.value;

    // DOM上のoptionタグをリセットする
    for (let i = gradeSelectMenu.options.length - 1; i >= 0; i--) {
      if (gradeSelectMenu.options[i].value !== "" && gradeSelectMenu.options[i].value !== "unknown") {
        gradeSelectMenu.remove(i);
      }
    }

    // optionタグを追加する
    if (carItem.value !== "") {
      gradeSelectMenu.disabled = false; // 効力強い……

      // 指定された周辺の年式のものを選べるようにする
      const maxYear = parseInt(yearItem) + parseInt(yearRange);
      const minYear = parseInt(yearItem) - parseInt(yearRange);

      gradeList.forEach((item) => {
        if (item.maker === makerItem && item.car === carItem) {
          if (item.year > minYear && item.year < maxYear) {
            const grade = {
              value: item.grade,
              label: item.grade
            }
            gradeSelectMenu.appendChild(createOption(grade));
          }
        } else {
          // gradeSelectMenu.disabled = true;
        }
      });
    }
  })
}