import { stockFormStatus, resetFormStatus } from "../checkStatus/stockFormStatus.js";

export const clickConfirmButton = () => {
  const button = document.querySelector(`[data-js="comfirmButton"]`);

  // console.log(button);

  button.addEventListener("click", () => {
    let status = Object.values(stockFormStatus);
    const result = status.every((item) => { return item === true; })

    if (result) {
      const nextContent = document.querySelector(`[data-js="confirmation"]`)

      nextContent.classList.remove("hide");
    }
  })
}