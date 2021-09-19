var readlineSync = require('readline-sync');
var chalk = require('chalk');
var userName= readlineSync.question("Please enter your name: ");

console.log("Hey "+userName+", Welcome to javascript quiz\nLets start\nEnter only options");
console.log("\n");

score=0;
function checkAnswer(que,ans)
{
    userAns=readlineSync.question(que);
    if (ans===userAns){
        score+=1;
        console.log("Its correct! \nscore:"+chalk.green(score));
        console.log(chalk.yellow("---------------"));
    }
    else{
        console.log(chalk.red("Its Wrong"));
        console.log("\nscore:"+chalk.green(score));
        console.log(chalk.yellow("---------------"));
    }
    
}

var questions=[
  {
    que: "1)How can you detect the client's browser name?\na)navigator.appName\nb)browser.name\nc)client.navName\n",
    ans:"a"
  },

  {
    que:"2)Where is the correct place to insert a JavaScript?\na)<body> section\nb)<head> section\nc)Both the <head> section and the <body> section\n",
    ans:"c"
  },

  
  {
    que:"Which of the following code creates an object?\na)var book = Objet();\nb)var book = new Object();\nc)var book = new OBJECT();\n",
    ans:"b"
  },

  {
    que:"Which of the following option is correct if reverse() and join() are used together?\n\na) Reverses and stores\nb) Reverses and concatenates\nc) Only Reverses\nd) None of the mentioned\n",
    ans:"a"

  },

  {
    que:"Who has created JavaScript language?\na)Brendan Eich\nb)Dennis Ritchie\nc)James Gosling\n",
    ans:"a"
  }
]

for(var i=0;i<questions.length;i++)
{
    checkAnswer(questions[i].que,questions[i].ans);
}

var userHighScores=[
  {
    name:"Digambar",
    userScore:"5"
  },
  
  {
    name:"Mahesh",
    userScore:"4"
  }
]

console.log("your total score: "+ chalk.yellow(score));
console.log("\n");
console.log("below are the highscores")

for(var i=0;i<userHighScores.length;i++)
{
    console.log(userHighScores[i].name +":"+ chalk.yellow(userHighScores[i].userScore));

}




