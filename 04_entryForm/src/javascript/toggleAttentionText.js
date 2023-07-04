export const toggleAttentionText = (name, status) => {
  const text = document.querySelector(`[data-js=${name}Attention]`);

  if (status) {
    text.classList.add("hide");
  } else {
    text.classList.remove("hide");
  }
}