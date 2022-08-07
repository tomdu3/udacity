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
let navBar = "";
let selectedNavLink;
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// Add class 'active' to section when it is near top of viewport
function makeActive() {
  for (const section of sections) {
    selectedNavLink = document.querySelector(`.menu__link.${section.id}`);
    const rect = section.getBoundingClientRect();
    // You can play with the values in the "if" condition to further make it more accurate.
    if (rect.top <= 150 && rect.bottom >= 150) {
      // Apply active state on the current section and the corresponding Nav link.
      section.classList.add("your-active-class");
      selectedNavLink.classList.add("active");
    } else {
      // Remove active state from other section and corresponding Nav link.
      section.classList.remove("your-active-class");
      selectedNavLink.classList.remove("active");
    }
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const sections = document.querySelectorAll("section");
for (let i = 0; i < sections.length; i++) {
  navBar += `<li><a class="menu__link ${sections[i].id}" href="#${sections[i].id}">${sections[i].dataset.nav}</a></li>`;
}
document.querySelector("#navbar__list").innerHTML = navBar;

// Add class 'active' to the navbar and to the section when near top of viewport
document.addEventListener("scroll", function () {
  makeActive();
});

// Scroll to anchor ID using scrollTO event
document.querySelectorAll(".menu__link").forEach(function (el) {
  el.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(el.hash).scrollIntoView({
      behavior: "smooth",
      block: "center",
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
