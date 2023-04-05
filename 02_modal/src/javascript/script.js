const activeClassName = "is-active";
const imagePath = "./src/images/";

window.onload = () => {
  const body = document.body;

  const modalElement = {
    wrap: document.querySelector(".modalWrap"),
    image: document.querySelector(".modalImage"),
    title: document.querySelector(".modalTitle"),
    date: document.querySelector(".modalDate"),
    text: document.querySelector(".modalText")
  }

  const closeItems = document.querySelectorAll(".closeItem");

  const imageBox = document.querySelector('.imageBox');
  const imageArray = [
    {
      src: "01.JPG",
      title: "空",
      date: "2018-04-00",
      text: "hoge"
    },
    {
      src: "02.JPG",
      title: "桜と空",
      date: "2018-04-00",
      text: "雲ひとつない青空、4月、桜が咲き乱れている。「桜の樹の下には死体が埋まっている」と大学のサークルで誰かが自慢げに話していたが、くだらない。「桜が埋められたのは土壌をよりかたく頑丈にするためだ」という話の方が僕は好きだ。だから川沿いに桜が埋められている。そう、どう考えても、死体なんか埋まっていない。雲ひとつない青空、4月、桜が咲き乱れている。「桜の樹の下には死体が埋まっている」と大学のサークルで誰かが自慢げに話していたが、くだらない。「桜が埋められたのは土壌をよりかたく頑丈にするためだ」という話の方が僕は好きだ。だから川沿いに桜が埋められている。そう、どう考えても、死体なんか埋まっていない。雲ひとつない青空、4月、桜が咲き乱れている。「桜の樹の下には死体が埋まっている」と大学のサークルで誰かが自慢げに話していたが、くだらない。「桜が埋められたのは土壌をよりかたく頑丈にするためだ」という話の方が僕は好きだ。だから川沿いに桜が埋められている。そう、どう考えても、死体なんか埋まっていない。雲ひとつない青空、4月、桜が咲き乱れている。「桜の樹の下には死体が埋まっている」と大学のサークルで誰かが自慢げに話していたが、くだらない。「桜が埋められたのは土壌をよりかたく頑丈にするためだ」という話の方が僕は好きだ。だから川沿いに桜が埋められている。そう、どう考えても、死体なんか埋まっていない。"
    },
    {
      src: "03.JPG",
      title: "桜",
      date: "2018-04-00",
      text: "hello"
    },
    {
      src: "04.JPG",
      title: "満開の桜",
      date: "2018-04-00",
      text: "bloom"
    },
    {
      src: "05.JPG",
      title: "test",
      date: "2018-05-20",
      text: "test"
    },
    {
      src: "06.JPG",
      title: "test",
      date: "2018-05-20",
      text: "test"
    },
    {
      src: "07.JPG",
      title: "test",
      date: "2018-05-20",
      text: "test"
    },
    {
      src: "08.JPG",
      title: "test",
      date: "2018-05-20",
      text: "test"
    },
    {
      src: "09.JPG",
      title: "test",
      date: "2018-05-20",
      text: "test"
    },
    {
      src: "10.JPG",
      title: "test",
      date: "2018-05-20",
      text: "test"
    },
    {
      src: "11.JPG",
      title: "test",
      date: "2018-05-20",
      text: "test"
    },
    {
      src: "12.jpg",
      title: "test",
      date: "2018-05-20",
      text: "test"
    },
    {
      src: "13.jpg",
      title: "test",
      date: "2018-05-20",
      text: "test"
    }
  ]

  const addImages = () => {
    // 配列にある画像を子要素に追加する
    imageArray.forEach((image, index) => {
      let list = document.createElement('li');
      let content = document.createElement('img');
      content.src = `${imagePath + image.src}`;
      content.width = 200;
      content.height = 200;
      content.alt = image.title;
      content.dataset.number = index;
      list.appendChild(content);
      imageBox.appendChild(list);
    });
  }

  const toggleOverlay = (status) => {
    if (status === "fixed") {
      // overlay部分を動かさないようにする
      let scrollY = window.scrollY;
      body.style.top = `-${scrollY}px`;
      body.style.position = "fixed";
    } else if (status === "unfixed") {
      // overlay部分を動かせるようにする
      let beforePositionY = body.style.top.replace("px", "");
      body.style.top = '';
      body.style.position = '';
      window.scrollTo(0, beforePositionY * -1);
    }
  }

  const createModal = (item) => {
    // arrayからsrcが一致するデータを探す
    const obj = imageArray[`${item.dataset.number}`];

    // modalにデータを入れる
    modalElement.image.src = `${imagePath + obj.src}`;
    modalElement.image.alt = obj.title;
    modalElement.image.width = obj.width;
    modalElement.image.height = obj.height;
    modalElement.title.appendChild(document.createTextNode(obj.title));
    modalElement.date.appendChild(document.createTextNode(obj.date));
    modalElement.text.appendChild(document.createTextNode(obj.text));

    // modalを表示する
    modalElement.wrap.classList.add(activeClassName);
  }

  const deleteModal = () => {
    // modal内のテキストを削除する（imgは上書きされるから不要）
    modalElement.title.removeChild(modalElement.title.firstChild);
    modalElement.date.removeChild(modalElement.date.firstChild);
    modalElement.text.removeChild(modalElement.text.firstChild);

    // modalを非表示にする
    modalElement.wrap.classList.remove(activeClassName);
  }

  const displayModal = (item, status)  => {
    item.addEventListener("click", () => {
      if (status === "open") {
        createModal(item);
        toggleOverlay("fixed");
      } else if (status === "close") {
        deleteModal();
        toggleOverlay("unfixed");
      }
    });
  }

  // 画像を描画する
  addImages();

  // 画像を押すとモーダルが開く
  const images = document.querySelectorAll('.imageBox img'); // addImages()してからやらないと空っぽのためここに記載
  images.forEach(image => {
    displayModal(image, "open");
  });

  // overlayと閉じるボタンを押すとモーダルが閉じる
  closeItems.forEach(item => {
    displayModal(item, "close");
  });
}