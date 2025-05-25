// Get the input elements
const cminput = document.getElementById("cm");
const inchesinput = document.getElementById("inches");

// Convert from cm to inches
cminput.addEventListener("input", function(){
    const cmvalue = parseFloat(cminput.value);
    if(!isNaN(cmvalue)){
        const inchesvalue = cmvalue / 2.54;
        inchesinput.value = inchesvalue.toFixed(2);
    }
    else{
        inchesinput.value = "";
    }
})

// Convert from inches to cm
inchesinput.addEventListener("input", function(){
    const inchesvalue = parseFloat(inchesinput.value);
    if(!isNaN(inchesvalue)){
        const cmvalue = inchesvalue * 2.54;
        cminput.value = cmvalue.toFixed(2);
    }
    else{
        cminput.value = "";
    }
})