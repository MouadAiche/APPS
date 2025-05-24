const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const age = Number(document.getElementById("age").value);

  if (!name || !age || age <= 0) {
    result.textContent = "Please enter valid name and age.";
    return;
  }

  if (age >= 18) {
    result.textContent = `Welcome ${name}, you're an adult!`;
  } else {
    result.textContent = `Sorry ${name}, you're too young!`;
  }
});
