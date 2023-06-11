import { changeRequiredText } from "../requiredText/changeRequiredText.js";
import { setFormStatus } from "./setFormStatus.js";

import { setValueToComfirm } from "../setValue/setValueToComfirm.js";
import { toggleAttentionText } from "../toggleAttentionText.js";

export const checkCustomerEmailFormStatus = () => {
  const name = "customerEmail";

  const field = document.querySelector(`[data-js="${name}Input"]`);
  const label = document.querySelector(`label[for="${name}"]`);



  const text = label.querySelector(`span[class="requiredText"]`);

  let status;

  field.addEventListener("change", () => {
    const emailPattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (emailPattern.test(field.value)) {
      status = true;
    } else {
      status = false;
    }

    changeRequiredText(text, status);
    setFormStatus(name, status);
    setValueToComfirm(label, field);
    toggleAttentionText(name, status);
  })

}