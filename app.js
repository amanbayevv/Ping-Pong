const btnPlayer1 = document.querySelector('#btnPlayer1')
const btnPlayer2 = document.querySelector('#btnPlayer2')
const btnReset = document.querySelector('#reset')
const Player1 = document.querySelector('#player1')
const Player2 = document.querySelector('#player2')
const select = document.getElementById('gameLavel');


  

// Function For First counter
function Playerone() {
    if (
      Player1.textContent < +select.value &&
      Player2.textContent <  +select.value
    ) {
      Player1.textContent++
    } 
    if(Player1.textContent == +select.value &&
        Player2.textContent <  +select.value){
        Player1.style.color = 'green'
        Player2.style.color = 'red'
    }
  }
  
  // Function For Second counter
  function Playertwo() {
    if (
      Player2.textContent < +select.value &&
      Player1.textContent < +select.value) {
       Player2.textContent++
    }
    if(Player2.textContent == +select.value &&
        Player1.textContent <  +select.value) {
        Player2.style.color = 'green'
        Player1.style.color = 'red'
    }
  }
  // Function resetter
  function resetter(){
    Player2.textContent = 0
    Player1.textContent = 0
    Player1.style.color = 'black'
    Player2.style.color = 'black'
  }
  
  // Buttons' movement
  btnPlayer1.addEventListener('click', Playerone)
  btnPlayer2.addEventListener('click', Playertwo)
  
  // Resetter Movement
  reset.addEventListener('click',resetter)
  
  // Changing the goal and cleaning the score
  select.addEventListener('click', resetter)