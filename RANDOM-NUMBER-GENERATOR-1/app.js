const label = document.getElementById("label");
const roll = document.getElementById("roll");
const max = 6;
const min = 1;
let randomnumber;

roll.onclick = function (){
    randomnumber = Math.floor((Math.random() * max) + min)
    label.textContent = randomnumber
}