// お客様情報入力のinputをオブジェクトで返す
export const returnCustomerInformationFormObject = () => {
  const campaign = document.querySelectorAll(`[data-js="campaign"]`);
  const customerInfo = document.querySelectorAll(`[data-js="customerInfo"]`);

  let inputMenuList = [];

  const isRadioSelected = () => {
    let list = new Object();

    campaign.forEach((item) => {
      list.name = item.name;
      list.menu = item;
      list.label = document.querySelector(`[data-js="${item.name}Label"]`);
        list.status = false;

      if (item.checked) {
        list.status = true;
      }
    })

    inputMenuList.push(list);
  }

  isRadioSelected();

  const isCustomerInfoSelected = () => {
    customerInfo.forEach((item) => {
      let list = new Object();

      list.name = item.name;
      list.menu = item;
      list.label = document.querySelector(`[data-js="${item.name}Label"]`);
      list.status = true;

      if (item.value === "") {
        list.status = false;
      }
      inputMenuList.push(list);
    })
  }

  isCustomerInfoSelected();

  return inputMenuList;
}