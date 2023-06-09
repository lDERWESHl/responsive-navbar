hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

const menu = document.querySelector(".hamburger");
menu.addEventListener("click", () => {
  menu.classList.toggle("open");
});
