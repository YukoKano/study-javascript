import { createOption } from "../createOption.js";
import { CARLIST } from "../constants.js";

export const createCarSelectItem = () => {


  const carNameSelectMenu = document.querySelector('[data-js="carNameSelectMenu"]');
  const makerSelectMenu = document.querySelector('[data-js="makerSelectMenu"]');

  makerSelectMenu.addEventListener("change", () => {
    // DOM上のcarNameにあるoptionタグをリセットする
    for (let i = carNameSelectMenu.options.length - 1; i >= 0; i--) {
      if (carNameSelectMenu.options[i].value !== '') {
        carNameSelectMenu.remove(i);
      }
    }

    // メーカー名にあった車種をoptionタグに追加する
    const makerItem = makerSelectMenu.value;

    // 選択してください、だった場合、車種名のselectを選択できないようにする
    if (makerItem) {
      carNameSelectMenu.disabled = false;
      CARLIST.forEach((item) => {
        if (item.maker === makerItem) {
          carNameSelectMenu.appendChild(createOption(item));
        }
      })
    } else  {
      carNameSelectMenu.disabled = true;
    }
  })
}