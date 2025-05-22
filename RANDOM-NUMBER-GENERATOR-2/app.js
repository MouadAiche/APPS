const label = document.getElementById("label");
const roll = document.getElementById("roll");
let randomnumber;

roll.onclick = function (){
    let max = Number(document.getElementById("max").value);
    let min = Number(document.getElementById("min").value);

    randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    label.textContent = randomnumber
}