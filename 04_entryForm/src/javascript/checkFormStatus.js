export const checkFormStatus = () => {
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
      name: "year",
      menu: document.querySelector("[data-js='yearSelectMenu']"),
      label: document.querySelector("[data-js='yearSelectMenuLabel']"),
    },
    {
      name: "mileage",
      menu: document.querySelector("[data-js='mileageSelectMenu']"),
      label: document.querySelector("[data-js='mileageSelectMenuLabel']"),
    }
  ]

  var resultList = new Object();

  selectMenuList.forEach((item) => {
    if (item.menu.value !== "") {
      resultList[item.name] = true;
    } else {
      resultList[item.name] = false;
    }

    item.menu.addEventListener("change", () => {
      if (item.menu.value !== "") {
        resultList[item.name] = true;
      } else {
        resultList[item.name] = false;
      }
    });
  })

  return resultList;
}