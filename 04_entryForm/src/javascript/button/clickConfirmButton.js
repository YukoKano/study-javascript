import { requiredForm } from "../checkStatus/requiredForm.js";

export const clickConfirmButton = () => {
  const button = document.querySelector(`[data-js="comfirmButton"]`);

  button.addEventListener("click", () => {
    let formStatus = [];
    requiredForm.forEach((item) => {
      formStatus.push(item.status);
    })
    console.log(formStatus);
    const result = formStatus.every((item) => { return item === true; })

    if (result) {
      const confirmList = document.querySelector(`[data-js="confirmation"]`)

      confirmList.classList.remove("hide");
      const fieldsets = document.querySelectorAll(`fieldset`);
      fieldsets.forEach((item) => {
        item.classList.add("hide");
      })
    }
  })
}