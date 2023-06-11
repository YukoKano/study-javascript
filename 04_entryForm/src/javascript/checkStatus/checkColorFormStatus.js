import { setValueToComfirm } from "../setValue/setValueToComfirm.js";

export const checkColorFormStatus = () => {
  const name = "color";

  const field = document.querySelector(`[data-js="${name}SelectMenu"]`);
  const label = document.querySelector(`label[for="${name}"]`);

  let status;

  field.addEventListener("change", () => {
    if (field.value !== "") {
      status = true;
    } else {
      status = false;
    }
    setValueToComfirm(label, field);
  })
}