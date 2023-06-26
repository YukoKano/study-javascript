import { setValueToComfirm } from "../setValue/setValueToComfirm.js";

export const checkModelFormStatus = () => {
  const name = "model";

  const field = document.querySelector(`[data-js="${name}SelectMenu"]`);
  const label = document.querySelector(`label[for="${name}"]`);

  let status;


  field.addEventListener("change", () => {
    if (field.value) {
      status = true;
    } else {
      status = false;
    }
    setValueToComfirm(label, field);
  })

  // makerがリセットされたら
  const makerField = document.querySelector(`[data-js="makerSelectMenu"]`);
  let makerValue;

  makerField.addEventListener("change", () => {
    makerValue = makerField.value;

    if (makerValue) {
      status = false;
    }
  })
}