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

    const makerItem = makerSelectMenu.value;

    if (makerItem) {
      carNameSelectMenu.disabled = false;

      // メーカー名にあった車種をoptionタグに追加する
      CARLIST.forEach((item) => {
        if (item.maker === makerItem) {
          carNameSelectMenu.appendChild(createOption(item));
        }
      })
    } else {
      // 選択してくださいだった場合、車種名のselectを選択できないようにする
      carNameSelectMenu.disabled = true;
    }
  })
}