var Letter = function (letter) {
    this.letter = letter;
    this.guessed = false;
};



Letter.prototype.isGuessed = function () {
    if (this.guessed) {
        return this.letter;
    } else {
        return "_";
    }
}


Letter.prototype.guessCheck = function (guessedLetter) {
    if (guessedLetter === this.letter) {
        this.guessed = true;
    }else{
        
    }

}



module.exports = Letter;