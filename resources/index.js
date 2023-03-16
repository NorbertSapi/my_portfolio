
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

// Principles mouse over change the img
function mouseRollover( imageId, imageSrc ) {
  let image = document.getElementById( imageId );
  image.src = imageSrc;
}

/**************************  GAME - ROSHAMBO ***********************/

const my_Item_Array = ["rock", "scissors", "paper"];
let buttonRoshambo = document.getElementById('roshamboButton');
let winner = document.getElementById('winner');
let player = document.getElementById('player');
let bot = document.getElementById('bot');

// This function generates the item for the bot
function itemGenerator(){
  let randomItemBot = Math.floor(Math.random() * my_Item_Array.length);
  return my_Item_Array[randomItemBot];
}


// This function generates the result of the game.
function functionWinner() {
  function getWinner(bot, player) {
    let winner;
    if(bot == player){winner = "It is a draw.";}
    else if(bot == "rock" && player == "scissors" || bot == "scissors" && player == "paper" || bot == "paper" && player == "rock"){winner = "The winner is Roshambot.";}
    else{winner = "The winner is You.";}
      return winner;
  }

  // Store the value of item for the bot and for the player 
  let store_Bot = itemGenerator();
  let store_Player = itemGenerator(); 

  //display items for player and bot
  bot.innerHTML = "Roshambot has " + store_Bot;
  player.innerHTML = "You have " + store_Player;
  
  buttonRoshambo.innerHTML = 'Press here for the next game!';
  buttonRoshambo.style.cursor = 'default';

  winner.innerHTML = getWinner(store_Bot, store_Player);
}

buttonRoshambo.addEventListener('click', functionWinner);

/*************************************************  Daily Fortune *************************/

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

  
  /*
  roshambo.getElementById("player").innerHTML = "Player has " + itemGeneratorPlayer();
  roshambo.getElementById("bot").innerHTML = "Roshambot has " + itemGeneratorBot();
  */
  /*
  button.innerHTML = 'Press here for the next game!';
  button.style.cursor = 'default';
  let winner;
	if(random1 == random2){winner = "It is a draw.";}
    else if(random1 == 0 && random2 == 1 || random1 == 1 && random2 == 2 || random1 == 2 && random2 == 0){winner = "The winner is You.";}
    else{winner = "The winner is Roshambot.";}
    return winner;*/
