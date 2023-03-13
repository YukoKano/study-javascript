window.onload = () => {
  const list = document.querySelectorAll(".list");

  list.forEach(value => {
    value.addEventListener("click", () => {
      document.querySelectorAll(".content").forEach(i => {
        i.classList.remove("is-active");
      });

      document.querySelectorAll(".list").forEach(i => {
        i.classList.remove("is-active");
      });

      document.querySelector('[data-js="' + value.dataset.js + '"]').classList.add("is-active");

      document.querySelector('[data-content="' + value.dataset.js + '"]').classList.add("is-active");
    });
  });
}