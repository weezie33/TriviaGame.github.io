//load on browser refresh
window.onload = function () {
  let intervalId;
  let timer = 45;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;

//Questions
let questionArray = [{
    question: " Which number is the largest integer?",
    answers: [" 65", " -65", " 65.5", " -65.5"],
    correctAnswer: " 65",
    image:"assets/images/integer.png"
    }, 
    {
    question: " What season is the coldest?",
    answers: [" Spring", " Summer", " Fall", " Winter"],
    correctAnswer: " Winter",
    image:"assets/images/seasons.png"
    },
    {
    question: " What color is most associated with warmth?",
    answers: [" Yellow", " Red", " Orange", " Green"],
    correctAnswer: " Yellow",
    image:"assets/images/emotion-color.png"
}];

//timer section
  function startTimer() {
    intervalId = setInterval(decrement, 1000);
  }
//timer counts down until it reaches zero then it will stop
  function decrement() {
    timer--;
    $("#countdown").html("<span>" + timer + "<span>");

    if (timer === 0) {
      stopTimer();
    }
  }
  function stopTimer() {
    clearInterval(intervalId);
    nextQuestion();
  }

//Retrieves questions
  function getQuestion() {


    for (i = 0; i < questionArray.length; i++) {
      $("#quiz-area").append("<h2>" + questionArray[i].question + "</h2>");

//reviews questions array and generates selection

      for (let k = 0; k < questionArray[i].answers.length; k++) {
        $("#quiz-area").append(
          "<h3><input type='radio' name='question-"  + i + "' value='" + questionArray[i].answers[k]  + "''>" + questionArray[i].answers[k]);
                }
            }
            $("#quiz-area").append("<button id='submit-btn'>Done</button>");
        }

//   function score() {
// $.each($("input[type=radio]:checked"), function(i) {
//     if ($(this).val() === questionArray[i].correctAnswer) {
//         correct++;
//     } else if ($(this).val() !== questionArray[i].correctAnswer) {
//         incorrect++;
//     } else {
//         unanswered++;
//     }
// });
//   }

  function score() {
    //Queston 1
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questionArray[0].correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    //Question 2
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questionArray[1].correctAnswer) {
        correct++;
      } else {
        incorrect++;

      }
    });

    //Question 3
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questionArray[2].correctAnswer) {
        correct++;
      } else {
        incorrect++; 
      }
    });
  }

function results(){
  $("#quiz-area").empty();
  $("#timer-area").empty();
  $(".row").append("<h5>Correct:  " + correct + "</h5>");
  $(".row").append("<h5>Incorrect:  " + incorrect + "</h5>");
  $(".row").append("<h5>Unanswered:  " + unanswered + "</h5>");


  if(correct > incorrect) {
    $(".row").prepend("<h4>Winner!</h4><br>")
  } else {
      $(".row").prepend("<h4>You Suck!</h4><br>")
  };
}

  // Click Events
  $(document).on("click", "#startGame", function() {
    
    $("#timer-area").show();
    $("#startGame").replaceWith();

    startTimer();
    decrement();
    getQuestion();

  });

  $(document).on("click", "#submit-btn", function() {
    score();
    results();
  });

function timeUp() {
setTimeout(timesUp, 1000 * 45);
    $(document.container).append("Time's Up!");
    }


$(document).ready(function() {
    $(".fancy_title").lettering();
});

};
