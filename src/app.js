import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let numero = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  let palo = ['❤️', '♦️', '♠️', '♣️']

  let numeroRandom = Math.floor(Math.random() * numero.length)
  let paloRandom = Math.floor(Math.random() * palo.length)

  let numeroSeleccionado = numero[numeroRandom]
  let paloSeleccionado = palo[paloRandom]

let numeroCard = document.getElementById('numeroCard')
numeroCard.innerText = numeroSeleccionado

let paloCard = document.getElementsByClassName('paloCard')
for (let i=0; i<paloCard.length; i++){
  paloCard[i].innerText = paloSeleccionado;
}

};
