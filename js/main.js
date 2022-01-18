const linkBtn = document.querySelector(".btn-link");
const mobileNav = document.querySelector(".nav-links");
const main = document.querySelector(".main");
const foot = document.querySelector(".footer");

linkBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const navIcon = document.querySelector(".btn");
  const openBtn = "images/icon-hamburger.svg";
  const closeBtn = "images/icon-close.svg";
  if (mobileNav.classList.contains("show")) {
    navIcon.src = openBtn;
    mobileNav.classList.remove("show");
    main.style.display = "block";
    foot.style.display = "block";
  } else {
    navIcon.src = closeBtn;
    mobileNav.classList.add("show");
    main.style.display = "none";
    foot.style.display = "none";
  }
});
