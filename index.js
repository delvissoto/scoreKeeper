const playTo = document.getElementById("playto");
const ply1Track = document.getElementById('ply1track')
const ply2Track = document.getElementById('ply2track')

const ply1Points = document.getElementById('ply1points')
const ply2Points = document.getElementById('ply2points')

const reset = document.getElementById('reset')
const h1 = document.querySelector('h1')




let gamepoint = 5;
let winner = false;
let score1 = 0
let score2 = 0

playTo.addEventListener('change', function () {
    gamepoint = parseInt(this.value)
    resett()
    
})


ply1Points.addEventListener('click', (e) =>{
  
    if(winner === true){
        return
    }
    else if(winner === false && score1 < gamepoint){
    score1++
    ply1Track.innerText = score1
        if(score1 == gamepoint) {
            winner = true
            ply1Track.classList.add("green")
            ply2Track.classList.add("red")
            h1.innerText = 'Player 1 Wins!!'
            
        }
    }
    
})


ply2Points.addEventListener('click', (e) =>{
    
    if(winner === true){
        return
    }
    else if(winner === false && score2 < gamepoint){
    score2++
    ply2Track.innerText = score2
        if(score2 == gamepoint) {
            winner = true
            ply2Track.classList.add("green")
            ply1Track.classList.add("red")
            h1.innerText = 'Player 2 Wins!!'
            
        }
    }
})
const resett = () =>{

    score1 = 0
    score2 = 0
    ply1Track.innerText = score1
    ply2Track.innerText = score2
    winner = false
    ply1Track.classList.remove("green","red")
    ply2Track.classList.remove("red", "green")
  
    h1.innerText = 'Score Tracker'
}


reset.addEventListener('click', resett)


