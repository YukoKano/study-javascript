export const checkFormStatus = (items, nextStep) => {
  // 必須のものをobjectにして配列に格納する

  // 結果を格納する
  let resultList = [];
  items.forEach((item) => {
    resultList.push(item.status);
  })

  console.log(resultList);
  // 全てOKか判定
  const result = resultList.every((item) => item === true);
  if (result) {
    nextStep.classList.remove("hide");
  } else {
    alert("未入力の項目があります。")

    // trueは隠す
    let truePosition = resultList.indexOf(true);
    while (truePosition !== -1) {
      const attention = document.querySelector(`[data-js="${items[truePosition].name}Attention"]`);

      attention.classList.add("hide");
      truePosition = resultList.indexOf(true, truePosition + 1);
    }
    // falseは表示する
    let falsePosition = resultList.indexOf(false);
    while (falsePosition !== -1) {
      const attention = document.querySelector(`[data-js="${items[falsePosition].name}Attention"]`);

      attention.classList.remove("hide");
      falsePosition = resultList.indexOf(false, falsePosition + 1);
    }
  }
}