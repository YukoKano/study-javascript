import { changeRequiredText } from "../changeRequiredText.js";
import { setFormStatus } from "./setFormStatus.js";

export const checkMakerFormStatus = () => {
  const name = "maker";

  console.log(`check ${name} status`);

  const field = document.querySelector(`[data-js="${name}SelectMenu"]`);
  const label = document.querySelector(`label[for="${name}"]`);
  const text = label.querySelector(`span[class="requiredText"]`);

  let status;

  field.addEventListener("change", () => {
    if (field.value !== "") {
      status = true;
    } else {
      status = false;
    }
    changeRequiredText(text, status);
    setFormStatus(name, status);
  })

  // console.log(label, makerField, text);
}