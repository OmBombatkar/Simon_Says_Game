let gameSeq = [];
let usrSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level =  0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function(){
    if(started == false){
        console.log('game Started');
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}
function usrFlash(btn){
    btn.classList.add('usrflash');
    setTimeout(function(){
        btn.classList.remove('usrflash');
    },250);
}

function levelUp(){
    usrSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log(`Current lvl : ${level}`);
    if(usrSeq[idx] === gameSeq[idx]){
        if(usrSeq.length == gameSeq.length){
            setTimeout(levelUp,500);
        }
    }
    else{
        h2.innerHTML = `Game OVER! Your Score was <b>${level-1}</b> <br> PRESS any key to START..`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "gainsboro";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    usrFlash(btn);

    userColor = btn.getAttribute("id");
    usrSeq.push(userColor);

    checkAns(usrSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    usrSeq = [];
    level = 0;
}