const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ["Who was the first American woman in space? "];
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space?	","True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];


function askForName() {
  
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter canidate name: ");
  console.log("Welcome, " + candidateName); 
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question);
  for (i = 0; i < questions.length; i++){
    candidateAnswers[i] = input.question((i+1)+") "+questions[i]+"\nYour Answer: ");
    console.log("Correct Answer: "+correctAnswers[i]+"\n");
  }

}

function gradeQuiz(candidateAnswers) {
  let score = 0;
  let questionsCount = candidateAnswers.length;
  
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

/*  if(candidateAnswer === correctAnswer){
    console.log("Correct!");
    score++;
  } */
  for (i = 0; i < questions.length; i++){
    if(candidateAnswers[i] === correctAnswers[i]){
      score++;
    }
  }

  let grade = 100*(score / questionsCount);

  console.log("Overall Grade: "+grade+"% ("+score+" of "+questionsCount+" responses correct)");
  if(grade >= 80){
    console.log("Status: PASSED");
  }else{
    console.log("Status: FAILED");
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();

  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};