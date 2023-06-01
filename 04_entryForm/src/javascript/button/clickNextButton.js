import { stockFormStatus } from "../checkStatus/stockFormStatus.js";

export const clickNextButton = () => {
  const button = document.querySelector(`[data-js="step1NextButton"]`);

  console.log(button);

  button.addEventListener("click", () => {
    let status = Object.values(stockFormStatus);
    const result = status.every((item) => { return item === true; })

    console.log("button click", result);

    if (result) {
      const nextFieldset = document.querySelector(`fieldset[name="customerInformation"]`)

      nextFieldset.classList.remove("hide");
    }
  })
}