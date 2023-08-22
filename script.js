const questions = [ 
    {
    question : " Which is the largest animal in the world ? ",
    answers : [
        
           { text : "Shark", correct: false},
           { text : "Blue whale", correct: true},
           { text : "Elephant", correct: false},
           { text : "monkey", correct: false},
        
    ]
},

{
    question : " Whis is the smallest country in the world ? ",
    answers : [
        
           { text : "Vatican City", correct: true},
           { text : "Bhutan", correct: false},
           { text : "Nepal", correct: false},
           { text : "India", correct: false},
        
    ]
},
{
    question : " Which is the largest desert in the world ? ",
    answers : [
        
           { text : "Kahari", correct: false},
           { text : "Gobi", correct: false},
           { text : "Sahara", correct: true},
           { text : "Antarctica", correct: false},
        
    ]
},
{
    question : " Which is the smalest continent in the world ? ",
    answers : [
        
           { text : "Asia", correct: false},
           { text : "Australia", correct: true},
           { text : "Aractic", correct: false},
           { text : "Africa", correct: false},
        
    ]
},
{
    question : " Who is the most saxy girl  in the world ? ",
    answers : [
        
           { text : "Shreya", correct: false},
           { text : "KHUSHI", correct: true},
           { text : "Dolly", correct: false},
           { text : "Aunty ki beti", correct: false},
        
    ]
}

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const GobackButton = document.getElementById("btnn");

let currentQuestionIndex = 0;
let score = 0;
function startQuize(){
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHTML = "Next";
      showQuestion();

}
function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
});


}
function resetState(){




    nextButton.style.display = " none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selecteBtn = e.target;
    const isCorrect = selecteBtn.dataset.correct === "true";
    if(isCorrect){
        selecteBtn.classList.add("correct");
        score++;
    }else {
        selecteBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");

        }
        button.disabled = "true";

    });
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


 function showScore(){

    resetState();
    questionElement.innerHTML = ` You Scored ${ score } out  of ${questions.length       
}!`;
       nextButton.innerHTML = "Play Again";
       nextButton.style.display = "block";
       GobackButton.style.display = "block";


 }
nextButton.addEventListener("click", () => {

    if(currentQuestionIndex < questions.length){

        handleNextButton();
    }else{
        // showScore();
        startQuize();

    }

});

const backButtonClick = () => {
    // const data=questions[index];
    // const ans=getAnswer();
    // if(ans==data.correct){
    //    right++;
    // }else{
    //     wrong++;
    // }
    currentQuestionIndex++ > 0  && currentQuestionIndex--;
    
    startQuize()
    return;
  };

startQuize();
