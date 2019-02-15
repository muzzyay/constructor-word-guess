const Word = require('./word');
const chalk = require("chalk");
const inquirer = require('inquirer');
var count = 10;
var wordBank = ["soccer", "basketball", "baseball", "volleyball", "football", "pineapple", "banana", "refrigrator", "elevator", "yoghurt", "eggplant", "birthday", "barbeque"];

var theWord;
    

function init(){
    theWord = new Word(wordBank[Math.floor(Math.random()*wordBank.length)]);
    count = 10;
    theWord.str();
}

function play(){

if(count>0){
inquirer.prompt([
    {
        type: "input",
        message: "Guess a Letter!",
        name: "letter"
    }
]).then(function(answer){
    theWord.guessed(answer.letter);
 

    if(theWord.arrLetters.some(elem => elem.letter === answer.letter)){
        console.log(chalk.bold.green("\nCORRECT!"));
        theWord.str();
        
    }else{
        count --;
        if(count===0){

            console.log(chalk.red("\nGame Over!!! Try Again! Here is your new word!"));
            init();

        }else{
            console.log(chalk.bold.red("\nINCORRECT!!!"));
        console.log(chalk.blue("\n"+count+" guesses remaining!!!\n"));
        theWord.str();
        }
        
    };

    
   
    if(theWord.arrLetters.every(elem=>elem.guessed)){
        console.log(chalk.green("\nYou WON!  Here is the new word!"));
        init();
    }
    play();
})

}


}

init();
play();

