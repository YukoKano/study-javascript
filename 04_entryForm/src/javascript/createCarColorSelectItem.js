import { createOption } from "./createOption.js";

export const createCarColorSelectItem = () => {
  const colorList = [
    {
      value: "white",
      label: "白"
    },
    {
      value: "black",
      label: "黒"
    },
    {
      value: "gray",
      label: "グレー"
    },
    {
      value: "silver",
      label: "シルバー"
    },
    {
      value: "red",
      label: "赤"
    },
    {
      value: "yellow",
      label: "黄色"
    },
    {
      value: "blue",
      label: "青色"
    },
    {
      value: "green",
      label: "緑色"
    },
    {
      value: "other",
      label: "その他"
    }
  ];

  const colorSelectMenu = document.querySelector('[data-js="colorSelectMenu"]');

  colorList.forEach((item) => {
    const option = createOption(item);
    colorSelectMenu.appendChild(option);
  });
}