var correct_answers = 0;
var total_questions = 5;

var table = document.getElementById("high_scores_table");

var timeLeft = 59;
var timerEl = document.getElementById('time_remaining');

var button_1 = document.getElementById("btn_answer_1");
var button_2 = document.getElementById("btn_answer_2");
var button_3 = document.getElementById("btn_answer_3");
var button_4 = document.getElementById("btn_answer_4");
var question = document.getElementById("quiz_question");
var q_num = 1;

const questions = {
    1: "What is HTML?",
    2: "What is Javascript?",
    3: "What is CSS?",
    4: "What is github?",
    5: "Who is Luke Skywalker?"
};

const answers_row_1 = {
    1:"Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.",
    2:"Minecraft developers",
    3:"Cascading Shape Sheets",
    4:"GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. ",
    5:"Count Dooku's apprentice"
}

const answers_row_2 = {
    1:"Facebook tool",
    2:"Tools to edit pictures",
    3:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    4:"Github is the next Myspace",
    5:"Anikan's Skywalkers brother"
}

const answers_row_3 = {
    1:"Hyper Tank Multi Launcher",
    2:"An object-oriented computer programming language commonly used to create interactive effects within web browsers.",
    3:"Alternitive for HTML",
    4:"Alternitive to Club Penguin",
    5:"Yoda's son"
}

const answers_row_4 = {
    1:"None of the above",
    2:"Same thing as Java",
    3:"None of the above",
    4:"None of the above",
    5:"Son of Darth Vader"
}

function countdown() {
    
    var timeInterval = setInterval(function () {
      
      if (timeLeft > 0) {
        
        timerEl.textContent = timeLeft;
        
        timeLeft--;  
        }else {
        
        timerEl.textContent = '0';
        
        clearInterval(timeInterval);
        
        document.querySelector("#quiz").setAttribute("style", "display:none");
        document.querySelector("#results").setAttribute("style", "display:flex");
        timeLeft= 0;
        q_num = 1;
        final_score_page();
        
      }
    }, 1000);
}

document.querySelector("#btn_start_quiz").addEventListener("click", function(event){
    countdown();
    document.querySelector("#intro").setAttribute("style", "display:none");
    document.querySelector("#quiz").setAttribute("style", "display:flex");
    quiz_update(q_num);
    
});

function quiz_update(i){
    if (i > 5){
        document.querySelector("#quiz").setAttribute("style", "display:none");
        document.querySelector("#results").setAttribute("style", "display:flex");
        timeLeft= 0;
        q_num = 1;
        final_score_page();
        
    }else{
        question.textContent = questions[i];
        button_1.textContent = answers_row_1[i];
        button_2.textContent = answers_row_2[i];
        button_3.textContent = answers_row_3[i];
        button_4.textContent = answers_row_4[i];
    }
}

document.querySelector("#btn_answer_1").addEventListener("click", function(event){
    document.querySelector("#right_wrong").setAttribute("style", "display:flex");
    if (q_num == 1||q_num == 4){
        
        correct_answers = correct_answers + 1;
        document.getElementById("right_wrong").textContent = "Correct!";
        console.log("right")
    }else{
        
        document.getElementById("right_wrong").textContent = "Incorrect";
        timeLeft=timeLeft-10;
        console.log("wrong")
    }
    q_num = q_num + 1;
    quiz_update(q_num)
});

document.querySelector("#btn_answer_2").addEventListener("click", function(event){
    document.querySelector("#right_wrong").setAttribute("style", "display:flex");
    if (q_num == 3){
        
        correct_answers = correct_answers + 1;
        document.getElementById("right_wrong").textContent = "Correct!";
        console.log("right")
    }else{
        
        document.getElementById("right_wrong").textContent = "Incorrect";
        timeLeft=timeLeft-10;
        console.log("wrong")
    }
    q_num = q_num + 1;
    quiz_update(q_num)
});

document.querySelector("#btn_answer_3").addEventListener("click", function(event){
    document.querySelector("#right_wrong").setAttribute("style", "display:flex");
    if (q_num == 2){
        
        correct_answers = correct_answers + 1;
        document.getElementById("right_wrong").textContent = "Correct!";
        console.log("right")
    }else{
        //update the text to say the answer was wrong.
        document.getElementById("right_wrong").textContent = "Incorrect";
        timeLeft=timeLeft-10;
        console.log("wrong")
    }
    q_num = q_num + 1;
    quiz_update(q_num)
});

document.querySelector("#btn_answer_4").addEventListener("click", function(event){
    document.querySelector("#right_wrong").setAttribute("style", "display:flex");
    if (q_num == 5){
        
        correct_answers = correct_answers + 1;
        document.getElementById("right_wrong").textContent = "Correct!";
        console.log("right")
    }else{
        
        document.getElementById("right_wrong").textContent = "Incorrect";
        timeLeft=timeLeft-10;
        console.log("wrong")
    }
    q_num = q_num + 1;
    quiz_update(q_num)

});

function final_score_page(){
    document.getElementById("score").textContent = "Final score: " + correct_answers + "/" + total_questions;
}

document.querySelector("#submit_button").addEventListener("click", function(event){
    event.preventDefault();
    var initials_input = document.getElementById("Ini").value;
    document.getElementById("Ini").value = "";
    document.querySelector("#results").setAttribute("style", "display:none");
    timerEl.textContent = 60;
    timeLeft = 59;
    document.querySelector("#high_scores_page").setAttribute("style", "display:flex");
    var table = document.getElementById("high_scores_table");
    var row = table.insertRow(1);
    var ini_cell = row.insertCell(0);
    var score_cell = row.insertCell(1);
    ini_cell.innerHTML = initials_input;
    score_cell.innerHTML = correct_answers + "/" + total_questions;
    console.log(initials_input);
});

document.querySelector("#restart_quiz").addEventListener("click", function(event){
    correct_answers = 0;
    
    q_num = 1;
    document.getElementById("right_wrong").textContent = "";
    countdown();
    document.querySelector("#intro").setAttribute("style", "display:none");
    document.querySelector("#high_scores_page").setAttribute("style", "display:none");
    document.querySelector("#quiz").setAttribute("style", "display:flex");
    quiz_update(q_num); 
});

document.querySelector("#clear_scores").addEventListener("click", function(event){
    var remove_rows = document.getElementById("high_scores_table").getElementsByTagName("tr").length;
    console.log(remove_rows);
    for (i = 1; i<remove_rows; i++){
        document.getElementById("high_scores_table").deleteRow(1)
    }
})