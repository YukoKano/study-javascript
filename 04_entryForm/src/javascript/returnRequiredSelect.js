// 必須のselectをオブジェクトで返す

export const returnRequiredSelect = () => {
  const select = document.querySelectorAll("select[required]");
  let selectMenuList = [];

  select.forEach((item) => {
    let list = new Object();

    list.name = item.name;
    list.menu = item;
    list.label = document.querySelector(`[data-js="${item.name}SelectMenuLabel"]`);

    if (item.value === "") {
      list.status = false;
    } else {
      list.status = true;
    }

    selectMenuList.push(list);
  })

  return selectMenuList;
}