window.onload = function() {
  let intervalId;
  let timer = 90;
  var correct = 0;
  var incorrect = 0;
  //need set of questions


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

  function getQuestion() {
    //Get first question

    for (i = 0; i < questionArray.length; i++) {
      $("#quiz-area").append("<h2>" + questionArray[i].question + "</h2>");

      //Loop through question array and create buttons for each answer
      // Clear button div of any newly created buttons

      for (let k = 0; k < questionArray[i].answers.length; k++) {
        $("#quiz-area").append(
          "<h3><input type='radio' name='question-"  +
            i +
            "' value='" +
            questionArray[i].answers[k] +
            "''>" +
            questionArray[i].answers[k]
        );
      }
    }
    $("#quiz-area").append("<button id='submit-btn'>Done</button>");
  }

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

    //Question 4
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questionArray[3].correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    
    });

    //Question 5
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questionArray[4].correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });
  }

function results(){
  $("#quiz-area").empty();
  $("#timer-area").empty();
  $("#quiz-area").append("<h3>Correct:  " + correct + "</h3>");
  $("#quiz-area").append("<h3> Incorrect:  " + incorrect + "</h3>");

  if(correct > incorrect) {
    $("#quiz-area").prepend("<h4>Winner!</h4><br>")
  } else {
    $("#quiz-area").prepend("<h4>You Suck!</h4><br>")
  }
}
  
  // Click Events
  $(document).on("click", "#startGame", function() {
    $("#startGame").replaceWith();

    startTimer();
    decrement();
    getQuestion();
  });

  $(document).on("click", "#submit-btn", function() {
    score();
    results();
  });
};



