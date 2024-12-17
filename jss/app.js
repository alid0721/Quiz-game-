//const playerName=document.querySelector("#nameInput")
//const nameNextButton=document.querySelector("#secNextButton")
//let currentPlayer
//nameNextButton.addEventListener("click",()=>{
//    currentPlayer=playerName.value
    //playerName=''
//})
//console.log(currentPlayer)

//const Genres=["stem","history","language","geography"]

const msgElement= document.querySelector("#message")
function init(){
    const playerDAta={
        playerName:"",
        genre:"",
        score:0,
        livesCount:3,
        numCompleted:0
    }
    //let prevLives=playerDAta.livesCount
    const nameInput=document.querySelector("#nameInput")
    const nextButton=document.getElementById("nextButton")
    nextButton.addEventListener("click",()=>{
        playerDAta.playerName=nameInput.value
        //console.log(playerDAta)
        nameInput.value=""
        //console.log(playerDAta)
        genreSelector(playerDAta)
    })
    
    //livesChecker(prevLives,playerDAta)
    
}
// function chooseGenre(){
//     let clickedgenr="history"
//     for (i=0;i<Genres.length;i++){
//         if (clickedgenr===Genres[i]){
//             return clickedgenr
//         }
//     }
// }
function genreSelector(playerDAta){
    const GenreButton=document.querySelectorAll(".genre")
    GenreButton.forEach(button=>{
        button.replaceWith(button.cloneNode(true))
    })
    const newGenreButtons=document.querySelectorAll(".genre")
    newGenreButtons.forEach(button=>{
        button.addEventListener("click",()=>{
            playerDAta.genre=button.textContent
            if (playerDAta.genre==="Stem"&&playerDAta.numCompleted!=4){
                //console.log(playerDAta.genre)
                //console.log(playerDAta.numCompleted)
                stemQuestions(playerDAta)
            } else if (playerDAta.genre==="History"&&playerDAta.numCompleted!=4){
                //console.log(playerDAta.genre)
                //console.log(playerDAta.numCompleted)
                histQuestions(playerDAta)
            } else if (playerDAta.genre==="Literature"&&playerDAta.numCompleted!=4){
                //console.log(playerDAta.genre)
                //console.log(playerDAta.numCompleted)
                litQuestions(playerDAta)
            }else if (playerDAta.genre==="Geography"&&playerDAta.numCompleted!=4){
                //console.log(playerDAta.genre)
                //console.log(playerDAta.numCompleted)
                geoQuestions(playerDAta)
            }else{
                display(playerDAta.playerName,playerDAta.score)
            }
        })
    })
} 
// function livesChecker(prevLives,playerDAta){
//     if (prevLives!=playerDAta.livesCount && playerDAta.numCompleted!=4 && playerDAta.livesCount!=0){
//         genreSelector()
//     }else{
//         display(playerDAta.playerName,playerDAta.score)
//     }
// }
function stemQuestions(data){
    const q1Buttons=document.querySelectorAll("#Q1")
    const q2Buttons=document.querySelectorAll("#Q2")
    const q3Buttons=document.querySelectorAll("#Q3")
    const q4Buttons=document.querySelectorAll("#Q4")
    q1Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ1Buttons=document.querySelectorAll("#Q1")
    newQ1Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
            //console.log(data.livesCount)
            if (button.textContent==="A. x= 2 and x= 3"){
                //console.log(button.textContent)
                data.score+=10
                msgElement.textContent=`Answered correctly!! current score is ${data.score}`
            }else{
                data.livesCount-=1
                msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
    q2Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ2Buttons=document.querySelectorAll("#Q2")
    newQ2Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
            //console.log(data.livesCount)
            if (button.textContent==="A. 20 m"){
                //console.log(button.textContent)
                data.score+=10
                msgElement.textContent=`Answered correctly!! current score is ${data.score}`
            }else{
                data.livesCount-=1
                msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
    q3Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ3Buttons=document.querySelectorAll("#Q3")
    newQ3Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
           //console.log(data.livesCount)
            if (button.innerHTML==="B. C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>"){
                //console.log(button.textContent)
                data.score+=10
                msgElement.textContent=`Answered correctly!! current score is ${data.score}`
            }else{
                data.livesCount-=1
                msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
    q4Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ4Buttons=document.querySelectorAll("#Q4")
    newQ4Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
            //console.log(data.livesCount)
            if (button.textContent==="B. It consumes plants for energy."){
                //console.log(button.textContent)
                data.score+=10
                data.numCompleted+=1
                msgElement.textContent=`Answered correctly!! current score is ${data.score}, good job on clearing this section please choose a new topic`
                genreSelector(data)
            }else{
                data.livesCount-=1
                msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
}
function histQuestions(data){
    const q1Buttons=document.querySelectorAll("#Q1")
    const q2Buttons=document.querySelectorAll("#Q2")
    const q3Buttons=document.querySelectorAll("#Q3")
    const q4Buttons=document.querySelectorAll("#Q4")
    q1Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ1Buttons=document.querySelectorAll("#Q1")
    newQ1Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
            //console.log(data.livesCount)
            if (button.textContent==="C. Germany’s invasion of Poland"){
                //console.log(button.textContent)
                data.score+=10
                msgElement.textContent=`Answered correctly!! current score is ${data.score}`
            }else{
                data.livesCount-=1
                msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
    q2Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ2Buttons=document.querySelectorAll("#Q2")
    newQ2Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
            //console.log(data.livesCount)
            if (button.textContent==="C. To declare the colonies’ independence from Britain"){
                //console.log(button.textContent)
                data.score+=10
                msgElement.textContent=`Answered correctly!! current score is ${data.score}`
            }else{
                data.livesCount-=1
                msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
    q3Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ3Buttons=document.querySelectorAll("#Q3")
    newQ3Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
           //console.log(data.livesCount)
            if (button.innerHTML==="B. Mesopotamia"){
                //console.log(button.textContent)
                data.score+=10
                msgElement.textContent=`Answered correctly!! current score is ${data.score}`
            }else{
                data.livesCount-=1
                msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
    q4Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ4Buttons=document.querySelectorAll("#Q4")
    newQ4Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
            //console.log(data.livesCount)
            if (button.textContent==="B. Widespread famine and economic inequality"){
                //console.log(button.textContent)
                data.score+=10
                data.numCompleted+=1
                msgElement.textContent=`Answered correctly!! current score is ${data.score}, good job on clearing this section please choose a new topic`
                genreSelector(data)
            }else{
                data.livesCount-=1
                msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
}
function litQuestions(data){
    const q1Buttons=document.querySelectorAll("#Q1")
    const q2Buttons=document.querySelectorAll("#Q2")
    const q3Buttons=document.querySelectorAll("#Q3")
    const q4Buttons=document.querySelectorAll("#Q4")
    q1Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ1Buttons=document.querySelectorAll("#Q1")
    newQ1Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
            //console.log(data.livesCount)
            if (button.textContent==="A. Romeo"){
                //console.log(button.textContent)
                data.score+=10
                msgElement.textContent=`Answered correctly!! current score is ${data.score}`
            }else{
                data.livesCount-=1
                msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
    q2Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ2Buttons=document.querySelectorAll("#Q2")
    newQ2Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
            //console.log(data.livesCount)
            if (button.textContent==="B. F. Scott Fitzgerald"){
                //console.log(button.textContent)
                data.score+=10
                msgElement.textContent=`Answered correctly!! current score is ${data.score}`
            }else{
                data.livesCount-=1
                msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
    q3Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ3Buttons=document.querySelectorAll("#Q3")
    newQ3Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
           //console.log(data.livesCount)
            if (button.innerHTML==="C. A Tale of Two Cities by Charles Dickens"){
                //console.log(button.textContent)
                data.score+=10
                msgElement.textContent=`Answered correctly!! current score is ${data.score}`
            }else{
                data.livesCount-=1
                msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
    q4Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ4Buttons=document.querySelectorAll("#Q4")
    newQ4Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
            //console.log(data.livesCount)
            if (button.textContent==="A. Robert Frost"){
                //console.log(button.textContent)
                data.score+=10
                data.numCompleted+=1
                msgElement.textContent=`Answered correctly!! current score is ${data.score}, good job on clearing this section please choose a new topic`
                genreSelector(data)
            }else{
                data.livesCount-=1
               msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
}
function geoQuestions(data){
    const q1Buttons=document.querySelectorAll("#Q1")
    const q2Buttons=document.querySelectorAll("#Q2")
    const q3Buttons=document.querySelectorAll("#Q3")
    const q4Buttons=document.querySelectorAll("#Q4")
    q1Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ1Buttons=document.querySelectorAll("#Q1")
    newQ1Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
            //console.log(data.livesCount)
            if (button.textContent==="B. Asia"){
                //console.log(button.textContent)
                data.score+=10
                msgElement.textContent=`Answered correctly!! current score is ${data.score}`
            }else{
                data.livesCount-=1
                msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
    q2Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ2Buttons=document.querySelectorAll("#Q2")
    newQ2Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
            //console.log(data.livesCount)
            if (button.textContent==="C. Nile River"){
                //console.log(button.textContent)
                data.score+=10
                msgElement.textContent=`Answered correctly!! current score is ${data.score}`
            }else{
                data.livesCount-=1
                msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
    q3Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ3Buttons=document.querySelectorAll("#Q3")
    newQ3Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
           //console.log(data.livesCount)
            if (button.innerHTML==="B. Ottawa"){
                //console.log(button.textContent)
                data.score+=10
                msgElement.textContent=`Answered correctly!! current score is ${data.score}`
            }else{
                data.livesCount-=1
                msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
    q4Buttons.forEach(button=>{
        //console.log(button.textContent)
       button.replaceWith(button.cloneNode(true))
    })
    const newQ4Buttons=document.querySelectorAll("#Q4")
    newQ4Buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            //console.log(button.textContent)
            //console.log(data.livesCount)
            if (button.textContent==="B. Mediterranean"){
                //console.log(button.textContent)
                data.score+=10
                data.numCompleted+=1
                msgElement.textContent=`Answered correctly!! current score is ${data.score}, good job on clearing this section please choose a new topic`
                genreSelector(data)
            }else{
                data.livesCount-=1
                msgElement.textContent=`Incorrect answer number of lives remaining is ${data.livesCount}`
                if (data.livesCount===0){
                    display(data.playerName,data.score)
                }else{
                    genreSelector(data)
                }
            }
        })
    })
}
function display(name,score){
    msgElement.textContent=`Game over!!! Player ${name} has scored ${score} points`
    
}
init()
