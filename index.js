function checkAnswer() {

    //These variables are for storing the values of the answers on the HTML page
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question4 = document.quiz.question4.value;
    let question5 = document.quiz.question5.value;

    let correctAnswers = 0;
    var messages = ["Great job!", "That's just okay", "You really need to do better"];
    var pictures = ["images/good.gif", "images/okay.gif", "images/run.gif"];

    let score;

    if (question1 == "China")
    { 
    correctAnswers++;
    } 

    if (question2 === "Browser" || question2 === "Web Browser")
    { 
    correctAnswers++;
    } 

    if (question3 == "Cardiff")
    { 
    correctAnswers++;
    } 

    if (question4 == 78)
    { 
    correctAnswers++;
    } 

    if (question5 == "Brendan Eich")
    { 
    correctAnswers++;
    } 

    // Display feedback message 
    if (correctAnswers <= 5) {
        score = 0;
    }

    if (correctAnswers <= 3) {
        score = 1;
    }

    if (correctAnswers <= 1) {
        score = 2;
    }

	document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correctAnswers + " correct.";
    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("picture").src = pictures[score];

}