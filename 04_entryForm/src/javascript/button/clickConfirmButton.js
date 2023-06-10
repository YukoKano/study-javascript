import { requiredForm } from "../checkStatus/requiredForm.js";

export const clickConfirmButton = () => {
  const button = document.querySelector(`[data-js="comfirmButton"]`);

  button.addEventListener("click", () => {
    let formStatus;
    requiredForm.forEach((item) => {
      formStatus.push(item.status);
    })
    console.log(formStatus);
    const result = formStatus.every((item) => { return item === true; })

    if (result) {
      const nextContent = document.querySelector(`[data-js="confirmation"]`)

      nextContent.classList.remove("hide");
    }
  })
}