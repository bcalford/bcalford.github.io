const exercise1 = document.getElementById("exercise1");
const exercise2 = document.getElementById("exercise2");
const menu = document.getElementById("menu");
const menuButton = document.getElementById("menuButton");
const link1 = document.getElementById("menuOne");
const link2 = document.getElementById("menuTwo");
const minutesRange = document.getElementById("minutesRange");
const minutesCount = document.getElementById("minutesCount");
const minutesComment = document.getElementById("minutesComment");
const countdownComment = document.getElementById("countdownComment");



const showExercise1 = () => {
    exercise1.style.display = "block";
    exercise2.style.display = "none";
};
const showExercise2 = () => {
    exercise1.style.display = "none";
    exercise2.style.display = "block";
    updateCountdown();
};
menuButton.onclick = () => {
    menu.classList.toggle("open");
    menuButton.textContent = menu.classList.contains("open") ? "▲" : "▼";
};
link1.onclick = showExercise1;
link2.onclick = showExercise2;




const updateSlider = () => {
    const mins = Number(minutesRange.value);
    minutesCount.textContent = `${mins} minutes`;
    if (mins > 45) {
        minutesComment.textContent = "Tons of time! Sleep in some more. 🛌🛌🛌";
    } else if (mins >= 30) {
        minutesComment.textContent = "A little bit of time! Have some breakfast. 🥞🥞🥞";
    } else if (mins >= 15) {
        minutesComment.textContent = "Not much time! Get a move on. 🚶🚶🚶";
    } else {
        minutesComment.textContent = "Almost no time! Start running. 🏃🏃🏃";
    }
};
minutesRange.addEventListener("input", updateSlider);



const updateCountdown = () => {
    const now = new Date();
    const classTime = new Date();
    classTime.setHours(8);
    classTime.setMinutes(30);
    classTime.setSeconds(0);
    const diffMinutes = Math.round((classTime - now) / 60000);
    if (diffMinutes > 15) {
        countdownComment.textContent = `${diffMinutes} minutes until class. You've got time.`;
    } else if (diffMinutes >= 10) {
        countdownComment.textContent = `${diffMinutes} minutes until class. Let's get moving.`;
    } else if (diffMinutes >= 5) {
        countdownComment.textContent = `${diffMinutes} minutes until class. Start jogging.`;
    } else if (diffMinutes >= 0) {
        countdownComment.textContent = `${diffMinutes} minutes until class. Starting running!`;
    } else if (diffMinutes >= -5) {
        countdownComment.textContent = `You are ${Math.abs(diffMinutes)} minutes late. Not too bad.`;
    } else if (diffMinutes >= -15) {
        countdownComment.textContent = `You are ${Math.abs(diffMinutes)} minutes late. You've basically missed it.`;
    } else {
        countdownComment.textContent = `You are ${Math.abs(diffMinutes)} minutes late! WOW?! Class is like over.`;
    }
};



showExercise1();
updateSlider();
updateCountdown();
setInterval(updateCountdown, 15000);