import { changeRequiredText } from "../requiredText/changeRequiredText.js";
import { setFormStatus } from "./setFormStatus.js";

import { setValueToComfirm } from "../setValue/setValueToComfirm.js";

export const checkCampaignFormStatus = () => {
  const name = "campaign";

  // console.log(`check ${name} status`);

  const fields = document.querySelectorAll(`[data-js="${name}Input"]`);
  const label = document.querySelector(`label[for="${name}"]`);

  const text = label.querySelector(`span[class="requiredText"]`);

  let status;
  let fieldText, fieldNum;

  fields.forEach((item) => {
    item.addEventListener("change", () => {
      if (item.checked) {
        status = true;
        fieldText = item.value;
      } else {
        status = false;
      }

      if (fieldText === "yes") {
        fieldNum = 0;
      } else {
        fieldNum = 1;
      }
      changeRequiredText(text, status);
      setFormStatus(name, status);
      setValueToComfirm(label, fields[fieldNum]);
    })
  })
}