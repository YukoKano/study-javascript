import { changeRequiredText } from "../requiredText/changeRequiredText.js";
import { setFormStatus } from "./setFormStatus.js";

import { setValueToComfirm } from "../setValue/setValueToComfirm.js";
import { toggleAttentionText } from "../toggleAttentionText.js";

export const checkCampaignFormStatus = () => {
  const name = "campaign";

  const fields = document.querySelectorAll(`[data-js="${name}Input"]`);
  const label = document.querySelector(`label[for="${name}"]`);
  const text = label.querySelector(`span[class="requiredText"]`);

  fields.forEach((item, index) => {
    item.addEventListener("change", () => {
      let fieldSelectedNum;
      const status = item.checked;

      if (item.checked) {
        fieldSelectedNum = index;
      }

      changeRequiredText(text, status);
      setFormStatus(name, status);
      setValueToComfirm(label, fields[fieldNum]);
      toggleAttentionText(name, status);
    })
  })
}