export const setValueToComfirm = (label, field) => {
  let value;
  const paragraphs = document.querySelectorAll(`[data-js="confirmation"] div p`)

  const searchString = label.innerText.replace("OK", "").replace(/※.*/, "").replace(" ", "");

  if (field.selectedIndex !== undefined) {
    value = field.options[field.selectedIndex].text;
    if (value === "" | value === "選択してください") {
      value = "未指定";
    }
  } else if (field.name === "campaign") {
    value = field.parentNode.textContent;
  } else if (field.value !== undefined) {
    value = field.value;
  }

  paragraphs.forEach((p) => {
    const textContent = p.textContent;
    if (textContent.includes(searchString)) {
      p.textContent = `${searchString}： ${value}`;
    }
  })
}