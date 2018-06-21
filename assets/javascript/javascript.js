var crystalOneRandom = 0;
var crystalTwoRandom = 0;
var crystalThreeRandom = 0;
var crystalFourRandom = 0;
var computerRandom = 0;
var randomCompNumber = 0;
var randomCrystal1 = 0;
var randomCrystal2 = 0;
var randomCrystal3 = 0;
var randomCrystal4 = 0;
var userNumber = 0;
var wins = 0;
var losses = 0;



$(document).ready(function(){

    function initGame() {
        userNumber = 0;
        $("#userNumberDisplay").text("Team Power: "  + userNumber);
        randomCompNumber = Math.floor(Math.random() * (130 - 19) + 19);
      bossCheck();
        $("#randomDisplay").text(randomCompNumber);
        randomCrystal1 = Math.floor(Math.random() * (12 - 1) + 1);
        randomCrystal2 = Math.floor(Math.random() * (12 - 1) + 1);
        randomCrystal3 = Math.floor(Math.random() * (12 - 1) + 1);
        randomCrystal4 = Math.floor(Math.random() * (12 - 1) + 1);
        $("#winsDisplay").text("Wins: " + wins);
        $("#lossesDisplay").text("Losses: " + losses);
    }

    function numberCheck() {
        if (userNumber > randomCompNumber) {
            alert("The villain got away!");
            losses++;
            initGame();
        
        
        }   else if (userNumber === randomCompNumber) {
            alert("The villain has been defeated!");
            wins++;
            initGame(); 
            }
        }
  
  function bossCheck() {
    if (randomCompNumber < 40) {
      $("#bossPower").text("Sauron's Power");
      $("#bossImage").attr("src" , "assets/images/Sauron_Dialogue.png")
      
    } else if (randomCompNumber >= 40 && randomCompNumber < 60) {
      $("#bossPower").text("Blob's Power");
      $("#bossImage").attr("src" , "assets/images/Blob_Dialogue.png")
      
    } else if (randomCompNumber >= 60 && randomCompNumber < 80) {
      $("#bossPower").text("Sabretooth's Power");
      $("#bossImage").attr("src" , "assets/images/Sabretooth_Dialogue.png")
      
    }else if (randomCompNumber >= 80 && randomCompNumber < 100) {
      $("#bossPower").text("Juggernaut's Power");
      $("#bossImage").attr("src" , "assets/images/Juggernaut_Dialogue_1.png")
      
    } else if (randomCompNumber >= 100) {
      $("#bossPower").text("Magneto's Power");
      $("#bossImage").attr("src" , "assets/images/Magneto_Dialogue.png")
      $("#bossImage").attr("alt" , "Magneto")
    }
  }

initGame();


$("#crystalDisplay1").on("click", function() {
    userNumber += randomCrystal1;
    $("#userNumberDisplay").text("Team Power: "  + userNumber);
    numberCheck();
});

$("#crystalDisplay2").on("click", function() {
    userNumber += randomCrystal2;
    $("#userNumberDisplay").text("Team Power: "  + userNumber);
    numberCheck();
});

$("#crystalDisplay3").on("click", function() {
    userNumber += randomCrystal3;
    $("#userNumberDisplay").text("Team Power: "  + userNumber);
    numberCheck();
});

$("#crystalDisplay4").on("click", function() {
    userNumber += randomCrystal4;
    $("#userNumberDisplay").text("Team Power: "  + userNumber);
    numberCheck();
});

});
