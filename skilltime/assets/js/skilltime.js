
function timeToString(time) {
    var ss = Math.floor( time / (1000) );
    var mm = Math.floor( ss / 60 );
    var hh = Math.floor( mm / 60 );

    var formattedHH = hh.toString().padStart(2, "0");
    var formattedMM = mm.toString().padStart(2, "0");
    var formattedSS = ss.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

var startTime;
var elapsedTime = 0;

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 100);
    // showButton("PAUSE");
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    // showButton("PLAY");
}

var playButton = document.getElementById("playButton");
var resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);