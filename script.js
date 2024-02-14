document.getElementById("timer").addEventListener("click", startCountdown);

const startTime = 25;
let time = startTime * 60;
let countdown;

const changeTime = document.getElementById("countdown");

function startCountdown() {

    clearInterval(countdown)

    countdown = setInterval(function() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        changeTime.innerHTML = `${minutes}: ${seconds}`;
        time--;

        if(time < 0) {
            clearInterval(countdown);
        }
    }, 1000);
}