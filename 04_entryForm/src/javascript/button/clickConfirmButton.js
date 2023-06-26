import { requiredForm } from "../checkStatus/requiredForm.js";
import { changeView } from "../changeView.js";

export const clickConfirmButton = () => {
  const button = document.querySelector(`[data-js="comfirmButton"]`);

  button.addEventListener("click", () => {
    const formStatus = requiredForm.map(item => item.status);
    console.log(formStatus);
    const result = formStatus.every((item) => item);

    if (result) {
      changeView("confirm");
    }
  })
}