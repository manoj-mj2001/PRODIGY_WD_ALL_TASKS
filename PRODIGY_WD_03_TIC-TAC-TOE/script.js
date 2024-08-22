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
      let winner = box[e[0]].innerHTML;
      Swal.fire({
        title: "Congratulations!",
        text: "Player " + winner + " Won!",
        imageUrl: "./cartoon-celebration.webp",
        imageWidth: 300,
        imageHeight: 200,
        customClass: {
          title: "custom-swal-title",
        },
        confirmButtonText: "Play Again",
        confirmButtonColor: "#ff4500",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      }).then(() => {
        reset();
      });
      win = true;
      setTimeout(() => {
        document.querySelector(".pyro").style.display = "none";
        winAudio.pause();
      }, 4000);
    }
  });

  if (!win && boxClickArray.length === 9) {
    Swal.fire({
      title: "Game Over!",
      text: "It's a tie! Please try a new game.",
      customClass: {
        title: "custom-swal-title",
      },
      imageUrl: "./sorry.gif",
      imageWidth: 200,
      imageHeight: 300,
      confirmButtonText: "New Game",
      confirmButtonColor: "#ff4500",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    }).then(() => {
      reset();
    });
  }
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
    Swal.fire({
      imageUrl: "./not-allowed.png",
      imageWidth: 200,
      imageHeight: 200,
      height: 600,
      title: "Oops!",
      customClass: {
        title: "custom-swal-title",
      },
      text: "That box is already checked out.",
      confirmButtonText: "Got it!",
      confirmButtonColor: "#ff4500",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  }
}
