const questions = [ 
    {
    question : " Which is the largest animal in the world ? ",
    answers : [
        
           { text : "Dog", correct: false},
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
           { text : "Sahara", correct: false},
           { text : "Antarctica", correct: true},
        
    ]
},
{
    question : " Which is the smallest continent in the world ? ",
    answers : [
        
           { text : "Asia", correct: false},
           { text : "Australia", correct: true},
           { text : "Aractic", correct: false},
           { text : "Africa", correct: false},
        
    ]
},
{
    question : " Who is the Father Of Indian Constitution ? ",
    answers : [
        
           { text : " Dr Sachchidananda Sinha", correct: false},
           { text : "Dr Bheem Rao Ambedkar", correct: true},
           { text : " DrRajendra Prasad", correct: false},
           { text : "Mahatma Gandhi", correct: false},
        
    ]
},

{
    question : " Sunset and Sunrise ke samay sun ka abhari chapatapan kis parighatna ke karan hota h ? ",
    answers : [
        
           { text : "Refraction ( Apbartan )", correct: true},
           { text : "Reflection ( Prabartan)", correct: false},
           { text : "Diffraction ( vivartan )", correct: false},
           { text : "Polarization ( Dhurvan)", correct: false},
        
    ]
},

{
    question : " Fisrt world War ke samay kon sa desh 1915 me Britain ke khilaf centeral force me shamil hua tha ? ",
    answers : [
        
           { text : "France ", correct: false},
           { text : "Bulgaria", correct: true},
           { text : "America", correct: false},
           { text : "Germany", correct: false},
        
    ]
},
{
    question : " Tehri Dam kis rivers ke Sangam ( Confluence ) par situated h  ",
    answers : [
        
           { text : "Bhagbati and Bhilganga", correct: true},
           { text : "Bhagbati and Alanknanda", correct: false},
           { text : "Alaknanda and Vanganga", correct: false},
           { text : "Banas and Khari", correct: false},
        
    ]
}










];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const GobackButton = document.getElementById("btnn");
const Leng =document.getElementById("lengt");

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
    Leng.innerHTML=` Ques.  Watched ${  questionNo } out  of ${questions.length       
    }!`;
    
    
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
       Leng.innerHTML="ABHII";
       
      ;


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
    currentQuestionIndex > 0  && currentQuestionIndex--;
    
   showQuestion()
   
    return;
  };

startQuize();
