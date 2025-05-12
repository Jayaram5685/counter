const decBtn=document.getElementById("dec");
const resBtn=document.getElementById("res");
const incBtn=document.getElementById("inc");
const countLabelEle=document.getElementById("countLabel");

let count=0;
incBtn.onclick=function(){
    count++;
    countLabelEle.textContent=count;
}

decBtn.onclick=function(){
    count--;
    countLabelEle.textContent=count;
}

resBtn.onclick=function(){
    count=0;
    countLabelEle.textContent=count;
}