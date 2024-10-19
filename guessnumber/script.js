let rondomnumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#submit')
const userinput= document.querySelector('.guessfield')
const guesslist= document.querySelector('.guesslist')
const lastresult= document.querySelector('.lastresult')
const loworhigh= document.querySelector('.lowerhi')
const startover= document.querySelector('.resultfield')

let p = document.createElement('p');
let previousguess =[];
let numguess =0;


let playgame= true;

if(playgame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value)
        console.log(guess)
        validation(guess)

    })

}
function validation(guess){
    if(isNaN(guess)){
        alert('please enter valid number')
    } else if(guess > 100){
        alert('plz enter number less than 100')

    } else{
        previousguess.push(guess);
        if(numguess === 10){
            displayguess(guess)
            displayMassage(`game over. rondom number was ${rondomnumber}`)

            endGame()
        }
        else {
            displayguess(previousguess)
            checkGuses(guess)
        }
    }
}
function checkGuses(guess){
    if(guess=== rondomnumber){
        displayMassage('you guess the romdom number')
        endGame()
    }else if(guess < rondomnumber){
        displayMassage('you guess num less than romdom number')

    }else if(guess> rondomnumber){
        displayMassage('you guess num grather than romdom number')

    }
    
}
function displayguess(guess){
    userinput.value='';
    guesslist.innerHTML = `${guess}`
    numguess++;
    lastresult.innerHTML = `${10 - numguess}`;


}
function displayMassage(massage){
    loworhigh.innerHTML= `<h2>${massage}</h2>`;

}
function endGame(){
    userinput.value='';
    userinput.setAttribute('disable','');
    p.classList.add('button');
    p.innerHTML=`<h2 id='newgame'> start new game</h2>`;
    startover.appendChild(p);
    playgame = false;
    newGame();


}
function newGame(){
    const newgame = document.querySelector('#newgame')
    newgame.addEventListener('click',function(e){
     rondomnumber = parseInt(Math.random()*100 + 1);
     userinput.removeAttribute('disable','')
     numguess =0;  
     previousguess =[]; 
     guesslist.innerHTML='';
     lastresult.innerHTML = `${10 - numguess}`;
     startover.removeChild(p);
     playgame= true;

        

    })
    
}





