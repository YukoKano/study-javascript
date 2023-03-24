const activeClassName = "is-active";

window.onload = () => {
  const imageArray = [
    {
      src: "./src/images/20180400-2.JPG",
      width: 200,
      height: 100,
      title: "空"
    },
    {
      src: "./src/images/20180400-6.JPG",
      width: 200,
      height: 100,
      title: "桜と空"
    },
    {
      src: "./src/images/20180400-13.JPG",
      width: 200,
      height: 100,
      title: "桜"
    },
    {
      src: "./src/images/20180400-15.JPG",
      width: 200,
      height: 100,
      title: "満開の桜"
    }
  ]

  const addImages = () => {
    imageArray.forEach((image, i) => {
      let content = document.createElement('img');
      content.src = image.src;
      content.width = image.width;
      content.height = image.height;
      content.alt = image.title;
      content.dataset.image = `modal${i + 1}`;
      document.querySelector('.images').appendChild(content);
    });
  }

  addImages();

  const closeButton = document.querySelector(".closeButton");
  const overlay = document.querySelector(".overlay");
  const modals = document.querySelectorAll(".modal");
  const closeItems = document.querySelectorAll(".closeItem");

  const createModal = (item) => {
    let modal = document.querySelector(".modal");
    modal.dataset.modal = `${item.dataset.image}`;

    let modalImage = document.createElement('img');
    modalImage.src = item.src;
    modalImage.width = 400;
    modalImage.height = 300;
    modalImage.alt = item.alt;
    modal.insertBefore(modalImage, closeButton);

    let modalTitle = document.createElement('p');
    modalTitle.classList.add("modalTitle");
    modalTitle.appendChild(document.createTextNode(item.alt));
    modal.insertBefore(modalTitle, closeButton);

    let modalDate = document.createElement('p');
    modalDate.classList.add("modalDate");
    modalDate.appendChild(document.createTextNode("2018-04-00"));
    modal.insertBefore(modalDate, closeButton);

    let modalText = document.createElement('p');
    modalText.classList.add("modalText");
    modalText.appendChild(document.createTextNode("hogehoge"));
    modal.insertBefore(modalText, closeButton);
  }

  const deleteModal = () => {
    let img = document.querySelector('.modal img');
    img.remove();
    let p = document.querySelectorAll('.modal p');
    console.log(p);
    p.forEach((i) => i.remove());
  }


  const changeModal = (item, status)  => {
    item.addEventListener("click", () => {
      if (status === "open") {
        createModal(item);
        overlay.classList.add(activeClassName);
        document.querySelector(`[data-modal="${item.dataset.image}"]`).classList.add(activeClassName);
      } else if (status === "close") {
        overlay.classList.remove(activeClassName);
        modals.forEach(modal => modal.classList.remove(activeClassName));
        deleteModal(item);
      }
    })
  }

  const images = document.querySelectorAll('.images img');

  // imageを押すとモーダルが開く
  images.forEach(image => {
    changeModal(image, "open");
  });

  // overlayと閉じるボタンを押すとモーダルが閉じる
  closeItems.forEach(close => {
    changeModal(close, "close");
  });
}