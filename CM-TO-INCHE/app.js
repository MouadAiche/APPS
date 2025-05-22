let submit = document.getElementById("submit").onclick = function (){
    let inche = Number(document.getElementById("inche").value)
    let result = inche * 2.54
    document.getElementById("cm").textContent = result + "CM"
}