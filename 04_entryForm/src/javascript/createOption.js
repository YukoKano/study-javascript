// optionタグの生成
export const createOption = (item) => {
  const option = document.createElement("option");
  option.value = item.value;
  const label = document.createTextNode(item.label);
  option.appendChild(label)
  return option;
}