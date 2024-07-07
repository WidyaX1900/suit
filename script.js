const playerAtkBtnEl = document.getElementsByClassName("player-attack-button");
const playerAtkBtnArr = Array.from(playerAtkBtnEl);
const playerSelect = document.getElementById("playerSelect");
const enemySelect = document.getElementById("enemySelect");

let playerChoice = 0;
let enemyChoice = 0;
let result;

/* 
  ROCK, PAPER, SCISSOR NUMBER LABEL:
  1 = Paper
  2 = Rock
  3 = Scissor 
*/

playerAtkBtnArr.forEach((playerAtkBtn, index) => {
  playerAtkBtn.addEventListener("click", (event) => {
    playerSelect.classList.remove("hidden");
    playerSelect.nextElementSibling.classList.add("hidden");
    playerSelect.parentElement.classList.remove("opening");

    enemySelect.classList.remove("hidden");
    enemySelect.nextElementSibling.classList.add("hidden");
    enemySelect.parentElement.classList.remove("opening");

    let btnImage = playerAtkBtn.getElementsByTagName("img")[0];
    playerSelect.setAttribute("src", btnImage.src);

    const selectAttribute = playerSelect.getAttribute("src").split("/");
    const fileName = selectAttribute[4];

    if (fileName == "player1-rock.png") {
      playerSelect.classList.add("img-rock");
    } else {
      if (playerSelect.classList.contains("img-rock")) {
        playerSelect.classList.remove("img-rock");
      }
    }

    playerChoice = index + 1;
    enemyChoice = Math.floor((Math.random() * 3) + 1);

    if(playerChoice === enemyChoice) {
      result = "Draw";
    } else if
    (
      enemyChoice == 1 && playerChoice == 2 ||
      enemyChoice == 2 && playerChoice == 3 ||
      enemyChoice == 3 && playerChoice == 1
    ) {
      result = "You Lose!";
    } else {
      result = "You Win";
    }

    console.log(`Your choice: ${playerChoice}`);
    console.log(`Enemy choice: ${enemyChoice}`);
    console.log(result + "\n");
  });
});
