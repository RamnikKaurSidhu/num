'use strict';
let number=Math.floor(Math.random()*20)+1;
let score=20;
let highScore=0;
document.querySelector('.check').addEventListener('click',function () {
   const guess= Number(document.querySelector('.guess').value);
   if(!guess){
    document.querySelector('.message').textContent='⛔No number';

   }else if( guess===number){
    document.querySelector('.number').textContent=number;

    document.querySelector('.message').textContent='✅Correct Number';
score++;
document.querySelector('.score').textContent=score;
document.querySelector('body').style.
backgroundColor='#60b347';
document.querySelector('.number').style.width='30rem';
if(score>highScore){
    document.querySelector('.highscore').textContent=score;
}else if(highScore>score){
    document.querySelector('.highScore').textContent=highScore;
}

}else if(guess>number){
    if(score>0){
    document.querySelector('.message').textContent='📈Too high';
score--;   
document.querySelector('.score').textContent=score;
    }else{    document.querySelector('.message').textContent='You lost😢';


    }
}else if(guess<number){
    if(score>0){
    document.querySelector('.message').textContent='📉Too low';
score--; 
     document.querySelector('.score').textContent=score;
    }else{
        document.querySelector('.message').textContent='You lost😢';

    }
}
});
document.querySelector('.again').addEventListener('click',function(){
    // document.querySelector('.message').textContent='Start Guessing';
    // document.querySelector('.score').textContent='20';
    // document.querySelector('.number').textContent='';
    // document.querySelector('body').style='none';
score=20;
number=Math.floor(Math.random()*20)+1;
document.querySelector('.message').textContent='Start Guessing...';
document.querySelector('.score').textContent=score;
document.querySelector('.number').textContent='?';
document.querySelector('.guess').value='';
     document.querySelector('body').style.backgroundColor='#222';

})