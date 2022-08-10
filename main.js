"use strict";
const body = document.querySelector("body");
const links = document.querySelectorAll(".dropdown-menu-links");
const dropdownMenu = document.querySelector(".dropdown-menu--1");
const navClose = document.querySelector(".nav-menu-close");
const navOpen = document.querySelector(".nav-menu");
const nav = document.querySelector("nav");
const background = document.querySelector(".background-blur");
console.log(links);
console.log(links[0].closest(".nav-dropdown-links"));
const dropdownIcons = document.querySelectorAll(".dropdown-icons");
const dropdownLinks = document.querySelectorAll(".dropdown-icon-links");
const dropdownMenuLinks = document.querySelectorAll(".dropdown-menu--2-links");
const exceptions = [...dropdownIcons, ...dropdownLinks, ...dropdownMenuLinks];
// links.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     console.log("clicked =>", e.target);
//     console.log(link.closest(".nav-dropdown-links"));
//     dropdownMenu.classList.toggle("hidden");
//   });
// });
const toggleArrow = function (num) {
  document.querySelectorAll(`.dropdown-arrow--${num}`).forEach((arrow) => {
    arrow.classList.toggle("hidden");
  });
};

function addDropdown() {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      console.log("clicked =>", e.target);
      console.log(link.closest(".nav-dropdown-links"));
      console.log(e.target.classList.contains("dropdown-1"));
      if (e.target.classList.contains("dropdown-1")) {
        dropdownMenu.classList.toggle("hidden");
        toggleArrow(1);
      } else if (e.target.classList.contains("dropdown-2")) {
        document.querySelector(".dropdown-menu--2").classList.toggle("hidden");
        toggleArrow(2);
      }
      console.log(dropdownMenu);
    });
  });
}
body.addEventListener("click", function (e) {
  // console.log(e.target == this);
  if (![...links].includes(e.target) && !exceptions.includes(e.target)) {
    if (!dropdownMenu.classList.contains("hidden")) {
      dropdownMenu.classList.add("hidden");
      document.querySelector(".dropdown-menu--2").classList.add("hidden");
      toggleArrow(1);
      if (
        !document
          .querySelectorAll(".dropdown-arrow--2")[1]
          .classList.contains("hidden")
      ) {
        toggleArrow(2);
      }
    } else if (
      !document.querySelector(".dropdown-menu--2").classList.contains("hidden")
    ) {
      document.querySelector(".dropdown-menu--2").classList.add("hidden");
      toggleArrow(2);
    }
  }
  // console.log("clicked => ", e.target);
});

addDropdown();

navClose.addEventListener("click", function () {
  console.log("clicked");
  nav.classList.add("animated-close");
  background.classList.add("hidden");
  navClose.classList.toggle("hidden");
});

navOpen.addEventListener("click", function () {
  nav.style.display = "block";
  nav.classList.remove("animated-close");
  background.classList.remove("hidden");
  navClose.classList.toggle("hidden");
  nav.classList.add("animated-open");
});
