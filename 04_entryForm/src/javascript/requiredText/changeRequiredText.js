export const changeRequiredText = (text, status) => {
  if (status) {
    text.innerText = "OK";
    text.classList.add("ok");
  } else {
    text.innerText = "必須";
    text.classList.remove("ok");
  }
}