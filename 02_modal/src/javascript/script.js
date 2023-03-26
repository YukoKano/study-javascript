const activeClassName = "is-active";

window.onload = () => {
  const overlay = document.querySelector(".overlay");

  const modal = document.querySelector(".modal");
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
      text: "fuge"
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
    // 配列にある画像を小要素に追加する
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
    modalImage.alt = obj.text;
    modalImage.width = obj.width;
    modalImage.height = obj.height;
    modalTitle.appendChild(document.createTextNode(obj.title));
    modalDate.appendChild(document.createTextNode(obj.date));
    modalText.appendChild(document.createTextNode(obj.text));
  }

  const deleteModal = () => {
    // modal内のテキストを削除する（imgは上書きされるから不要）
    modalTitle.removeChild(modalTitle.firstChild);
    modalDate.removeChild(modalDate.firstChild);
    modalText.removeChild(modalText.firstChild);
  }


  const changeModal = (item, status)  => {
    item.addEventListener("click", () => {
      if (status === "open") {
        overlay.classList.add(activeClassName);
        modal.classList.add(activeClassName);
        createModal(item);
      } else if (status === "close") {
        overlay.classList.remove(activeClassName);
        modal.classList.remove(activeClassName);
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
  closeItems.forEach(close => {
    changeModal(close, "close");
  });
}