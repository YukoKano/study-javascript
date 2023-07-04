import { requiredForm } from "../checkStatus/requiredForm.js";
import { changeView } from "../changeView.js";
import { toggleAttentionText } from "../toggleAttentionText.js";

export const clickConfirmButton = () => {
  const button = document.querySelector(`[data-js="comfirmButton"]`);

  button.addEventListener("click", () => {
    // 未入力はテキストを表示
    const falseInput = requiredForm.filter(item => !item.status).map(item => item.name);
    falseInput.forEach((item) => {
      toggleAttentionText(item, item.status);
    })

    // status確認
    const formStatus = requiredForm.map(item => item.status);
    const result = formStatus.every((item) => item);

    if (result) {
      changeView("confirm");
    }
  })
}