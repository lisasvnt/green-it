// Variables globales
let currentScore = 0;
let targetScore = 0;

// Récupération des éléments HTML
const setup = document.getElementById("setup");
const game = document.getElementById("game");
const pointsGoal = document.getElementById("points-goal");
const currentPoints = document.getElementById("current-points");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const btnNewGame = document.getElementById("new-game-btn");
const btn2 = document.getElementById("2-players");
const btn3 = document.getElementById("3-players");
const btn4 = document.getElementById("4-players");
const btn5 = document.getElementById("5-players");
const btn6 = document.getElementById("6-players");

// Fonction pour démarrer le jeu
function startGame(numPlayers) {
    targetScore = numPlayers * 10;

    // Cacher "setup" et afficher "game"
    setup.style.display = "none";
    game.style.display = "block";

    // Afficher l'objectif
    pointsGoal.textContent = targetScore + " points";
}

// Ecouteurs d'événements
btn2.addEventListener("click", () => startGame(2));
btn3.addEventListener("click", () => startGame(3));
btn4.addEventListener("click", () => startGame(4));
btn5.addEventListener("click", () => startGame(5));
btn6.addEventListener("click", () => startGame(6));

// Ecouteurs d'événements + et -
minus.addEventListener("click", function() {
    if (currentScore > 0) {
        currentScore --;
        currentPoints.textContent = currentScore;
    }
});

plus.addEventListener("click", function() {
    currentScore ++;
    currentPoints.textContent = currentScore;

    // Vérifier si l'équipe a gagné
    if (currentScore >= targetScore){
        setTimeout(function() {
            alert("🎉 You won! You reached " + currentScore + " points!")
        }, 100);
    }
})

// Fonction pour recommencer une partie
btnNewGame.addEventListener("click", function() {
    targetScore = 0;
    currentScore= 0;
    currentPoints.textContent = 0
    setup.style.display = "block";
    game.style.display = "none";
})






