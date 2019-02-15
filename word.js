const Letter = require('./letter');

var Word = function(word){
    this.arrLetters = word.split("").map(elem=> new Letter(elem));
}




Word.prototype.str = function(){
    var arr = [];
    this.arrLetters.forEach(function(elem){
        
        arr.push(elem.isGuessed());
        
    })
    console.log("\n"+arr.join(" ")+"\n");
}

Word.prototype.guessed = function(guessedLetter){
    this.arrLetters.forEach(function(elem){
        elem.guessCheck(guessedLetter);
    })

}





module.exports = Word;