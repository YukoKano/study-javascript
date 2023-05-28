import { returnCustomerInformationFormObject } from "./returnCustomerInformationFormObject.js";
import { returnRequiredSelect } from "./returnRequiredSelect.js";

export const toggleRequiredText = () => {
  // 必須のものをobjectにして配列に格納する
  let selectMenuList = returnRequiredSelect();
  let inputList = returnCustomerInformationFormObject();

  let allList = selectMenuList.concat(inputList);

  console.log(allList);

  const toggleText = (condition, item) => {
    const requiredText = item.label.querySelector(".requiredText")
    if (condition) {
      requiredText.textContent = "ok";
      requiredText.classList.add("ok");

      // atterntionが出てた時
      const attention = document.querySelector(`[data-js="${item.name}Attention"]`);
      attention.classList.add("hide");
    } else {
      requiredText.textContent = "必須";
      requiredText.classList.remove("ok");

      // atterntionが出てた時
      const attention = document.querySelector(`[data-js="${item.name}Attention"]`);
      attention.classList.remove("hide");
    }
  }

  allList.forEach((item) => {
    const menu = item.menu;
    const name = item.name;

    menu.addEventListener("change", () => {
      switch (name) {
        case "maker":
        case "carName":
        case "modelYear":
        case "mileage":
          toggleText(item.value !== "", item);
          break;
        case "customerName":
          const regex = new RegExp(/^[一-龯ぁ-んァ-ヶー]+$/);
          const isJapaneseInput = regex.test(menu.value);

          toggleText(isJapaneseInput !== false, item);
          break;
        case "customerPostcode":
          console.log()
          console.log(menu.value.length);
          toggleText(menu.value.length === 7, item);
          break;
        case "customerTel":
          toggleText(menu.value.length === 11, item);
          break;
        case "customerEmail":
          const emailPattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
          toggleText(emailPattern.test(menu.value), item);
          break;
      }
    })
  })

  // 一旦radioだけ別枠
  const campaignRadio = document.getElementsByName("campaign");
  const campaignLabel = document.querySelector(`[ data-js="campaignLabel"]`);

  const campaignItem = {
    name: "campaign",
    menu: campaignRadio,
    label: campaignLabel,
  }

  campaignRadio.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        toggleText(radio.checked, campaignItem);
      }
    })
  })
}