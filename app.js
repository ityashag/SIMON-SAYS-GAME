let gameSeq=[];
let userSeq=[];

let started = false;
let level = 0;
let btns = document.querySelectorAll("button");
let p = document.querySelector("#res");
let body= document.querySelector("body");
let main = document.querySelector("main");
// document.addEventListener("keypress",function(){
//     if(started==false)
//     {
//         levelUp();
//         started=true;
//     }
// })
btns[btns.length-1].addEventListener("click",function()
{
    if(started==false)
    {
        levelUp();
        started=true;
    }
    let par = this.parentElement
    par.classList.add("hide");
})
function buttonFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },450);
}
function levelUp()
{
    level++;
    userSeq=[];
    p.innerText = "LEVEL : "+level;
    let random = Math.floor(Math.random()*4);
    buttonFlash(btns[random]);
    gameSeq.push(random);
    
}
function gameOver()
{
    body.classList.add("red_bg");
    setTimeout(function(){
        body.classList.remove("red_bg");
    },450);
    let score = "GAME OVER !! Your score is : "+level+" .";
    p.innerText=score;
    gameSeq=[];
    level=0;
    userSeq=[];
    started=false;
    let par = btns[btns.length-1].parentElement;
    par.classList.remove("hide");

}

function btnPress(){
    if(started==false) return;
    buttonFlash(this);
    let btn=this;
    let cnt = btn.getAttribute("id");
    if(cnt=="one")
    {
        cnt=0;
    }
    else if(cnt=="two")
    {
        cnt=1;

    }
    else if(cnt=="three")
    {
        cnt=2;

    }
    else if(cnt=="four")
    {
        cnt=3;
    }
    userSeq.push(cnt);

    if(userSeq[userSeq.length-1]!=gameSeq[userSeq.length-1])
    {
        gameOver();
    }
    else if(userSeq.length==gameSeq.length)
    {
        setTimeout( levelUp,1000);
       
    }
    
}

for(let i=0;i<btns.length-1;i++)
{
    btns[i].addEventListener("click",btnPress);
}
