function init() {
  //"Basically '_on_ready()'"
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

const animObserver = new IntersectionObserver((elems) => {
  elems.forEach((elem) => {
    if (elem.isIntersecting) {
      elem.target.classList.add("visible");
      animObserver.unobserve(elem.target);
      console.log(".anim observed");
    }
  });
});

const animElems = document.querySelectorAll(".anim");
animElems.forEach((el) => animObserver.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  init();
});
