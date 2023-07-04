import { changeRequiredText } from "../requiredText/changeRequiredText.js";
import { setFormStatus } from "./setFormStatus.js";
import { setValueToComfirm } from "../setValue/setValueToComfirm.js";
import { toggleAttentionText } from "../toggleAttentionText.js";

export const checkCarNameFormStatus = () => {
  const name = "carName";

  const field = document.querySelector(`[data-js="${name}SelectMenu"]`);
  const label = document.querySelector(`label[for="${name}"]`);
  const type = label.querySelector(`span[class="requiredText"]`);
  let status;

  field.addEventListener("change", () => {
    status = field.value;

    changeRequiredText(type, status);
    setFormStatus(name, status);
    setValueToComfirm(label, field);
    toggleAttentionText(name, status);
  })

  // makerが変更された時
  const makerField = document.querySelector(`[data-js="makerSelectMenu"]`);

  makerField.addEventListener("change", () => {
    status = false;
    setFormStatus(name, status);
    changeRequiredText(type, status);
  })
}