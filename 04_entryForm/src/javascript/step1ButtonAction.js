import { checkFormStatus } from "./checkFormStatus.js";
import { returnRequiredSelect } from "./returnRequiredSelect.js";

export const step1ButtonAction = () => {
  const step1Button = document.querySelector("[data-js='step1NextButton']");
  const step2Fieldset = document.querySelector("[data-js='step2Fieldset']");

  step1Button.addEventListener("click", () => {
    const selectMenuList = returnRequiredSelect();
    checkFormStatus(selectMenuList, step2Fieldset);
  })
}