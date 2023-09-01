var card = document.getElementById("cards");
var total = document.getElementById("total");
var message = document.getElementById("message");
var ctotal = document.getElementById("ctotal");
let cCard = [];
var pcard = [];
let newCardBtn = false;
var sum = 0;
let cSum = 0;
let win = false;
let game = true;

function start() {
  var num1 = getRandom();
  var num2 = getRandom();
  let cNum1 = getRandom();
  let cNum2 = getRandom();
  cSum = cNum1 + cNum2;
  sum = num1 + num2;
  pcard = [num1, num2];
  newCardBtn = true;
  render();
}

function newCard() {
  if (win == false && game == true && newCardBtn == true) {
    let num = getRandom();
    pcard.push(num);
    sum += num;

    while (cSum < 19) {
      let cnum = getRandom();
      cSum += cnum;
    }

    render();
    winner();
  }
}
function getRandom() {
  let random = Math.floor(Math.random() * 13 + 1);
  if (random > 11) {
    return 10;
  } else if (random == 1) {
    return 1;
  } else {
    return random;
  }
}

function render() {
  ctotal.innerHTML = "Computer Total :";
  card.innerHTML = "Cards : ";
  for (let index = 0; index < pcard.length; index++) {
    card.innerHTML += ` ${pcard[index]} `;
  }
  ctotal.innerHTML = `Computer Total: ${cSum}`;
  total.innerHTML = `Total: ${sum}`;
  if (sum < 21) {
    message.innerHTML = "Do you want new card";
  } else if (sum == 21) {
    message.innerHTML = "You won the game 🎉🎊";
    win = true;
  } else {
    message.innerHTML = "Sarry,you lost the game!😔";
    game = false;
  }
}

function winner() {
  if (sum > 21 || (cSum <= 21 && cSum > sum)) {
    message.innerHTML = "you lost the Game";
  } else if (sum == cSum) {
    message.innerHTML = "it's a tie";
  } else {
    message.innerHTML = "you won the game";
  }
}
