export const changeView = (button) => {
  const confirmList = document.querySelector(`[data-js="confirmation"]`);
  const fieldsets = document.querySelectorAll(`fieldset`);

  if (button === "input") {
    fieldsets.forEach((item) => {
      item.classList.remove("hide");
    })
    confirmList.classList.add("hide");
  } else if (button === "confirm") {
    confirmList.classList.remove("hide");
    fieldsets.forEach((item) => {
      item.classList.add("hide");
    })
  }
}