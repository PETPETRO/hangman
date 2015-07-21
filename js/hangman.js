// Vytvorte funkciu getGuessedWord(secret, lettersGuessed), ktorá
// bude mať dva parametre: secret - slovo, ktoré má byť uhádnuté, a lettersGuessed - reťazec reprezentovaný písmenami, ktoré už boli úhadnuté
// vráti reťazec, ktorý vznikne z reťazca secret nahradením všetkých neuhádnutých písmen (tie, ktoré sa nenachádzajú v reťazci lettersGuessed) znakom ‘_’
// Príklad použitia:
// console.log( getGuessedWord("container", "arpxtxgoieyu") )
// "_o_tai_er"

// getGuessedWord()


function getGuessedWord(secret, lettersGuessed)
{
  var result='';
  for(var c of secret)
    {
      if(lettersGuessed.indexOf(c)>=0)
        {
          result+=c;
        }
      else
        result+='_';
    }
  return result;
}

// Zadeklarujte dve globalne premenne:
// secret - hadane slovo, inicializujte na hodnotu "javascript"
// guessedLetters - doteraz uhadnute pismena, inicializujte na prazdny retazec



var x= document.getElementById('secret');
var secret='JAVASCRIPT';
var lettersGuessed='';
x.textContent= getGuessedWord(secret, lettersGuessed);
var counter=1;

// for(i=65; i<=90 ;i++){

// 	var c=String.fromCharCode(i);
// 	console.log(c);
// }


function onClick(event){
	var el= event.target;
	//console.log( el.textContent);
	//deactivate button
	el.setAttribute('disabled','disabled');
	//update letters guessed
	lettersGuessed+=el.textContent;
	//update
	x.textContent= getGuessedWord(secret, lettersGuessed);
	
	
	
    	//update image
      if(x.textContent.search(el.textContent)<0)
        {
        	if(counter<5){
        		counter++;
          document.getElementById('phase').setAttribute("src","images/phase"+counter+".png");
          console.log(counter);
        	}
        	else if (counter == 5){
        		alert('Game over!');
        		for(var btn of document.getElementById('alphabet')){
          	btn.setAttribute('disabled','disabled');
          }

          // else if(secret==x.textContent){
          // 	alert('WELL DONE!');
          // }
        	}


        }
     


}

//initialization
// var el=document
window.onload=function(){


var group= document.getElementById('alphabet');

for(var c of 'ABCDEFGHIJKLMNOPQRSTUVXYZ'){
	var btn=document.createElement('button');
btn.setAttribute('type',"button");
btn.setAttribute("class","btn btn-default");
btn.addEventListener('click',onClick);
btn.textContent=c;

group.appendChild(btn);

}
}

console.log("initialize");


