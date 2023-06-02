import { changeRequiredText } from "../changeRequiredText.js";
import { setFormStatus } from "./setFormStatus.js";
import { addRequiredType } from "../addRequiredType.js"
import { setValueToComfirm } from "../setValue/setValueToComfirm.js";

export const checkCustomerEmailFormStatus = () => {
  const name = "customerEmail";

  // console.log(`check ${name} status`);

  const field = document.querySelector(`[data-js="${name}Input"]`);
  const label = document.querySelector(`label[for="${name}"]`);

  addRequiredType(field);

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
  })

  // console.log(label, makerField, text);
}