const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const roll = document.getElementById("roll");
const finalmessage = document.getElementById("finalmessage");

const max = 6;
const min = 1;
const rate = 3;

roll.onclick = function(){
    let sum = 0;
    let count = 0;

    if(dice1.checked){
        const result1 = Math.floor((Math.random() * (max - min +1)) + min );
        label1.textContent = result1;
        sum += result1;
        count++;
    }
    else{
        label1.textContent = 0;
    }
    if(dice2.checked){
        const result2 = Math.floor((Math.random() * (max - min +1)) + min );
        label2.textContent = result2;
        sum += result2;
        count++;
    }
    else{
        label2.textContent = 0;
    }
    if(dice3.checked){
        const result3 = Math.floor((Math.random() * (max - min +1)) + min );
        label3.textContent = result3;
        sum += result3;
        count++;
    }
    else{
        label3.textContent = 0;
    }


    if(count === 0){
        finalmessage.textContent = `Please check at least one dice.`
        return;
    }

    const average = sum / count;

    if(average >= rate && average <= 4){
        finalmessage.textContent = `NICE ROLL 🔥`
    }
    else if(average >= 5){
        finalmessage.textContent = `PERFECT ROLL ⚡💀`
    }
    else if(average == 2){
        finalmessage.textContent = `NOT TOO BAD 👏`
    }
    else{
        finalmessage.textContent = `SO BAD 😢`
    }
}