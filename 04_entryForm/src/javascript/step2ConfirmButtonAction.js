import { checkFormStatus } from "./checkFormStatus.js";
import { insertFormValue } from "./insertFormValue.js";
import { returnCustomerInformationFormObject } from "./returnCustomerInformationFormObject.js"

export const step2ConfirmButtonAction = () => {
  const step2Button = document.querySelector("[data-js='step2ConfirmButton']");
  const confirmation = document.querySelector("[data-js='confirmation']");

  step2Button.addEventListener("click", () => {
    const customerInfo = returnCustomerInformationFormObject();
    console.log(customerInfo);

    const result = checkFormStatus(customerInfo, confirmation);
    if (result) {
      insertFormValue();
    }
  })
}