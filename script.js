let userScore = 0;
let aiScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usersc = document.querySelector("#user-score");
const aisc = document.querySelector("#ai-score");
const rockk = document.querySelector("#rock");
const paperr = document.querySelector("#paper");
const scissorr = document.querySelector("#scissor");

const genAiChooice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIndex = Math.floor(Math.random() * 3);

  if (options[randIndex] === "rock") {
    rockk.style.border = "4px solid red";
    paperr.style.borderStyle = "none";
    scissorr.style.borderStyle = "none";
  } else if (options[randIndex] === "paper") {
    paperr.style.border = "4px solid red";
    scissorr.style.borderStyle = "none";
    rockk.style.borderStyle = "none";
  } else {
    scissorr.style.border = "4px solid red";
    paperr.style.borderStyle = "none";
    rockk.style.borderStyle = "none";
  }
  return options[randIndex];
};
const drowGame = () => {
  console.log("Game Drow");
  msg.innerText = "Game Drow";
  msg.style.backgroundColor = "white";
  msg.style.color = "black";
};

const showWinner = (userWin) => {
  if (userWin === true) {
    console.log("you Win!");
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
    usersc.innerText = ++userScore;
  } else {
    console.log("you Lose!");
    msg.innerText = "You Lose!";
    msg.style.backgroundColor = "red";
    aisc.innerText = ++aiScore;
  }
};

const playGame = (userChoice) => {
  console.log(`User Choice = ${userChoice} `);
  aaichoice = genAiChooice();
  console.log(`AI Choice = ${aaichoice}`);

  if (userChoice === aaichoice) {
    drowGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = aaichoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = aaichoice === "scissor" ? false : true;
    } else userWin = aaichoice === "rock" ? false : true;

    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log(`${userChoice} choice was clicked`);
    playGame(userChoice);
  });
});
