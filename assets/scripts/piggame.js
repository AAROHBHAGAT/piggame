var roundscore = 0;

var diceimg =document.getElementById("diceimage");

var rollbtn =document.getElementById("roll");

rollbtn.addEventListener("click",show)
var dice;
function show(){
    dice= Math.floor(Math.random()*6+1);
    // alert(dice);
    diceimg.setAttribute("src","assets/images/d"+dice + ".png");
    diceimg.style.display="block";
    roundscore=roundscore+dice;
    document.getElementById("roundscore-0").innerText=roundscore;  
};
var scoreBox =0;
var holdbtn =document.getElementById("hold");
holdbtn.addEventListener("click", hold);
function hold(){
    document.getElementById("scoreBox-0").innerText=roundscore;
    document.getElementById("roundscore-0").innerText=0;
};
var newGame =document.getElementById("newgame");
newgame.addEventListener("click", reset);
function reset(){
    document.getElementById("scorebox-0").innerText=0;
    document.getElementById("roundscore-0").innerText=0;
    document.getElementById("scorebox-1").innerText=0;
    document.getElementByID("roundscore-1").innertext=0
}

