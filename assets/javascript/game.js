$(document).ready(function() {

    //Define Crystal Variables
    var firstCrystal = 1;
    var highEndCrystal = 12;
    var crystalValues = [];
    while (firstCrystal <= highEndCrystal) {
        crystalValues.push(firstCrystal++);
    }

    //Define Computer Score 
    var lowEndComputer = 19;
    var highEndComputer = 120;
    var computerValues = [];
    while (lowEndComputer <= highEndComputer) {
        computerValues.push(lowEndComputer++);
    }

    //Define All Other Variables
    var wins = 0;
    var losses = 0;
    var playerScore = 0;
    var computerScore;
    var crystalsObject;

    // jQuery write to page
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#playerScore").html(playerScore);
    $("#computerScore").html(computerScore);

    // Start Game 
    startAndReset();

    // Generate Random Crystal Values
    function random() {
        return Math.floor((Math.random() * crystalValues.length) + 1);
    }

    // Generate Random Computer Score
    function randomComp() {
        return Math.floor((Math.random() * computerValues.length) + 1);
    }

    // Crystals Object w/ Random Values
    function crystals() {
        crystalsObject = {
            realityStone: random(),
            spaceStone: random(),
            soulStone: random(),
            mindStone: random()
        };
    }

    //Click Events for Crystals + Game Play
    $("#realityStone").on("click", function() {
        $("#crystalScore1").hide(crystalsObject.realityStone);
        playerScore += crystalsObject.realityStone;
        $("#playerScore").html(playerScore);
        checkScores();
    });

    $("#spaceStone").on("click", function() {
        $("#crystalScore2").hide(crystalsObject.spaceStone);
        playerScore += crystalsObject.spaceStone;
        $("#playerScore").html(playerScore);
        checkScores();
    });

    $("#soulStone").on("click", function() {
        $("#crystalScore3").hide(crystalsObject.soulStone);
        playerScore += crystalsObject.soulStone;
        $("#playerScore").html(playerScore);
        checkScores();
    });

    $("#mindStone").on("click", function() {
        $("#crystalScore4").hide(crystalsObject.mindStone);
        playerScore += crystalsObject.mindStone;
        $("#playerScore").html(playerScore);
        checkScores();
    });

    //Check Player vs. Computer Score & Display Wins & Losses
    function checkScores() {
        if (playerScore === computerScore) {
            wins++;
            $("#wins").html(wins);
            startAndReset();

        } else if (playerScore > computerScore) {
            losses++;
            $("#losses").html(losses);
            startAndReset();
        }
    }

    // Start & Reset Game
    function startAndReset() {
        random();
        crystals();
        playerScore = 0;
        $("#playerScore").html(playerScore);
        computerScore = randomComp();
        $("#computerScore").html(computerScore);
    }
});