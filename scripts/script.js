// Menu

let menuBurger = document.querySelector(".header_menu");
let headerBurger = document.querySelector(".header_burger");
let body = document.querySelector("body");

headerBurger.addEventListener(`click`, function () {
  let toggleClassMenu = menuBurger.classList.toggle("active");
  let toggleClassHeader = headerBurger.classList.toggle("active");
  let toggleClassBody = body.classList.toggle("lock");
});

// Create dotted background

let windowHeight = window.innerHeight;
console.log(windowHeight);

let windowWidth = window.innerWidth;
console.log(windowWidth);

window.addEventListener("DOMContentLoaded", createDottedBackground);

function createDottedBackground() {
  function createDots() {
    let canvas = document.getElementById(`canvas`);
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    console.log(width);
    console.log(height);

    for (let i = 0; i < width; i += 40) {
      for (let j = 0; j < height; j += 40) {
        let outerDiv = document.createElement("div");
        outerDiv.classList.add("box");
        //   console.log(outerDiv);
        let innerDiv = document.createElement("div");
        innerDiv.classList.add("dot");
        outerDiv.appendChild(innerDiv);
        canvas.appendChild(outerDiv);
      }
    }
  }
  createDots();
  window.addEventListener("resize", createDots);
}
