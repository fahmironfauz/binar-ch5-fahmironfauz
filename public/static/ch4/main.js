//App variables
let userScore = 0;
let compScore = 0;

//DOM retrieved elements
const user_score = document.getElementById("user-score");
const comp_score = document.getElementById("comp-score");
const score_board = document.querySelector(".score-board");
const result = document.querySelector(".result p");
const batu_element = document.getElementById("batu");
const kertas_element = document.getElementById("kertas");
const gunting_element = document.getElementById("gunting");


//Game functions - Win/Lose/Draw

const win = (userChoice) => {
    userScore++;
    user_score.innerText = userScore;
}

const lose = () => {
    compScore++
    comp_score.innerText = compScore;
}

const draw = () => {
    console.log("Janken draw!!");
}


// Function to Get Computer's Choice
const getCompChoices = () => {
    const choices = ["Batu","Kertas","Gunting"];
    return choices[Math.floor(Math.random()*3)];
}

// the game's main function

const game = (userChoice) => {
    const computerChoice = getCompChoices();
    switch (userChoice + computerChoice) {
        case "BatuGunting":
        case "GuntingKertas":
        case "KertasBatu":
            result.innerText = `${userChoice} vs ${computerChoice} : PLAYER 1 WIN`;
            win();
            break;
        case "BatuKertas":
        case "GuntingBatu":
        case "KertasGunting":
            result.innerText = `${userChoice} vs ${computerChoice} : COM WIN`;
            lose();
            break;

        default:
            result.innerText = `${userChoice} vs ${computerChoice} : DRAW`;
            draw();
            break;
    } 
}

const main = () => {
    batu_element.addEventListener("click", () => {
        game("Batu");
    });
    
    kertas_element.addEventListener("click", () => {
        game("Kertas");
    });
    
    gunting_element.addEventListener("click", () => {
        game("Gunting");
    });
}

main();
