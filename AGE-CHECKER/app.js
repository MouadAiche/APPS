const submit = document.getElementById("submit");
const welcome = document.getElementById("welcome");
const youraccess = document.getElementById("youraccess");

submit.onclick = function (){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    age = Number(age);

    welcome.textContent = `Hey👋, ${name}`;
    if (age == 0){
        youraccess.textContent = `Sorry, you are NOT ALLOWED to access our platform`;
    }
    if(age < 18){
        youraccess.textContent = `Sorry, you are NOT ALLOWED to access our platform`;
    }
    else if( 60 >= age && age >= 18 ){
        youraccess.textContent = `Welcome, you are ALLOWED to access our platform`;
    }
    else if(age >= 61){
        youraccess.textContent = `Sorry, you're TOO OLD to access our platform`;
    }
}