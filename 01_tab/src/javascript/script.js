// console.log(document.getElementsByClassName("hiragana"));
console.log(document.getElementById("kakikukeko"));
// console.log(document.querySelector("#id"));

window.onload = () => {
  // console.log(document.querySelectorAll('[data-js="list"]'));
  const list = document.querySelectorAll(".list");
  // console.log(list);

  list.forEach(value => {
    // console.log(value);
    value.addEventListener("click", () => {
      // console.log(value.dataset.js);
      document.querySelectorAll(".content").forEach(i => {
        i.classList.remove("is-active");
      });

      document.querySelectorAll(".list").forEach(i => {
        i.classList.remove("is-active");
      });

      document.querySelector('[data-content="' + value.dataset.js + '"]').classList.add("is-active");

      document.querySelector('[data-js="' + value.dataset.js + '"]').classList.add("is-active");
    });
  });
}