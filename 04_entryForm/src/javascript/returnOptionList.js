export const returnOptionList = () => {
  const selectOptionList = document.querySelectorAll("select:not([required])");
  let optionList = [];
  selectOptionList.forEach((item) => {
    let list = new Object();

    list.name = item.name;
    list.menu = item;
    list.label = document.querySelector(`[data-js="${item.name}SelectMenuLabel"]`);

    if (item.value === "") {
      list.status = false;
    } else {
      list.status = true;
    }

    optionList.push(list);
  })

  return optionList;
}