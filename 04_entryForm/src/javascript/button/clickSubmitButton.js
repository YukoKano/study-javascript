export const clickSubmitButton = () => {
  const submitButton = document.querySelector(`[data-js="submitButton"]`);

  submitButton.addEventListener("click", () => {
    const form = document.querySelector("form");
    form.submit();
  })
}