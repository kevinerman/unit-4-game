
var crystalOneRandom = 0;
var crystalTwoRandom = 0;
var crystalThreeRandom = 0;
var crystalFourRandom = 0;
var computerRandom = 0;
var randomCompNumber = Math.floor(Math.random() * (120 - 19) + 19);
var randomCrystal1 = Math.floor(Math.random() * (12 - 1) + 1);
var randomCrystal2 = Math.floor(Math.random() * (12 - 1) + 1);
var randomCrystal3 = Math.floor(Math.random() * (12 - 1) + 1);
var randomCrystal4 = Math.floor(Math.random() * (12 - 1) + 1);
var userNumber = 0;
var wins = 0;
var losses = 0;



$(document).ready(function(){

    function initGame() {
        userNumber = 0;
        $("#userNumberDisplay").text(userNumber);
        randomCompNumber = Math.floor(Math.random() * (120 - 19) + 19);
        $("#randomDisplay").text(randomCompNumber);
        randomCrystal1 = Math.floor(Math.random() * (12 - 1) + 1);
        randomCrystal2 = Math.floor(Math.random() * (12 - 1) + 1);
        randomCrystal3 = Math.floor(Math.random() * (12 - 1) + 1);
        randomCrystal4 = Math.floor(Math.random() * (12 - 1) + 1);
        $("#winsDisplay").text("Wins: " + wins);
        $("#lossesDisplay").text("Losses:" + losses);
    }

    function numberCheck() {
        if (userNumber > randomCompNumber) {
            alert("You Lose!");
            losses++;
            initGame();
        
        
        }   else if (userNumber === randomCompNumber) {
            alert("You Win!");
            wins++;
            initGame(); 
            }
        }

initGame();


$("#crystalDisplay1").on("click", function() {
    userNumber += randomCrystal1;
    $("#userNumberDisplay").text(userNumber);
    numberCheck();
});

$("#crystalDisplay2").on("click", function() {
    userNumber += randomCrystal2;
    $("#userNumberDisplay").text(userNumber);
    numberCheck();
});

$("#crystalDisplay3").on("click", function() {
    userNumber += randomCrystal3;
    $("#userNumberDisplay").text(userNumber);
    numberCheck();
});

$("#crystalDisplay4").on("click", function() {
    userNumber += randomCrystal4;
    $("#userNumberDisplay").text(userNumber);
    numberCheck();
});

});
