/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const sections = document.querySelectorAll("section");
let navBar = "";
for (let i = 0; i < sections.length; i++) {
  navBar += `<li><a class="menu__link" href="#${sections[i].id}">${sections[i].dataset.nav}</a></li>`;
}
console.log(navBar);
document.querySelector("#navbar__list").innerHTML = navBar;

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", function () {
  for (let i = 0; i < sections.length; i++) {
    if (
      isInViewport(
        sections[i].firstChild.nextElementSibling.firstChild.nextElementSibling
      )
    ) {
      sections[i].classList.add("your-active-class");
    } else {
      sections[i].classList.remove("your-active-class");
    }
  }
});

// Scroll to anchor ID using scrollTO event
document.querySelectorAll(".menu__link").forEach(function (el) {
  el.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(el.hash).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
