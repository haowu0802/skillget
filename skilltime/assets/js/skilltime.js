
function timeToString(time) {
    time_sec = time / 1000;
    var hours = Math.floor(time_sec / 3600);
    var minutes = Math.floor(time_sec / 60);
    var seconds = Math.floor(time_sec - minutes * 60);

    var formattedHH = hours.toString().padStart(2, "0");
    var formattedMM = minutes.toString().padStart(2, "0");
    var formattedSS = seconds.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

var MIN_45 = 45 * 60 * 1000;
var timeRemain = MIN_45;


function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

function start() {
    interval = 1000;
    timerInterval = setInterval(function printTime() {
        timeRemain = timeRemain - interval;
      print(timeToString(timeRemain));
    }, interval);
    // showButton("PAUSE");
}

function reset() {
    clearInterval(timerInterval);
    print("00:45:00");
    timeRemain = MIN_45;
    // showButton("PLAY");
}

var playButton = document.getElementById("playButton");
var resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);