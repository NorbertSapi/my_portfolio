
// NAV BAR ANIATION

const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);



// Enlarge my chess cake image


function originalImg() {
  $("#chess").attr('src', './resources/gallery/originalIMG.jpg');
}

function cakeImg() {
  $("#chess").attr('src', './resources/gallery/chessboard.jpg');
}

// Daily Fortune 

let fortunes = ['A beautiful, smart, and loving person will be coming into your life.',
  'A fresh start will put you on your way.',
  'A golden egg of opportunity falls into your lap this month.',
  'A smile is your personal welcome mat.',
  'All your hard work will soon pay off.'
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = 'Come back tomorrow!';
  button.style.cursor = 'default';


  button.removeEventListener('click', showFortune);
}

button.addEventListener('click', showFortune);
