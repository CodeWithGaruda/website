const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

let typed = new Typed(".dynamicText", {
  strings: [
    "Youtuber",
    "Java Developer",
    "Tech Enthusiast",
    "TechTrainer",
    "WEB Developer",
  ],
  typeSpeed: 45,
  backSpeed: 45,
  loop: true,
});

function scrollToTop() {
  window.scrollTo(0, 0);
}

function serviceNotAvailable() {
  alert("Sorry for the inconvinience\nService not available as of now");
}
