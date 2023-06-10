import { setValueToComfirm } from "../setValue/setValueToComfirm.js";

export const checkColorFormStatus = () => {
  const name = "color";

  const field = document.querySelector(`[data-js="${name}SelectMenu"]`);
  const label = document.querySelector(`label[for="${name}"]`);

  //

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
}