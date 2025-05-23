# 🎲 DICE-ROLLER

An interactive and responsive **HTML**, **CSS**, and **JavaScript** project that simulates rolling up to three dice with fun feedback messages based on the average result. This project is great for beginners looking to practice checkbox input handling, conditional logic, and DOM manipulation!

---

## 📺 Live Demo

🔗 [LIVE DEMO](https://dice-roller-snowy.vercel.app/)

---

## 🛠️ Features

- 🎲 Roll 1, 2, or 3 dice simultaneously
- 📊 Displays the result of each selected dice roll
- 🤖 Calculates and evaluates the average roll outcome
- 🧠 Generates feedback messages like "NICE ROLL 🔥" or "SO BAD 😢"
- 🧼 Clean and simple UI with smooth hover and focus effects
- 📱 Fully responsive design for mobile and desktop devices

---

## 📁 Project Structure

📦 DICE-ROLLER  
├── index.html  
├── style.css  
├── app.js  
└── README.md  

---

## 🧠 How It Works

- **HTML** includes three checkbox inputs to select which dice to roll, a section to display results, and a button to trigger the logic.
- **CSS** provides a modern, responsive design using Flexbox, spacing, shadowing, and hover transitions.
- **JavaScript**:
  - Listens for the button click and checks which dice are selected.
  - Uses `Math.floor(Math.random() * (6 - 1 + 1)) + 1` to simulate dice rolls.
  - Displays each dice result and calculates the average of selected dice.
  - Based on the average, it updates a final message for the user.

---

## 🧰 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

---

## 📜 License

This project is open-source and free to use.
