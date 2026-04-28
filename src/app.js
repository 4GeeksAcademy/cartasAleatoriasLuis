import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateCard();
};

function generateCard() {
  const suits = ["heart", "diamond", "spade", "club"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const icons = {
    heart: "♥",
    diamond: "♦",
    spade: "♠",
    club: "♣"
  };

  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];
  
  document.querySelector("#idCard").className = "card " + randomSuit;
  document.querySelector(".top").innerHTML = icons[randomSuit];
  document.querySelector(".bottom").innerHTML = icons[randomSuit];
   document.querySelector(".number").innerHTML = randomValue;
}

