export const changeView = (view) => {
  const confirmList = document.querySelector(`[data-js="confirmation"]`);
  const fieldsets = document.querySelectorAll(`fieldset`);

  if (view === "input") {
    fieldsets.forEach((item) => {
      item.classList.remove("hide");
    })
    confirmList.classList.add("hide");
  } else if (view === "confirm") {
    confirmList.classList.remove("hide");
    fieldsets.forEach((item) => {
      item.classList.add("hide");
    })
  }
}