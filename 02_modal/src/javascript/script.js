const activeClassName = "is-active";

window.onload = () => {
  const images = document.querySelectorAll('.images img');
  const overlay = document.querySelector(".overlay");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  function openModal(item) {
    item.addEventListener("click", () => {
      overlay.classList.add(activeClassName);
      modal = document.querySelector(`[data-modal="${item.dataset.image}"]`);
      modal.classList.add(activeClassName);
    })
  }

  function closeModal(item) {
    item.addEventListener("click", () => {
      overlay.classList.remove(activeClassName);
      modals.forEach(modal => {
        modal.classList.remove(activeClassName);
      })
    })
  }

  // imageを押すとモーダルが開く
  images.forEach(image => {
    openModal(image);
  });

  // overlayと閉じるボタンを押すとモーダルが閉じる
  closeModal(overlay);
  closeButtons.forEach(close => {
    closeModal(close);
  });
}