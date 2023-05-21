export const step1ButtonAction = () => {
  const selectMenuList = [
    {
      name: "maker",
      menu: document.querySelector("[data-js='makerSelectMenu']"),
      label: document.querySelector("[data-js='makerSelectMenuLabel']"),
    },
    {
      name: "car",
      menu: document.querySelector("[data-js='carSelectMenu']"),
      label: document.querySelector("[data-js='carSelectMenuLabel']"),
    },
    {
      name: "maker",
      menu: document.querySelector("[data-js='yearSelectMenu']"),
      label: document.querySelector("[data-js='yearSelectMenuLabel']"),
    },
    {
      name: "mileage",
      menu: document.querySelector("[data-js='mileageSelectMenu']"),
      label: document.querySelector("[data-js='mileageSelectMenuLabel']"),
    }
  ]

  const step1Button = document.querySelector("[data-js='step1NextButton']");

  step1Button.addEventListener("click", () => {
    // 必須項目のmenuに項目があるかどうか
    const resultList = [];
    selectMenuList.forEach((item) => {
      if (item.menu.value === "") {
        resultList.push(false);
      } else {
        resultList.push(true);
      }
    })

    // 全てOKか判定
    const result = resultList.every((item) => item === true);
    if (result) {
      const step2Fieldset = document.querySelector("[data-js='step2Fieldset']");
      step2Fieldset.classList.remove("hide");
    } else {
      // バリデーション入れたいPOINT
      alert("未入力の箇所があります");
    }

  })
}