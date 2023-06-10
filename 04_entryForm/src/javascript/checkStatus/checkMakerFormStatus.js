import { changeRequiredText } from "../requiredText/changeRequiredText.js";
import { setFormStatus } from "./setFormStatus.js";
import { setValueToComfirm } from "../setValue/setValueToComfirm.js";


export const checkMakerFormStatus = () => {
  const name = "maker";

  const field = document.querySelector(`[data-js="${name}SelectMenu"]`);
  const label = document.querySelector(`label[for="${name}"]`);
  const text = label.querySelector(`span[class="requiredText"]`);


  field.addEventListener("change", () => {
    let status;

    if (field.value !== "") {
      status = true;
    } else {
      status = false;
    }
    changeRequiredText(text, status);
    setFormStatus(name, status);
    setValueToComfirm(label, field);
  })
}