const milliSec = document.querySelector(".time_milli"),
  currenrDay = document.querySelector(".day");

const weekDays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
function upDateTime() {
  let date = new Date();
  let todaysDate = date.getDay();
  let time_in_milliSec = Date.now();
  currenrDay.textContent = `${weekDays[todaysDate]}`;
  milliSec.textContent = `${time_in_milliSec}`;
}
setInterval(upDateTime, 100);
upDateTime();
