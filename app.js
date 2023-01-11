const allBtn = document.querySelectorAll(".btn");
const menu = document.querySelector(".menu");
const mainEl = document.querySelectorAll(".main");
const closeMenu = document.querySelector(".cross")

allBtn.forEach((btns) =>
  btns.addEventListener("click", () => {
    btns.classList.toggle("active");
  })
);

menu.addEventListener("click", () => {
  mainEl.forEach((main) => main.classList.toggle("active"));
});

closeMenu.addEventListener('click' , () => {
  mainEl.forEach((main) => main.classList.remove("active"));
})

// submenu open close can be done by for loop or if else.