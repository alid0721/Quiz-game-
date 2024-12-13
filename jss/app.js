//const playerName=document.querySelector("#nameInput")
//const nameNextButton=document.querySelector("#secNextButton")
//let currentPlayer
//nameNextButton.addEventListener("click",()=>{
//    currentPlayer=playerName.value
    //playerName=''
//})
//console.log(currentPlayer)

const playerName="Ali"
const Genres=["stem","history","language","geography"]

function init(){
    let score=0
    let numOfLives=3
    let numCompleted=0
    let prevLives=numOfLives
    genreSelector(score)
    livesChecker(prevLives,numOfLives,score)
    
}
function chooseGenre(){
    let clickedgenr="history"
    for (i=0;i<Genres.length;i++){
        if (clickedgenr===Genres[i]){
            return clickedgenr
        }
    }
}
function genreSelector(score){
    let currGenre=chooseGenre()
    if (currGenre==="stem"){
        score=score+stemQuestions()
    } else if (currGenre==="history"){
        score=score+histQuestions()
    }else if (currGenre==="language"){
        score=score+langQuestions()
    }else if (currGenre==="geography"){
        score=score+geoQuestions()
    }
    
}
function livesChecker(prevLives,numOfLives,score){
    if (prevLives!=numOfLives && numCompleted!=4 && numOfLives!=0){
        genreSelector()
    }else{
        display(playerName,score)
    }
}
function stemQuestions(){

}
function histQuestions(){

}
function langQuestions(){

}
function geoQuestions(){

}
function display(name,score){
    console.log(`Game over!!! Player ${name} has scored ${score} points`)
}
init()
