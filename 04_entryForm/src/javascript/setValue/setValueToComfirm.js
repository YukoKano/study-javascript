export const setValueToComfirm = (label, field) => {

  if (field.selectedIndex !== undefined) {
    const value = field.options[field.selectedIndex].text;
    console.log(label.innerText.replace("ok", "").replace(/※.*/, ""), value);
  } else if(field.name = "campaign"){
    const inputValue = field.computedName;
    console.log(label.innerText.replace("ok", "").replace(/※.*/, ""), inputValue);
  } else if (field.value !== undefined) {
    const inputValue = field.value;
    console.log(label.innerText.replace("ok", "").replace(/※.*/, ""), inputValue);
  }




  // const allList = document.querySelectorAll(`[data-js$="SelectMenu"], [data-js$="Input"]`);

  // console.log(allList);

  // allList.forEach((item) => {
  //   const element = document.querySelector(`[data-js="${item.name}ConfirmationResult"]`);

  //   let value;
  //   if (item.menu.selectedIndex !== undefined) {
  //     if (item.menu.options[item.menu.selectedIndex].value === "") {
  //       value = "指定なし";
  //     } else {
  //       value = item.menu.options[item.menu.selectedIndex].innerText;
  //     }
  //   } else {
  //     value = item.menu.value;
  //   }

  //   element.append(document.createTextNode(value));
  // })
}