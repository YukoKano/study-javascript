// お客様情報入力のinputをオブジェクトで返す
export const returnCustomerInformationFormObject = () => {
  const input = document.querySelectorAll("input[required]");
  let inputMenuList = [];

  input.forEach((item) => {
    let list = new Object();

    list.name = item.name;
    list.menu = item;
    list.label = document.querySelector(`[data-js="${item.name}Label"]`);


    if (item.type === "radio") {
      item.checked ? list.status = true : list.status = false;
    } else {
      item.value === "" ? list.status = false : list.status = true;
    }

    inputMenuList.push(list);
  })

  return inputMenuList;
}