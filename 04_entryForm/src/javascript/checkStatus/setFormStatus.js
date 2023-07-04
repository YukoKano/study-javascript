import { requiredForm } from "./requiredForm.js";

export const setFormStatus = (name, status) => {
  requiredForm.forEach((item) => {
    if (item.name === name) {
      item.status = status;
    }
  })
}