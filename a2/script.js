const timeDisplay = document.getElementById("timeDisplay");

setInterval(checkTime, 1);

function checkTime() {
  let currentTimeFull = Date.now();
  let systemDate = new Date(currentTimeFull);

  let hours = systemDate.getHours();
  let minutes = systemDate.getMinutes();
  let seconds = systemDate.getSeconds();
  let milliseconds = systemDate.getMilliseconds();

  if (hours > 12) {
    hours = hours - 12;
  }

  timeDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
