var you;
var ourscore = 0;
var opponent;
var opponentscore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".jpg";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);  // Fixed: getElementById
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("our-choice").src = you + ".jpg";

    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".jpg";

    if (you === opponent) {
        // It's a draw, no score increment.
    } else {
        if (you === "rock") {
            if (opponent === "scissors") {
                ourscore++;
            } else {
                opponentscore++;
            }
        } else if (you === "paper") {
            if (opponent === "rock") {
                ourscore++;
            } else {
                opponentscore++;
            }
        } else if (you === "scissors") {
            if (opponent === "paper") {
                ourscore++;
            } else {
                opponentscore++;
            }
        }
    }

    // Updating score 
    document.getElementById("our-score").innerText = ourscore;
    document.getElementById("opponent-score").innerText = opponentscore;
}
