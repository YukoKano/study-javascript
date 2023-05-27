import { returnCustomerInformationFormObject } from "./returnCustomerInformationFormObject.js";
import { returnOptionList } from "./returnOptionList.js";
import { returnRequiredSelect } from "./returnRequiredSelect.js";

export const insertFormValue = () => {
  const selectMenuList = returnRequiredSelect();
  const selectOptionList = returnOptionList();
  const inputList = returnCustomerInformationFormObject();

  const allList = selectMenuList.concat(selectOptionList).concat(inputList);

  const confirmationBox = document.querySelector(`[data-js="confirmationResult"]`);
  allList.forEach((item) => {
    const p = document.createElement("p");

    const label = item.label.innerText.replace(/ok|任意/,"").replace(/※(.*)/, "");
    const value = item.menu.value;
    const text = `${label}: ${value}`;

    p.appendChild(document.createTextNode(text));

    confirmationBox.appendChild(p);
  })
  console.log(allList);
}