// import { changeRequiredText } from "../changeRequiredText.js";
import { setFormStatus } from "./setFormStatus.js";
// import { addRequiredType } from "../addRequiredType.js"
import { setValueToComfirm } from "../setValue/setValueToComfirm.js";

export const checkModelFormStatus = () => {
  const name = "model";

  // console.log(`check ${name} status`);

  const field = document.querySelector(`[data-js="${name}SelectMenu"]`);
  const label = document.querySelector(`label[for="${name}"]`);

  // addRequiredType(field);

  // const type = label.querySelector(`span[class="requiredText"]`);
  let status;


  field.addEventListener("change", () => {
    if (field.value !== "") {
      status = true;
    } else {
      status = false;
    }
    // changeRequiredText(type, status);
    // setFormStatus(name, status);
    setValueToComfirm(label, field);
  })

  // makerがリセットされたら
  const makerField = document.querySelector(`[data-js="makerSelectMenu"]`);
  let makerValue;

  makerField.addEventListener("change", () => {
    makerValue = makerField.value;

    if (makerValue === "") {
      status = false;
    }
    // changeRequiredText(type, status);
    // setFormStatus(name, status);
  })
}