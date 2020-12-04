const readlineSync = require('readline-sync');
const chalk = require('chalk');


var userName = readlineSync.question("Hey! What's your name? ");

console.log("Welcome "+userName+" Let's see how well you know me?");

console.log("\n");

var score = 0;

var highScores = [
  {
    name: "Siddharth",
    score: 5
  },
  {
    name: "Shivam",
    score: 4,
  }
]


// Question Answer function
function play(question,answer){

  var userAnswer = readlineSync.question(chalk.bold("\n"+question+" "));
  userAnswer = userAnswer.toUpperCase()

  if(userAnswer === answer){
    console.log(chalk.green("\nYou are right!"));
    score++;
    console.log(chalk.green("Your score is: "+score))
    console.log("\n");
  }
  else{
    console.log(chalk.red("\nYou are wrong!"));
    console.log(chalk.yellowBright("Your score is: "+score))
    console.log("\n");
  }
}

var questions = [
  q1 = {
    question: "What is my name? Careful with the spelling!",
    answer: "Shasheesh",
  },

  q2 = {
    question: "Do you know where I'm from?",
    answer: "Jodhpur",
  },

   q3 = {
    question: "Name of my favourite movie?",
    answer: "Interstellar",
  },

   q4 = {
    question: "My birthday?",
    answer:  "15 December",
  },

   q5 = {
    question: "What do I love to eat?", 
    
    answer: "Pizza",
  },

];



for(var i = 0;i<questions.length;i++){
  var userInput = readlineSync.question("Press e to exit and c to continue\n");
  if(userInput === "e"){
    break;
  }
  play(questions[i].question, questions[i].answer.toUpperCase());
}

if(score>4){
console.log(chalk.bgGreenBright("Your final score is: "+score));
}
else{
  console.log(chalk.bgRedBright("Your final score is: "+score));
}


if(score>=7){
  console.log(chalk.bgGreenBright("\n Congratulations you're on of the top scorers!\n Send me a screenshot to update your name in the list!\n"))
}

var userChoice = readlineSync.question("\n To check high scores, press s\n")
if(userChoice === "s"){
  highScores.forEach((score)=>{
    console.log("name: "+score.name+", score: "+score.score)
  })
}