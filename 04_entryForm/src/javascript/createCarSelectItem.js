import { createOption } from "./createOption.js";

export const createCarSelectItem = () => {
  const carList = [
    {
      value: "serena",
      label: "セレナ",
      maker: "nissan"
    },
    {
      value: "aria",
      label: "アリア",
      maker: "nissan"
    },
    {
      value: "sakura",
      label: "サクラ",
      maker: "nissan"
    },
    {
      value: "note",
      label: "ノート",
      maker: "nissan"
    },
    {
      value: "aqua",
      label: "アクア",
      maker: "toyota"
    },
    {
      value: "golf",
      label: "ゴルフ",
      maker: "volkswagen"
    }
  ];

  const carSelectMenu = document.querySelector('[data-js="carSelectMenu"]');
  const makerSelectMenu = document.querySelector('[data-js="makerSelectMenu"]');

  makerSelectMenu.addEventListener("change", () => {
    // DOM上のcarNameにあるoptionタグをリセットする
    for (let i = carSelectMenu.options.length - 1; i >= 0; i--) {
      if (carSelectMenu.options[i].value !== '') {
        carSelectMenu.remove(i);
      }
    }

    // メーカー名にあった車種をoptionタグに追加する
    const makerItem = makerSelectMenu.value;
    console.log(makerItem);

    // 選択してください、だった場合、車種名のselectを選択できないようにする
    if (makerItem !== "") {
      carSelectMenu.disabled = false;
      carList.forEach((item) => {
        if (item.maker === makerItem) {
          carSelectMenu.appendChild(createOption(item));
        }
      })
    } else if (makerItem === "") {
      carSelectMenu.disabled = true;
    }
  })
}