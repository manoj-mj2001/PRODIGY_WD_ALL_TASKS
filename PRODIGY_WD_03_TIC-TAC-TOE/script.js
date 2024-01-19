const winAudio = new Audio("./winning-sound.mpeg");
const turn1 = new Audio("./player-x-sound.mpeg");
const turn2 = new Audio("./player-o-sound.mpeg");
var turn = 1;
var win = false;
var boxClickArray = [];

function checkWin() {
  var box = document.getElementsByClassName("square");
  var winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winConditions.forEach((e) => {
    if (
      box[e[0]].innerHTML === box[e[1]].innerHTML &&
      box[e[1]].innerHTML === box[e[2]].innerHTML &&
      box[e[0]].innerHTML === box[e[2]].innerHTML &&
      box[e[0]].innerHTML !== ""
    ) {
      document.querySelector(".pyro").style.display = "block";
      winAudio.play();
      document.getElementsByClassName("message")[0].innerHTML =
        "Player " + box[e[0]].innerHTML + " Won..!";
      win = true;
      setTimeout(() => {
        document.querySelector(".pyro").style.display = "none";
        winAudio.pause();
      }, 4000);
    }
  });
}

function reset() {
  winAudio.pause();
  document.getElementsByClassName("message")[0].innerHTML =
    "Player X's Turn..! ";
  var box = document.getElementsByClassName("square");
  document.querySelector(".pyro").style.display = "none";

  for (i = 0; i <= 8; i++) {
    box[i].innerHTML = null;
  }
  win = false;
  turn = 1;
  boxClickArray = [];
}

function boxClick(num) {
  if (!boxClickArray.includes(num)) {
    if (turn < 10) {
      if (!win) {
        boxClickArray.push(num);
        const box = document.querySelector(".square:nth-child(" + num + ")");
        if (turn % 2 == 0) {
          turn1.play();
          box.innerHTML = "O";
          box.style.color = "blue";
          document.getElementsByClassName("message")[0].innerHTML =
            "Player X's Turn..! ";
        } else {
          turn2.play();
          box.style.color = "red";
          box.innerHTML = "X";
          document.getElementsByClassName("message")[0].innerHTML =
            "Player O's Turn..! ";
        }
        checkWin();
        turn++;
      }
    }
  } else {
    alert("Already checked that box..!");
  }
}
