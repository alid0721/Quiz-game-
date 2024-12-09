const playerName=document.querySelector("#nameInput")
const nameNextButton=document.querySelector("#secNextButton")
let currentPlayer
nameNextButton.addEventListener("click",()=>{
    currentPlayer=playerName.value
    //playerName=''
})
console.log(currentPlayer)