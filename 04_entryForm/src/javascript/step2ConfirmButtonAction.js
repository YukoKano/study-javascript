export const step2ConfirmButtonAction = () => {
  const step2Button = document.querySelector("[data-js='step2ConfirmButton']");
  const confirmation = document.querySelector("[data-js='confirmation']");


  step2Button.addEventListener("click", () => {
    const campaignLabel = document.querySelectorAll("input[name='campaign']");

    let value;
    for (const option of campaignLabel) {
      if (option.checked) {
        value = option.value;
      }
    }

    if (value !== undefined) {
      confirmation.classList.remove("hide");
    } else {
      alert("必須項目を選択してください");
    }
  })
}