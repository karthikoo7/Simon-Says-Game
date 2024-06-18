let userSqn = [];

let gameSeq = [];

let started = false;

let level = 0;

let colors = ["red","yellow","blue","green"]; //they are classes on buttons as well.

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started == false){
        console.log("Game has started");
        started = true;
    };


    levelUp();


});

function flash(btn){
    btn.classList.add("flash"); //btn here works in the local scope only.
    setTimeout( function(){
    btn.classList.remove("flash");
    }, 250);
   
};

function levelUp(){
    userSqn = [];
    level++;
    h2.innerText = `Level ${level}`;

    let x = Math.floor(Math.random()* 3);
    let randomColor = colors[x];
    let BtnColor = document.querySelector(`.${randomColor}`);
    flash(BtnColor);

    gameSeq.push(randomColor);
    console.log(gameSeq);
   
};



function btnPress(){
    let btn = this;
    flash(btn); 
    
    Usercol = btn.getAttribute("id");
   

    userSqn.push(Usercol);

    checkAns(userSqn.length-1);
   
    
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress); // do not consfuse "btn" in different functions as each has a different local scope.
};


function checkAns(idx){

    if (userSqn[idx] == gameSeq [idx]){
        if(userSqn.length == gameSeq.length){
            
            setTimeout(levelUp,1000);

        }
    } else{
        h2.innerHTML = `Game Over! Your score was ${level}. Press any key to try again`
        document.querySelector("body").style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = 'white';
        },150);       
        reset();
        
    }
}

function reset(){
    started == false;
    gameSeq = [];
    userSqn = [];
    level = 0;

}