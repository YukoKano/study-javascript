window.onload = () => {
  const images = document.querySelectorAll('.images img');
  const overlay = document.querySelector(".overlay");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  images.forEach(image => {
    image.addEventListener("click", () => {
      overlay.classList.add("is-active");

      // console.log(image.dataset.image);
      modal = document.querySelector(`[data-modal="${image.dataset.image}"]`);
      modal.classList.add("is-active");
    });
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("is-active");
    modals.forEach(modal => {
      modal.classList.remove("is-active");
    })
  });

  closeButtons.forEach(close => {
    close.addEventListener("click", () => {
      overlay.classList.remove("is-active");
      modals.forEach(modal => {
        modal.classList.remove("is-active");
      });
    });
  });
}