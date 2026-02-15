import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let who = ["my pet", "grandma", "my friend", "my mother"];
let action = ["sick", "travelling", "going out", "studying"];
let what = ["backpack", "car", "television", "house"];
let when = ["yesterday", "while I was at work", "last week"];

function selectExcuse(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

let selectedWho = selectExcuse(who);
let selectedAction = selectExcuse(action);
let selectedWhat = selectExcuse(what);
let selectedWhen = selectExcuse(when);

console.log(selectedWho + " was " + selectedAction + " with the " + selectedWhat + " " + selectedWhen);