
var words = ["super mario bros", "donkey kong", "contra", "tetris", "street fighter", "duck hunt", "excite bike", "legend of zelda", "pokemon", "bomberman", "popeye"]
var rdmWord = words[Math.floor(Math.random()*words.length)]

var x;
var count = 0 
var answer = []

function start(){
    for (var i = 0; i < rdmWord.length; i++){
        answer[i] = " _ "
    }
    x = answer.join('');
    $('answer').html(x);
}
 function guess(){
     var letter = $("letter").id
     if(letter.length > 0){
         for(var i = 0; i <rdmWord.length; i++){
             if (rdmWord[i] === letter){
                 answer[i] = letter;
             }
         }
         count++;
         $("id", "counter").html("Guesses so far:" + count)
         $("answer").html(x);
     }
 }