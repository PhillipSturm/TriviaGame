var startScreen;
    var gameHTML;
    var counter = 30;
    var questionArray = ["Which of the following is not a favorable adjective when discussing wine?", "Which phrase is used in restaurants to refer to being out of an item?", "Which ingredient is not essential in a margarita?", "What year did the oldest restaurant in Chicago Open?", "What is Huitlacoche?", "Which apple variety was designed at the University of Minnesota?", "Which country produces the most potatoes?", "In the United States, about how much beer does the average person drink each year?"];
    var answerArray = [["Fat", "Flinty","Leggy", "Vigorous"], ["404", "86", "Slim", "56"],["Orange Liqueur", "Tequila", "Simple Syrup", "Lime Juice"], ["1909", "1907", "1881", "1892"], ["Argentinian Candy", "Brazilian Fish", "Peruvian Root Vegetable", "Mexican Truffle"], ["Fuji", "Honeycrisp", "McIntosh Red", "Golden Delicious"], ["United States", "China", "Ireland", "Russia"],["24 Pints","24 Quarts", "24 Gallons", "24 Gills"]]
    var imageArray = ["<img class='center-block img-right' src='assets/images/Wine1.gif'>", "<img class='center-block img-right' src='assets/images/86.gif'>", "<img class='center-block img-right' src='assets/images/Margs.gif'>", "<img class='center-block img-right' src='assets/images/Chicago.gif'>", "<img class='center-block img-right' src='assets/images/corn.gif'>", "<img class='center-block img-right' src='assets/images/science.gif'>", "<img class='center-block img-right' src='assets/images/china.gif'>", "<img class='center-block img-right' src='assets/images/beer.gif'>"]
    var correctAnswers = ["A. Fat", "B. 86", "C. Simple Syrup", "C. 1881", "D. Mexican Truffle", "B. Honeycrisp", "B. China", "C. 24 Gallons"];
    var questionCounter = 0;
    var selecterAnswer;
    var theClock;
    var correctTally = 0;
    var incorrectTally = 0;
    var unansweredTally = 0;

$(document).ready(function() {
    
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }
    
    initialScreen();
    
    
    
    $("body").on("click", ".start-button", function(event){
        generateHTML();
    
        timerWrapper();
    
    });
    
    $("body").on("click", ".answer", function(event){
        answeredQuestion = true;
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
    
            clearInterval(theClock);
            generateWin();
        }
        else {
            clearInterval(theClock);
            generateLoss();
        }
    }); 
    
    $("body").on("click", ".reset-button", function(event){
        resetGame();
    });
    
    }); 
    
    function generateLossDueToTimeOut() {
        unansweredTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000); 
    }
    
    function generateWin() {
        correctTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);
    }
    
    function generateLoss() {
        incorrectTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);
    }
    
    function generateHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
        $(".mainArea").html(gameHTML);
    }
    
    function wait() {
        if (questionCounter < 7) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
        }
        else {
            finalScreen();
        }
    }
    
    function timerWrapper() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(theClock);
                generateLossDueToTimeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function finalScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".mainArea").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        correctTally = 0;
        incorrectTally = 0;
        unansweredTally = 0;
        counter = 30;
        generateHTML();
        timerWrapper();
    }
    
    