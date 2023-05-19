import { createOption } from "./createOption.js";

export const createMakerSelectItem = () => {
  const makerList = [
    {
      value: "nissan",
      label: "日産",
      type: "domestic"
    },
    {
      value: "toyota",
      label: "トヨタ",
      type: "domestic"
    },
    {
      value: "matsuda",
      label: "マツダ",
      type: "domestic"
    },
    {
      value: "volkswagen",
      label: "フォルクスワーゲン",
      type: "overseas"
    }
  ];

  const makerSelectMenu = document.querySelector('[data-js="makerSelectMenu"]');

  // 国産車と外国車を分ける
  const domesticArray = [];
  const overseasArray = [];

  makerList.forEach((item) => {
    if (item.type === "domestic") {
      domesticArray.push(item);
    } else if (item.type === "overseas") {
      overseasArray.push(item);
    }
  });

  // 国産と海外を分けてグループ化する
  const createOptgroup = (array, label) => {
    const group = document.createElement("optgroup");
    group.label = label;
    array.forEach((item) => {
      group.appendChild(createOption(item));
    })
    makerSelectMenu.appendChild(group);
  }

  createOptgroup(domesticArray, "国内車");
  createOptgroup(overseasArray, "外国車");

}