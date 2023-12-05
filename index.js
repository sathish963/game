let answer=Math.floor(Math.random()*10+1);
let numberOfTime=0;
let userName=prompt("entre your name!")
let input=document.getElementById("final");
document.getElementById("sumit").onclick  = function(){

let guess=document.getElementById("guessfield").value;
  numberOfTime+=1;
  if(guess==answer){
    alert(` both numbers are equal value and  you took ${numberOfTime}  times to guess a value`);
     document.getElementById("topic").innerHTML =`${userName} you won the game and you took ${numberOfTime} to guess the correct answer congulations`
  } else if( guess<answer){
    alert(`the number ${guess} is lesser then the guessing  number`);
  } else if(guess>answer){
    alert(`the number ${guess} is greater then guessing number`);
  }
  else{
    alert("give me valid number to check the guessing number ")
  }

}

