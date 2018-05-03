var c = document.getElementById("clock");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150, 75, 70, 0, 2 * Math.PI);
ctx.stroke();

let seconds = 0;
let minutes = 0;
let hours = 0;
let time = "00:00:00";
let digitalClock = document.querySelector("#digital-clock");

setInterval(function() {
    seconds++;

    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }

    if (minutes === 60) {
        hours++;
        minutes = 0;
    }

    if (hours = 24) {
        hours = 0;
    }

    (hours < 10) ? time = "0" + hours : time = "Time: " + hours;
    time += ":";
    (minutes < 10) ? time += "0" + minutes : time += minutes + ":";
    time += ":";
    (seconds < 10) ? time += "0" + seconds : time += seconds;

    //todo append to digital clock
    digitalClock.innerHTML = time;

    //todo create analog clock
}, 1000); 