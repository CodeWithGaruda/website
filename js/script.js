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
    "Tech Enthusist",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
