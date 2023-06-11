export const clickInputChange = () => {
  const button = document.querySelector(`[data-js="inputChangeButton"]`);

  button.addEventListener("click", () => {
    const fieldsets = document.querySelectorAll(`fieldset`);
    fieldsets.forEach((item) => {
      item.classList.remove("hide");
    })

    const confirmList = document.querySelector(`[data-js="confirmation"]`)
    confirmList.classList.add("hide");
  })
}