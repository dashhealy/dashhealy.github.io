//keep track of possible selections
const options = ["ROCK", "PAPER", "SCISSORS"];

//find user selection buttons
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

//find selection and result sections
const selection = document.querySelector("#selection");
const result = document.querySelector("#result");

//write event listeners for user selection
//when they click we want to send the array the correct array index
rockButton.addEventListener("click", function () {
  checkResult(0);
});
paperButton.addEventListener("click", function () {
  checkResult(1);
});
scissorsButton.addEventListener("click", function () {
  checkResult(2);
});

function checkResult(mySelection) {
  //find selectin in array
  let userSelection = options[mySelection];
  console.log(userSelection);
  //find computer selection
  //randomselect generates random number between 0 and 1 then mults by 3 and rounds down
  let randomSelect = Math.floor(Math.random() * 3);
  console.log(randomSelect);
  let computerSelection = options[randomSelect];
  //display both user and computer selection in DOM
  selection.innerHTML = `
  <p id="my-choice">
  <span class="${userSelection.toLowerCase()}">You picked: ${userSelection}</span>
  </p>
  <p id="computer-choice">
  <span class="${computerSelection.toLowerCase()}">Computer picked: ${computerSelection}</span>
  </p>
  `;
  if (userSelection === computerSelection) {
    //this happens if theres a tie
    result.innerHTML = `<p class="tie">It was a tie lol</p>`;
  } else if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "PAPER" && computerSelection === "ROCK") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    //this happens if you win
    result.innerHTML = `<p class="tie">You win :D</p>`;
  } else {
    //this happens if you lose
    result.innerHTML = `<p class="tie">Lmao git gud nerd lol</p>`;
  }
}
