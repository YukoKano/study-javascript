import { changeRequiredText } from "../requiredText/changeRequiredText.js";
import { setFormStatus } from "./setFormStatus.js";

import { setValueToComfirm } from "../setValue/setValueToComfirm.js";
import { toggleAttentionText } from "../toggleAttentionText.js";

export const checkCustomerNameFormStatus = () => {
  const name = "customerName";

  const field = document.querySelector(`[data-js="${name}Input"]`);
  const label = document.querySelector(`label[for="${name}"]`);



  const text = label.querySelector(`span[class="requiredText"]`);

  let status;

  field.addEventListener("change", () => {
    const regex = new RegExp(/^[一-龯ぁ-んァ-ヶー]+$/);
    const isJapaneseInput = regex.test(field.value);

    if (isJapaneseInput) {
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