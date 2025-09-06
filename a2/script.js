const timeDisplay = document.getElementById("timeDisplay");

setInterval(checkTime, 1000);

function checkTime() {
  let currentTimeFull = Date.now();
  let systemDate = new Date(currentTimeFull);

  let hours = systemDate.getHours();
  let minutes = systemDate.getMinutes();
  let seconds = systemDate.getSeconds();
  //let milliseconds = systemDate.getMilliseconds();

  let month = systemDate.getMonth();
  month = month + 1;
  seasonColour(month);

  if (hours > 12) {
    hours = hours - 12;
  }

  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function seasonColour(month) {
  if (month === 12 || month === 1 || month === 2) {
    console.log("summer");
  } else if (month === 3 || month === 4 || month === 5) {
    console.log("Autumn");
  } else if (month === 6 || month === 7 || month === 8) {
    console.log("winter");
  } else {
    console.log("spring");
  }
}
