'use strict';



/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
const bodyElement = document.querySelector("main"); // Define the bodyElement variable
const bodyElement1 = document.querySelector("section"); // Define the bodyElement variable
const bodyElement2 = document.querySelector("header"); // Define the bodyElement variable
const bodyElement3 = document.querySelector("footer"); // Define the bodyElement variable


const popup = document.getElementById("popup");

/*pop up*/ 
function openPopup() {
  bodyElement.classList.add("blur-background"); // Apply the 'blur-background' class to the body
  bodyElement1.classList.add("blur-background"); // Apply the 'blur-background' class to the body
  bodyElement2.classList.add("blur-background"); // Apply the 'blur-background' class to the body
  bodyElement3.classList.add("blur-background"); // Apply the 'blur-background' class to the body

  popup.classList.add("open-popup");

  
}

function ClosePopup() {
  popup.classList.remove("open-popup");
  bodyElement.classList.remove("blur-background"); // Apply the 'blur-background' class to the body
  bodyElement1.classList.remove("blur-background"); // Apply the 'blur-background' class to the body
  bodyElement2.classList.remove("blur-background"); // Apply the 'blur-background' class to the body
  bodyElement3.classList.remove("blur-background"); // Apply the 'blur-background' class to the body
}


