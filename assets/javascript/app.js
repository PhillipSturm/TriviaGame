    $(document).ready(function () {
    var correct = 0;
    var inCorrect = 0;

    var counter = 45;
    var intervalId;
    var questions = [
        {
            question: "1) Which of the following is not a favorable adjective when discussing wine?",
            answers: ["Fat", "Flinty","Leggy", "Vigorous"],
            correctAnswer: "Fat"
        },
        {
            question: "2) Which phrase is used in restaurants to refer to being out of an item? ",
            answers: ["404", "86", "Slim", "56"],
            correctAnswer: "86"
        },
        {
            question: "3) Which ingredient is not essential in a margarita?",
            answers: ["Orange Liqueur", "Tequila", "Simple Syrup", "Lime Juice"],
            correctAnswer: "Simple Syrup"
        },
        {
            question: "4) What year did the oldest restaurant in Chicago Open?",
            answers: ["1909", "1907", "1881", "1892"],
            correctAnswer: "1881"
        },
        {
            question: "5) What is Huitlacoche?",
            answers: ["Argentinian Candy", "Brazilian Fish", "Peruvian Root Vegetable", "Mexican Truffle"],
            correctAnswer: "Mexican Truffle"
        },
        {
            question: "6) Which apple variety was designed at the University of Minnesota?",
            answers: ["Fuji", "Honeycrisp", "McIntosh Red", "Golden Delicious"],
            correctAnswer: "Honeycrisp"
        },
        {
            question: "7) Which country produces the most potatoes?",
            answers: ["United States", "China", "Ireland", "Russia"],
            correctAnswer: "China"
        },
        {
            question: "8) In the United States, about how much beer does the average person drink each year?",
            answers: ["24 Pints","24 Quarts", "24 Gallons", "24 Gills"],
            correctAnswer: "24 Gallons"
        }

    ];
    $(document).on('click', '#start', function (e) {
        start();
    });

    $(document).on('click', '#done', function (e) {
        done();
    });

    function start() {
        $('#start').remove();
        intervalId = setInterval(countdown, 1000);

        $('#wrapper').prepend(`<h2> Time Remaining:<span id="counter-number"> ${counter}</span>  Seconds</h2>`);

        for (var i = 0; i < questions.length; i++) {
            $("#button").append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#button").append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
            }
        }

        $("#button").append('<button id="done">Done</button>');
        $("#button").setAttribute("button");
    }
    function countdown() {
        counter--;
        $('#counter-number').html(counter);
        if (counter === 0) {
            alert("TIME UP!");
            done();
        }
    }

    function done() {
        for (var i = 0; i < questions.length; i++) {
            $.each($("input[name='question-" + i + "']:checked"), function () {
                if ($(this).val() === questions[i].correctAnswer) {
                    correct++;
                } else {
                    inCorrect++;
                }
            });
        }

        clearInterval(intervalId);
        $("#button").empty();
        $('#wrapper h2').remove();
        $('#button').append('<h3>Correct Answers: ' + correct + '</h3>');
        $('#button').append('<h3>Incorrect Answers: ' + inCorrect + '</h3>');
        $('#button').append('<h3>Unanswered: ' + (questions.length - (inCorrect + correct)) + '</h3>');
    }

});
