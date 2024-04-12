let timer = document.getElementById("timer");
let i = 1;
isActiv = false;
forwardDirection = true;
let intervalID;

function forwardCounting() {
  if (i <= 30 && isActiv) {
    timer.innerHTML = i++;
  } else {
    clearInterval(intervalID);
  }
}

function reverseCounting() {
  if (i > 0 && isActiv) {
    timer.innerHTML = --i;
  } else {
    clearInterval(intervalID);
  }
}

function startCounting() {
  if (forwardDirection) {
    intervalID = setInterval(forwardCounting, 1000);
  } else {
    intervalID = setInterval(reverseCounting, 1000);
  }
}

function onTimer() {
  isActiv = true;
  startCounting();
}

let onButton = document.getElementById("on");
onButton.addEventListener("click", onTimer);

function offTimer() {
  clearInterval(intervalID);
  isActiv = false;
  i = 0;
  timer.innerHTML = i;
}

let offButton = document.getElementById("off");
offButton.addEventListener("click", offTimer);

function pausedTimer() {
  isActiv = false;
}

let pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", pausedTimer);

function startForward() {
  forwardDirection = true;
  i = 0;
}
function startReverse() {
  forwardDirection = false;
  i = 30;
  timer.innerHTML = i;
}
let forwardButton = document.getElementById("forward");
forwardButton.addEventListener("click", startForward);

let reverseButton = document.getElementById("reverse");
reverseButton.addEventListener("click", startReverse);
