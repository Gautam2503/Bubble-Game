var timer = 60;
var sum =0 ;
var hitr = 0;
function makeBubble(){
    var clutter = "";
    for(var i=0;i<152;i++){
        var r = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${r}</div>`;
    }
    document.querySelector(".pbot").innerHTML = clutter;
}
document.querySelector("#p").addEventListener("click",function setTimer(){
    var t = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#time").textContent=timer;
        }
        else{
            clearInterval(t);
            document.querySelector("#p").innerHTML = `<h1>Game Over <p> Total score : ${sum} </p></h1>`;
        }
    },1000);
});

function newHit(){
    hitr = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitr; 
}

function incScore(){
    sum+=10;
    document.querySelector("#sum").textContent=sum;
}


document.querySelector("#p").addEventListener("click" , function(num){
    var a = Number(num.target.textContent);
    if(a===hitr){
        incScore();
        makeBubble();
        newHit();
    }
});
newHit();
makeBubble();
setTimer();