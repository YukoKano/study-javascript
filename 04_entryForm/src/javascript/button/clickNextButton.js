import { requiredForm } from "../checkStatus/requiredForm.js";

export const clickNextButton = () => {
  const button = document.querySelector(`[data-js="step1NextButton"]`);

  button.addEventListener("click", () => {
    const formStatus = requiredForm.filter(item => item.type === "carInformation").map(item => item.status);
    console.log(formStatus);

    const result = formStatus.every((item) => item);

    // console.log("button click", result);

    if (result) {
      const nextFieldset = document.querySelector(`fieldset[name="customerInformation"]`)

      nextFieldset.classList.remove("hide");
    }
  })
}