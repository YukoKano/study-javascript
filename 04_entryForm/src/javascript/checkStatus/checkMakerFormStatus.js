import { changeRequiredText } from "../requiredText/changeRequiredText.js";
import { setFormStatus } from "./setFormStatus.js";
import { addRequiredType } from "../requiredText/addRequiredType.js"
import { setValueToComfirm } from "../setValue/setValueToComfirm.js";


export const checkMakerFormStatus = () => {
  const name = "maker";

  // console.log(`check ${name} status`);

  const field = document.querySelector(`[data-js="${name}SelectMenu"]`);
  const label = document.querySelector(`label[for="${name}"]`);

  addRequiredType(field);

  const text = label.querySelector(`span[class="requiredText"]`);

  let status;

  field.addEventListener("change", () => {
    if (field.value !== "") {
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