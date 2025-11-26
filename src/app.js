const choises = ['rock', 'paper', 'scissors', 'lizard', 'spock']

const rules = {
  rock: ['scissors', "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
}

const icons = {
  rock: '<i class="fa-regular fa-hand-back-fist"></i>',
  paper: '<i class="fa-regular fa-hand"></i>',
  scissors: '<i class="fa-regular fa-hand-scissors"></i>',
  lizard: '<i class="fa-regular fa-hand-lizard"></i>',
  spock: '<i class="fa-regular fa-hand-spock"></i>'
};

function play(userChoice) {

  const machineChoice = Math.floor(Math.random() * choises.length)
  const machineChoiceValor = choises[machineChoice];

  document.getElementById("user").innerHTML = icons[userChoice];
  document.getElementById("machine").innerHTML = icons[machineChoiceValor];

  let resultado

  if (userChoice === machineChoiceValor) {
    resultado = "Tie";
  } else if (rules[userChoice].includes(machineChoiceValor)) {
    resultado = "The User";
  } else {
    resultado = "The Machine";
  }

  document.getElementById("result").textContent = resultado;
}
window.play = play;





