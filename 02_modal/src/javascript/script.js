const activeClassName = "is-active";

window.onload = () => {
  const body = document.body;

  const overlay = document.querySelector(".overlay");

  const modalWrap = document.querySelector(".modalWrap");
  const modalImage = document.querySelector(".modalImage");
  const modalTitle = document.querySelector(".modalTitle");
  const modalDate = document.querySelector(".modalDate");
  const modalText = document.querySelector(".modalText");

  const closeItems = document.querySelectorAll(".closeItem");

  const imageBox = document.querySelector('.imageBox');
  const imageArray = [
    {
      src: "./src/images/20180400-2.JPG",
      width: 200,
      height: 100,
      title: "空",
      date: "2018-04-00",
      text: "hoge"
    },
    {
      src: "./src/images/20180400-6.JPG",
      width: 200,
      height: 100,
      title: "桜と空",
      date: "2018-04-00",
      text: "雲ひとつない青空、4月、桜が咲き乱れている。「桜の樹の下には死体が埋まっている」と大学のサークルで誰かが自慢げに話していたが、くだらない。「桜が埋められたのは土壌をよりかたく頑丈にするためだ」という話の方が僕は好きだ。だから川沿いに桜が埋められている。そう、どう考えても、死体なんか埋まっていない。雲ひとつない青空、4月、桜が咲き乱れている。「桜の樹の下には死体が埋まっている」と大学のサークルで誰かが自慢げに話していたが、くだらない。「桜が埋められたのは土壌をよりかたく頑丈にするためだ」という話の方が僕は好きだ。だから川沿いに桜が埋められている。そう、どう考えても、死体なんか埋まっていない。雲ひとつない青空、4月、桜が咲き乱れている。「桜の樹の下には死体が埋まっている」と大学のサークルで誰かが自慢げに話していたが、くだらない。「桜が埋められたのは土壌をよりかたく頑丈にするためだ」という話の方が僕は好きだ。だから川沿いに桜が埋められている。そう、どう考えても、死体なんか埋まっていない。雲ひとつない青空、4月、桜が咲き乱れている。「桜の樹の下には死体が埋まっている」と大学のサークルで誰かが自慢げに話していたが、くだらない。「桜が埋められたのは土壌をよりかたく頑丈にするためだ」という話の方が僕は好きだ。だから川沿いに桜が埋められている。そう、どう考えても、死体なんか埋まっていない。"
    },
    {
      src: "./src/images/20180400-13.JPG",
      width: 200,
      height: 100,
      title: "桜",
      date: "2018-04-00",
      text: "hello"
    },
    {
      src: "./src/images/20180400-15.JPG",
      width: 200,
      height: 100,
      title: "満開の桜",
      date: "2018-04-00",
      text: "bloom"
    }
  ]

  const addImages = () => {
    // 配列にある画像を子要素に追加する
    imageArray.forEach((image, i) => {
      let content = document.createElement('img');
      content.src = image.src;
      content.width = image.width;
      content.height = image.height;
      content.alt = image.title;
      imageBox.appendChild(content);
    });
  }

  const createModal = (item) => {
    // arrayからsrcが一致するデータを探す
    const obj = imageArray.find(e => e.src === item.src.replace("http://127.0.0.1:3000/02_modal", "."));

    // modalにデータを入れる
    modalImage.src = obj.src;
    modalImage.alt = obj.title;
    modalImage.width = obj.width;
    modalImage.height = obj.height;
    modalTitle.appendChild(document.createTextNode(obj.title));
    modalDate.appendChild(document.createTextNode(obj.date));
    modalText.appendChild(document.createTextNode(obj.text));

    // overlay部分を動かさないようにする
    let scrollY = window.scrollY;
    body.style.top = `-${scrollY}px`;
    body.style.position = "fixed";

    // overlayとmodalを表示する
    modalWrap.classList.add(activeClassName);
    overlay.classList.add(activeClassName);
  }

  const deleteModal = () => {
    // modal内のテキストを削除する（imgは上書きされるから不要）
    modalTitle.removeChild(modalTitle.firstChild);
    modalDate.removeChild(modalDate.firstChild);
    modalText.removeChild(modalText.firstChild);

    // overlay部分を動かせるようにする
    let beforePositionY = body.style.top.replace("px", "");
    body.style.top = '';
    body.style.position = '';
    window.scrollTo(0, beforePositionY * -1);

    // overlayとmodalを非表示にする
    modalWrap.classList.remove(activeClassName);
    overlay.classList.remove(activeClassName);
  }

  const changeModal = (item, status)  => {
    item.addEventListener("click", () => {
      if (status === "open") {
        createModal(item);
      } else if (status === "close") {
        deleteModal();
      }
    })
  }

  // 画像を描画する
  addImages();

  // 画像を押すとモーダルが開く
  const images = document.querySelectorAll('.imageBox img'); // addImages()してからやらないと空っぽのためここに記載
  images.forEach(image => {
    changeModal(image, "open");
  });

  // overlayと閉じるボタンを押すとモーダルが閉じる
  closeItems.forEach(item => {
    changeModal(item, "close");
  });
}