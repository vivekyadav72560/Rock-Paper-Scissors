let score =JSON.parse(localStorage.getItem('score'));

if(score === null){
  score = {
    wins:0,
    losses:0,
    ties:0
  }
};

updateScore();

function playGame(playerMove){
const computerMove = pickComputerMove();

let result='';
if(playerMove === 'Scissors'){
  if(computerMove==='rock'){
        result='Lost';
    }
    else if(computerMove==='paper'){
      result='Won';
    }
    else if(computerMove==='Scissors'){
      result='Tie';
    }
}
else if(playerMove== 'paper'){
  if(computerMove==='paper'){
    result='Tie';
  }
  else if(computerMove==='Scissors'){
    result='Lost';
  }
  else if(computerMove==='rock'){
    result='Won';
  }
}
else if(playerMove== 'rock'){
  if(computerMove==='rock'){
    result='Tie';
  }
  else if(computerMove==='paper'){
    result='Lost';
  }
  else if(computerMove==='Scissors'){
    result='Won';
  }
}
if(result === 'Won'){
score.wins+=1;
}
else if(result === 'Lost'){
score.losses +=1;
}
else if(result === 'Tie'){
score.ties +=1;
}
//storing the data in local storage
//setItem fxn excepts two strings so converting score to string to JSON fxn
localStorage.setItem('score',JSON.stringify(score));

updateScore();

document.querySelector('.js-result')
.innerHTML =`You ${result}`;

document.querySelector('.js-result')
.innerHTML = `You 
<img src="Image/${playerMove}-emoji.png" 
class="button-image">
<img src="Image/${computerMove}-emoji.png"
 class="button-image"> 
 Computer`;  

//     alert(`You Picked:${playerMove} and You ${result}
// Wins:${score.wins} Loss:${score.losses} Ties:${score.ties}`);
}


function updateScore(){
  document.querySelector('.js-score')
  .innerHTML=`Wins: ${score.wins} Loss:${score.losses} Ties:${score.ties}`;
}

function pickComputerMove(){
const randomN0= Math.random();
let computerMove="";

if(randomN0>=0 && randomN0 <1/3){
  computerMove='rock';
}
else if(randomN0>=1/3 && randomN0 <2/3){
  computerMove='paper';
}
else if(randomN0>=2/3 && randomN0 <1){
  computerMove='Scissors';
}

return computerMove;

}
