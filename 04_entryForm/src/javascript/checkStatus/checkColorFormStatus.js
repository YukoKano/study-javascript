import { setValueToComfirm } from "../setValue/setValueToComfirm.js";

export const checkColorFormStatus = () => {
  const name = "color";

  const field = document.querySelector(`[data-js="${name}SelectMenu"]`);
  const label = document.querySelector(`label[for="${name}"]`);

  field.addEventListener("change", () => {
    setValueToComfirm(label, field);
  })
}