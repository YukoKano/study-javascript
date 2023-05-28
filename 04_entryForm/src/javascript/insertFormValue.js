import { returnCustomerInformationFormObject } from "./returnCustomerInformationFormObject.js";
import { returnOptionList } from "./returnOptionList.js";
import { returnRequiredSelect } from "./returnRequiredSelect.js";

export const insertFormValue = () => {
  const selectMenuList = returnRequiredSelect();
  const selectOptionList = returnOptionList();
  const inputList = returnCustomerInformationFormObject();

  const allList = selectMenuList.concat(selectOptionList).concat(inputList);

  allList.forEach((item) => {
    const element = document.querySelector(`[data-js="${item.name}ConfirmationResult"]`);

    let value;
    if (item.menu.selectedIndex !== undefined) {
      if (item.menu.options[item.menu.selectedIndex].value === "") {
        value = "指定なし";
      } else {
        value = item.menu.options[item.menu.selectedIndex].innerText;
      }
    } else {
      value = item.menu.value;
    }

    element.append(document.createTextNode(value));
  })
}