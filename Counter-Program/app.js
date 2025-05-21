const countlabel = document.getElementById("countlabel");
const decrease = document.getElementById("decreasebtn");
const reset = document.getElementById("resetbtn");
const increase = document.getElementById("increasebtn");
let count = 0;

decrease.onclick = function(){
    count--;
    countlabel.textContent = count;
}
reset.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
increase.onclick = function(){
    count++;
    countlabel.textContent = count;
}
