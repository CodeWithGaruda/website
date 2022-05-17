const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

let typed = new Typed(".dynamicText", {
  strings: [
    "TechTrainer",
    "Youtuber",
    "Java Devloper",
    "Motivational Speaker",
    "Programmer",
    "Tech Enthusiast",
  ],
  typeSpeed: 45,
  backSpeed: 45,
  loop: true,
});

function scrollToTop() {
  window.scrollTo(0, 0);
}

function serviceNotAvailable() {
  alert("sorry for the inconvinience service not available as of now");
}
