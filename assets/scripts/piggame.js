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
}