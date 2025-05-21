const PI = 3.14159;
let submit = document.getElementById("submit");
let result = document.getElementById("result");

submit.onclick = function(){
    let radius = Number(document.getElementById("radius").value);
    let Circumference = 2 * PI * radius;
    result.textContent = Circumference + "cm"
}