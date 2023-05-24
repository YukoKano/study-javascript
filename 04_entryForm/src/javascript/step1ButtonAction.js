import { checkFormStatus } from "./checkFormStatus.js";

export const step1ButtonAction = () => {
  const step1Button = document.querySelector("[data-js='step1NextButton']");

  step1Button.addEventListener("click", () => {
    const formStatusObj = checkFormStatus();
    const resultList = Object.keys(formStatusObj).map((key) => formStatusObj[key]);

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