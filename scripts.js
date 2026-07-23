function init() {
  console.log("Basically '_on_ready()'");
}

function toggleMenu() {
  const menu = document.querySelector(".full-menu");
  if (menu.classList.contains("closed")) {
    console.log("opened");
    menu.classList.remove("closed");
    menu.classList.add("open");
    return;
  } else if (menu.classList.contains("open")) {
    console.log("closed");
    menu.classList.remove("open");
    menu.classList.add("closed");
    return;
  }
}

document.querySelector("#menu-btn").addEventListener("click", toggleMenu);

document.addEventListener("DOMContentLoaded", () => {
  init();
});
