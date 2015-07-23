//'use strict';
var elementSecret= document.getElementById('secret');   // represents element with guessed letters 
var secret='JAVASCRIPT';                                // word we try to guess
var guessedLetters='';                                  // guessed letters
var counter=1;
var group= document.getElementById('alphabet');         // represents element with alphabet buttons
var image=document.getElementById('phase');             // represents image
var restart = document.getElementById('restart');       // represents restart button


// function returns string of letters, where non-guesed letters are represents as _

function getGuessedWord(secret, guessedLetters)      
{
  var result='';
  for(var c of secret)
    {
      if(guessedLetters.indexOf(c)>=0)
        {
          result+=c;
        }
      else
        result+='_';
    }
  return result;
}


// set the result of function getGuessedWord into element

//elementSecret.textContent= getGuessedWord(secret, guessedLetters);




// when click on letter button


function update(){


    var current= elementSecret.textContent;                         // add to guessedLetters   //refresh guessed letters
   elementSecret.textContent=getGuessedWord(secret, guessedLetters);

  if( current == getGuessedWord(secret, guessedLetters)){    //if wrong letter 
    counter++; 
    elementSecret.textContent=getGuessedWord(secret, guessedLetters);                                                          
    if (counter<6)
    image.setAttribute('src','images/phase'+ counter +'.png');            //change image
  }

  if(counter==5){                                                         //if 5 times wrong
    elementSecret.textContent = getGuessedWord(secret, secret);           //show gueessed word
    alert('Game over !');                                                 
    for (var btn of document.getElementById('alphabet').childNodes){
      btn.setAttribute('disabled','disabled');                            // disabled all letter buttons to click  
    }
  }

  if(getGuessedWord(secret, guessedLetters)==secret){
    alert('Well done !');
    for (var btn of document.getElementById('alphabet').childNodes){
      btn.setAttribute('disabled','disabled');                            // disabled all letter buttons to click 
    }
  }

}











function clickOnLetter(event){
  var elementLetter=event.target;                                       //butoon of clicked letter
  guessedLetters+= elementLetter.textContent;
  update();
  elementLetter.setAttribute('disabled','disabled');                      //disabled to click on button again
}



 function reset(){
  var guessedLetters='';
  for (var btn of document.getElementById('alphabet').childNodes){
      btn.removeAttribute('disabled');
  }
  elementSecret.textContent=getGuessedWord(secret, guessedLetters);
  counter=1;
  console.log(elementSecret.textContent);
  update();
    }


  // guessedLetters = "";
  // elementSecret.textContent = getGuessedWord(secret, lettersGuessed);
  // for (var btn of document.getElementById('alphabet').childNodes){
  //     btn.setAttribute('disabled','active');
    
    






function play(){

  //elementSecret.textContent= getGuessedWord(secret, guessedLetters);
  // create buttons A-Z
  for(var c of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'){                                                    // for every letter of this string
                                          var btn=document.createElement('button');             // create element button
                                          btn.setAttribute('type','button');                    // set the type of element
                                          btn.setAttribute('class','btn btn-default');          // set the type of button
                                          btn.textContent=c;                                    // set content of each button on letter 
                                          btn.addEventListener('click',clickOnLetter);                // add listener on button on event 'click' 
                                          group.appendChild(btn);                               // adds the element button to the end of the list of child nodes 
                                           
  }
  
  var restart = document.getElementById('restart');
  restart.addEventListener('click',reset);

  update();
     
    

}





window.onload=play();






