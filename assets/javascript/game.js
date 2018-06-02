var winCounter=document.getElementById("wins");
var lossCounter=document.getElementById("losses");
var guessCounter=document.getElementById("guesses");
var hangMan=document.getElementById("sprite");
var guessDisplay=document.getElementById("guessedLetters");
var wordDisplay=document.getElementById("word");
var words=["one","two"];
var game={
 wins:0,
 losses:0,
 guesses:6,
 lettersGuessed:[""," "],
 word:"mulder"
}
document.onkeyup=function(event){


        //updatePage();
    
    
    
        if(game.word=""){
            //newWord();
        }
        if(game.lettersGuessed.includes(event.key)){
            alert("You already guessed that!");
        }
        else{
            if(game.word.includes(event.key)){
                alert(event.key+" is in the word!");
            }
            else{
                alert("Death draws closer");
                guesses--;
            }
        }
        game.lettersGuessed.push(event.key);
        spriteHandler(guesses);
        if(guesses==0)
        {
            alert("You Lost!")
            losses++;
        }
        updatePage();
    }

    function spriteHandler(sprite){
        var num=-110*sprite;
        document.getElementById("sprite").style.backgroundPositionx=num;
    }
    function checkGuessed(input){
        for(var i=0;i<game.lettersGuessed.length;i++){
            if(game.lettersGuessed[i]==input){
                return(true);
            }
        }
        return(false);
    }
    function checkWord(input){
        for(var i=0;i<game.word.length;i++){
            if(game.word[i]==input){
                return(true);
            }
        }
        return(false);
    }
    function updatePage(){
        document.getElementById("wins").textContent=game.wins;
        document.getElementById("losses").textContent=game.losses;
        document.getElementById("guesses").textContent=game.guesses;
        for(var i=0;i<game.word.length;i++){
            var letter=document.createElement("H1");
            if(game.lettersGuessed.includes(game.word[i])){
                letter.textContent(game.word[i]);
            }
            else{
                letter.textContent="_";
            }
            letter.classList.add("letter");
            document.getElementById("word").appendChild(letter);
        }
    }
    function newWord(){
        random=Math.floor(Math.random()*words.length+1);
        word=words[random];
        guesses=6;
        updatePage();
    }
    
