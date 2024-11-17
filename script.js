let yourScore = 0;
let systemScore = 0;

const choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");

const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const gencompchoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random()*3);
    return options[rand];
}

const drawgame = () => {
    message.innerText = "Game was Draw";
    message.style.backgroundColor = "#081b31";
}

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        yourScore++;
        userScore.innerText = yourScore;
        message.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    } else{
        systemScore++;
        compScore.innerText = systemScore;
        message.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
};

const playgame = (userChoice) =>{
    console.log("User Choice is ", userChoice);
    //Generating computer choice
    const compChoice = gencompchoice();
    console.log("Comp choice is ", compChoice);

    //To check winner
    if(userChoice === compChoice){
        drawgame();
    } else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userwin = compChoice === "scissors" ? false : true;
        } else{
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});