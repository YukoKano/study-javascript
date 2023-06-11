export const toggleDetail = () => {
  const checkbox = document.querySelector("input#detail");
  const detailBox = document.querySelector("[data-js='detailBox']")

  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      detailBox.classList.add("open");
    } else {
      detailBox.classList.remove("open");
    }
  })
}