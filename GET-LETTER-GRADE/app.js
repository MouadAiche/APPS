const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const scoreRaw = scoreInput.value.trim();
    const score = Number(scoreRaw);

    if (!name || scoreRaw === "" || isNaN(score) || score < 0 || score > 100){
        let color = "#dc2626";
        result.innerHTML = `<span style="color: ${color}; font-weight: bold;">Please enter a valid name and score between 0 and 100.</span>`;
        return;
    }

    let grade;
    let color;

    switch(Math.floor(score / 10)){
        case 10:
        case 9:
            grade = "A";
            color = "#059669";
            break;
        case 8:
            grade = "B";
            color = "#10b981";
            break;
        case 7:
            grade = "C";
            color = "#22c55e";
            break;
        case 6:
            grade = "D";
            color = "#84cc16";
            break;
        default:
            grade = "F";
            color = "#dc2626";
            break;
    }

    result.innerHTML = `${name}, your letter grade is: <span style="color: ${color}; font-weight: bold;">${grade}</span>`;
});
