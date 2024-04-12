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

let today = new Date();
console.log(today);
let month = today.getMonth();
console.log(month);
let monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(month);
let todayMonth = monthsNames[month];
console.log(todayMonth);
let season;
let timesOfYear = ["Winter", "Spring", "Sommer", "Autumn"];
if ((month = /[2 - 4]/)) {
  season = timesOfYear[1];
} else if ((month = /[5 - 7]/)) {
  season = timesOfYear[2];
} else if ((month = /[8 - 10]/)) {
  season = timesOfYear[3];
} else {
  season = timesOfYear[0];
}

let todayYear = today.getFullYear();
console.log(todayYear);

let day = today.getDay();
if ((day = /[0-4]/)) {
  todayDay = "Workday";
} else {
  todayDay = "Weekend";
}

document.getElementById("season").innerHTML = season;

document.getElementById("today-month").innerHTML = todayMonth;

document.getElementById("today-year").innerHTML = todayYear;

document.getElementById("weekday").innerHTML = todayDay;
