import { requiredForm } from "../checkStatus/requiredForm.js";
import { toggleAttentionText } from "../toggleAttentionText.js";

export const clickNextButton = () => {
  const button = document.querySelector(`[data-js="step1NextButton"]`);

  button.addEventListener("click", () => {
    // 未入力はテキストを表示
    const falseInput = requiredForm.filter(item => item.type === "carInformation").filter(item => !item.status).map(item => item.name);
    falseInput.forEach((item) => {
      toggleAttentionText(item, item.status);
    })

    // 全てのstatusを確認
    const formStatus = requiredForm.filter(item => item.type === "carInformation").map(item => item.status);
    const result = formStatus.every((item) => item);

    if (result) {
      const nextFieldset = document.querySelector(`fieldset[name="customerInformation"]`)

      nextFieldset.classList.remove("hide");
    }
  })
}