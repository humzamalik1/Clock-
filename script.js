setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();

function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  ap = hr < 12 ? "<span>AM</span>" : "<span>PM</span>";
  hr = hr == 0 ? 12 : hr;
  hr = hr > 12 ? hr - 12 : hr;
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clock").innerHTML =
    hr + ":" + min + ":" + sec + " " + ap;

  var months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];
  var days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  var curWeekDay = days[today.getDay()];
  var curDay = today.getDate();
  var curMonth = months[today.getMonth()];
  var curYear = today.getFullYear();
  var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
  document.getElementById("date").innerHTML = date;

  var time = setTimeout(function () {
    startTime();
  }, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
startTime();
