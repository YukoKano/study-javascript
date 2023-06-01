import { changeRequiredText } from "../changeRequiredText.js";
import { setFormStatus } from "./setFormStatus.js";

export const checkMileageFormStatus = () => {
  const name = "mileage";

  console.log(`check ${name} status`);

  const field = document.querySelector(`[data-js="${name}SelectMenu"]`);
  const label = document.querySelector(`label[for="${name}"]`);
  const type = label.querySelector(`span[class="requiredText"]`);
  let status;

  field.addEventListener("change", () => {
    if (field.value !== "") {
      status = true;
    } else {
      status = false;
    }
    changeRequiredText(type, status);
    setFormStatus(name, status);
  })
}