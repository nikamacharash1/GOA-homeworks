let sec = 20;
const timeText = document.getElementById("timer");
const timer = setInterval(() => {
    timeText.textContent = sec; 
    sec = sec - 1;
    if (sec < 0) { 
        clearInterval(timer);
        timeText.textContent = "time up";
    }
}, 1000);
