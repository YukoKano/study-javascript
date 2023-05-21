export const toggleRequiedText = () => {
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

  selectMenuList.forEach((item) => {
    const menu = item.menu;

    menu.addEventListener("change", () => {
      const required = item.label.querySelector(".requiredText");
      if (menu.value !== "") {
        required.textContent = "ok"
        required.classList.add("ok")
      } else {
        required.textContent = "必須"
        required.classList.remove("ok")
      }
    })
  })
}