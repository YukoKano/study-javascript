import { createOption } from "./createOption.js";
import { createYearSelectItem } from "./createYearSelectItem.js";

export const createCarGradeSelectItem = () => {
  const gradeSelectMenu = document.querySelector("[data-js='gradeSelectMenu']");
  const makerSelectMenu = document.querySelector("[data-js='makerSelectMenu']");
  const carSelectMenu = document.querySelector("[data-js='carSelectMenu']");
  const yearSelectMenu = document.querySelector("[data-js='yearSelectMenu']");

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
    if (carSelectMenu.value === "") {
      gradeSelectMenu.disabled = true;
    }
  })

  yearSelectMenu.addEventListener("change", () => {
    const makerItem = makerSelectMenu.value;
    const carItem = carSelectMenu.value;
    const yearItem = yearSelectMenu.value;

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