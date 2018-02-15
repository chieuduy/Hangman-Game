
    var bank = ['super mario bros', 'donkey kong', "contra", "tetris", 'street fighter', 'duck hunt', 'excite bike', 'legend of zelda', "pokemon", "bomberman", "popeye"]
    var randomWord = bank[Math.floor(Math.random() * bank.length)]

    var s
    var count = 0
    var answerArr = []
    var wrongGuess = []

    function startUp() {
        for (var i = 0; i < randomWord.length; i++) {
        answerArr[i] = "_"
    }
    document.getElementById("answer").innerHTML = answerArr.join(" ")
    }

    function Letter() {
        var letter = document.getElementById("letter").value
        if (letter.length > 0) {
            for (var i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === letter) {
        answerArr[i] = letter
                    document.getElementById("answer").innerHTML= answerArr.join(" ")
                    }
                // if(randomWord[i] !== letter){
        // wrongGuess[i] = letter
        // document.getElementById("stat").innerHTML = "Wrong Guesses: " + wrongGuess.join(" ")
        // }
    }
    count++
                    document.getElementById("counter").innerHTML= "Number of Guesses (out of 15): " + count;
                        if (count === 15  ) {
        alert("You Lose!")
        alert("Refresh page to play again!")
                            startUp();
                }

            }
    }

//TRIAL METHOD 2
// // create array - wordbank
// var wordbank = ['super\mario\bros', 'donkey\kong', 'street\fighter', 'pokemon', 'bomberman', 'tetris', 'duck\hunt']
// //choose random words
// var random = Math.floor(Math.random()*wordbank.length)
// var word = wordbank[random]
// var blanks = []

// var underscores = document.getElementsByClassName("underscores")
// var wrongguess = document.getElementsByClassName("wrongGuess")
// //underscores based on wordlength
// function generateBlanks(){
//     for(var i=0; i < word.length; i++){
//         blanks.push(" _ ")
//     }
//     return blanks;
// }
// //get users guess
// document.addEventListener('keypress', (event) => {
// var keyword = String.fromCharCode(event.keyCode)
// if (word.indexOf(keyword) > -1){
//     blanks[word.indexOf(keyword)] = keyword;
//     underscores[0].innerHTML = blanks.join(' ')
//     if(blanks.join(' ') == word){
//         alert('You Win!')
//     }
// }
// else{
//     wrongGuess.push(keyword)
//     wrongguess[0].innerHTML = wrongGuess
// }



// //check if guess is right
// //if wrong --> move to wrongarray
