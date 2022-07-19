// Menu

let menuBurger = document.querySelector(".header_menu");
let headerBurger = document.querySelector(".header_burger");
let body = document.querySelector("body");

headerBurger.addEventListener(`click`, function () {
  let toggleClassMenu = menuBurger.classList.toggle("active");
  let toggleClassHeader = headerBurger.classList.toggle("active");
  let toggleClassBody = body.classList.toggle("lock");
});
