import { changeRequiredText } from "../requiredText/changeRequiredText.js";
import { setFormStatus } from "./setFormStatus.js";

import { setValueToComfirm } from "../setValue/setValueToComfirm.js";
import { toggleAttentionText } from "../toggleAttentionText.js";

export const checkCustomerPostcodeFormStatus = () => {
  const name = "customerPostcode";

  const field = document.querySelector(`[data-js="${name}Input"]`);
  const label = document.querySelector(`label[for="${name}"]`);
  const text = label.querySelector(`span[class="requiredText"]`);

  field.addEventListener("change", () => {
    const notHaveHyphen = field.value.match(/-/) === null;
    const isPostcode = field.value.length === 7;

    const status = notHaveHyphen && isPostcode;

    changeRequiredText(text, status);
    setFormStatus(name, status);
    setValueToComfirm(label, field);
    toggleAttentionText(name, status);
  })
}