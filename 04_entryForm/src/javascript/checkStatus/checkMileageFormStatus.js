import { changeRequiredText } from "../requiredText/changeRequiredText.js";
import { setFormStatus } from "./setFormStatus.js";
import { setValueToComfirm } from "../setValue/setValueToComfirm.js";
import { toggleAttentionText } from "../toggleAttentionText.js";


export const checkMileageFormStatus = () => {
  const name = "mileage";

  const field = document.querySelector(`[data-js="${name}SelectMenu"]`);
  const label = document.querySelector(`label[for="${name}"]`);
  const type = label.querySelector(`span[class="requiredText"]`);

  field.addEventListener("change", () => {
    const isSetValue = field.value;
    const status = isSetValue;

    changeRequiredText(type, status);
    setFormStatus(name, status);
    setValueToComfirm(label, field);
    toggleAttentionText(name, status);
  })
}