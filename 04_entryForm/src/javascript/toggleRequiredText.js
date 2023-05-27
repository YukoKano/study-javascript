import { returnCustomerInformationFormObject } from "./returnCustomerInformationFormObject.js";
import { returnRequiredSelect } from "./returnRequiredSelect.js";

export const toggleRequiredText = () => {
  // 必須のものをobjectにして配列に格納する
  const selectMenuList = returnRequiredSelect();
  const inputList = returnCustomerInformationFormObject();

  const allList = selectMenuList.concat(inputList);

  allList.forEach((item) => {
    const menu = item.menu;

    menu.addEventListener("change", () => {
      const required = item.label.querySelector(".requiredText");
      if (menu.value !== "") {
        required.textContent = "ok";
        required.classList.add("ok");

        // atterntionが出てた時
        const attention = document.querySelector(`[data-js="${item.name}Attention"]`);
        attention.classList.add("hide");
      } else {
        required.textContent = "必須";
        required.classList.remove("ok");

        // atterntionが出てた時
        const attention = document.querySelector(`[data-js="${item.name}Attention"]`);
        attention.classList.remove("hide");
      }
    })
  })
}