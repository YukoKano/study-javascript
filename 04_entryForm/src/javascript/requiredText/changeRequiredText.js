export const changeRequiredText = (text, status) => {
  if (status) {
    text.innerText = "ok";
    text.classList.add("ok");
  } else {
    text.innerText = "必須";
    text.classList.remove("ok");
  }
}