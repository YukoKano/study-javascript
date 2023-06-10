import { requiredForm } from "../checkStatus/requiredForm.js";

export const clickNextButton = () => {
  const button = document.querySelector(`[data-js="step1NextButton"]`);

  // console.log(button);

  button.addEventListener("click", () => {
    let formStatus = [];
    requiredForm.forEach((item) => {
      if (item.type === "carInformation") {
        formStatus.push(item.status);
      }
    })
    console.log(formStatus);

    const result = formStatus.every((item) => { return item === true; })

    // console.log("button click", result);

    if (result) {
      const nextFieldset = document.querySelector(`fieldset[name="customerInformation"]`)

      nextFieldset.classList.remove("hide");
    }
  })
}