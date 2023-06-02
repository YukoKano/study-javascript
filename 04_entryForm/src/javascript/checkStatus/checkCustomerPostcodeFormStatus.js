import { changeRequiredText } from "../changeRequiredText.js";
import { setFormStatus } from "./setFormStatus.js";
import { addRequiredType } from "../addRequiredType.js"
import { setValueToComfirm } from "../setValue/setValueToComfirm.js";

export const checkCustomerPostcodeFormStatus = () => {
  const name = "customerPostcode";

  // console.log(`check ${name} status`);

  const field = document.querySelector(`[data-js="${name}Input"]`);
  const label = document.querySelector(`label[for="${name}"]`);

  addRequiredType(field);

  const text = label.querySelector(`span[class="requiredText"]`);

  let status;

  field.addEventListener("change", () => {
    if (field.value.length === 7) {
      status = true;
    } else {
      status = false;
    }

    changeRequiredText(text, status);
    setFormStatus(name, status);
    setValueToComfirm(label, field);
  })

  // console.log(label, makerField, text);
}