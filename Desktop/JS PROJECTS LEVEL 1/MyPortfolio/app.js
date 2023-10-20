/* Toggle Icon */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* Scroll Sections Active Link */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=' + id + ']")
          .classList.add("active");
      });
    }
  });
  // Sticky Navbar//
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /* Remove Toggle Icon */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* Scroll Reveal */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1500,
  delay: 200,
});

ScrollReveal().reveal(".home-conten, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-conten h3, .home-content", { origin: "left" });
ScrollReveal().reveal(".home-conten h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-conten p, .about-content", { origin: "right" });

/* Type Js */
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Mobile Application Developer", "Blogger"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
