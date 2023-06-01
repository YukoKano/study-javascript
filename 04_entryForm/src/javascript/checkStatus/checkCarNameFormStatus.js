import { changeRequiredText } from "../changeRequiredText.js";
import { setFormStatus } from "./setFormStatus.js";

export const checkCarNameFormStatus = () => {
  const name = "carName";

  console.log(`check ${name} status`);

  const field = document.querySelector(`[data-js="${name}SelectMenu"]`);
  const label = document.querySelector(`label[for="${name}"]`);
  const type = label.querySelector(`span[class="requiredText"]`);
  let status;

  field.addEventListener("change", () => {
    if (field.value !== "") {
      status = true;
    } else {
      status = false;
    }
    changeRequiredText(type, status);
    setFormStatus(name, status);
  })

  // makerがリセットされたら
  const makerField = document.querySelector(`[data-js="makerSelectMenu"]`);
  let makerValue;

  makerField.addEventListener("change", () => {
    makerValue = makerField.value;

    if (makerValue === "") {
      status = false;
    }
    changeRequiredText(type, status);
    setFormStatus(name, status);
  })
}