/*
find the elements i want to interact with
*/
const videoElement = document.querySelector("#mediaPlayer");
const playPauseButton = document.querySelector("#playPauseButton");
const playPauseIcon = document.querySelector("#playPauseIcon");
const timeline = document.querySelector("#timelineProgress");
const currentTimeText = document.querySelector("#currentTimeFeedback");
const totalTimeText = document.querySelector("#totalTimeFeedback");

const introButton = document.querySelector("#introButton");
const step1Button = document.querySelector("#step1Button");
const step2Button = document.querySelector("#step2Button");
const step3Button = document.querySelector("#step3Button");
const step4Button = document.querySelector("#step4Button");
const step5Button = document.querySelector("#step5Button");
const step6Button = document.querySelector("#step6Button");
const step7Button = document.querySelector("#step7Button");

/* when js loads remove defaul controls */
videoElement.removeAttribute("controls");

// I want to update total time based on the currently loaded media file
// this will run when page loads but if i wanted to change the file afterwards I'd have to update there too
videoElement.addEventListener("canplay", updateTotalTime);

function updateTotalTime() {
  let videoSeconds = videoElement.duration;
  let totalMin = Math.floor(videoSeconds / 60);
  let totalSeconds = Math.floor(videoSeconds % 60);
  if (totalSeconds < 10) {
    totalSeconds = "0" + totalSeconds;
  }
  totalTimeText.textContent = `${totalMin}:${totalSeconds}`;
  console.log(videoElement.duration);
  console.log(totalSeconds);
}

/*
Play pause button behaviour:
if media is not playing - when i click begins playback of the media file
if media is playing - when i click again it pauses the playback of the media file
Feedback:
toggle icon based on playing state
cursor change on hover
*/

function playPause() {
  if (videoElement.paused || videoElement.ended) {
    videoElement.play();
    playPauseButton.textContent = "⏸";
  } else {
    videoElement.pause();
    playPauseButton.textContent = "▶";
  }
}

playPauseButton.addEventListener("click", playPause);

/*
Timeline behaviour:
it should playback as media playback occurs to show current time
i should be able to click and jump to particular time
*/

function updateTimeline() {
  //   find percentage of total time
  let timePercent = (videoElement.currentTime / videoElement.duration) * 100;
  timeline.value = timePercent;
  //timeline.value = 0;
  updateCurrentTime();
}

videoElement.addEventListener("timeupdate", updateTimeline);

function updateCurrentTime() {
  let videoSeconds = videoElement.currentTime;
  let totalMin = Math.floor(videoSeconds / 60);
  let totalSeconds = Math.floor(videoSeconds % 60);
  if (totalSeconds < 10) {
    totalSeconds = "0" + totalSeconds;
  }
  currentTimeText.textContent = `${totalMin}:${totalSeconds}`;
}

timeline.addEventListener("click", jumpToTime);

function jumpToTime(ev) {
  // find how far from the left we clicked
  let clickX = ev.offsetX;
  // find how wide timeline is
  let timeLineWidth = timeline.offsetWidth;
  // find ratio of click to width
  let clickPercent = clickX / timeLineWidth;
  // update the current time
  videoElement.currentTime = videoElement.duration * clickPercent;
}

introButton.addEventListener("click", introTime);

function introTime() {
  videoElement.currentTime = 2;
}

step1Button.addEventListener("click", step1Time);

function step1Time() {
  videoElement.currentTime = 28;
}

step2Button.addEventListener("click", step2Time);

function step2Time() {
  videoElement.currentTime = 40;
}

step3Button.addEventListener("click", step3Time);

function step3Time() {
  videoElement.currentTime = 71;
}

step4Button.addEventListener("click", step4Time);

function step4Time() {
  videoElement.currentTime = 127;
}

step5Button.addEventListener("click", step5Time);

function step5Time() {
  videoElement.currentTime = 155;
}

step6Button.addEventListener("click", step6Time);

function step6Time() {
  videoElement.currentTime = 200;
}

step7Button.addEventListener("click", step7Time);

function step7Time() {
  videoElement.currentTime = 240;
}

videoElement.addEventListener("timeupdate", changeColour);

function changeColour() {
  let currentSeconds = Math.floor(videoElement.currentTime);
  parseInt(currentSeconds);
  console.log(currentSeconds);
  if (currentSeconds >= 2 && currentSeconds <= 27) {
    introButton.classList.add("highlight");
    step1Button.classList.remove("highlight");
    step2Button.classList.remove("highlight");
    step3Button.classList.remove("highlight");
    step4Button.classList.remove("highlight");
    step5Button.classList.remove("highlight");
    step6Button.classList.remove("highlight");
    step7Button.classList.remove("highlight");
  } else if (currentSeconds >= 28 && currentSeconds <= 39) {
    introButton.classList.remove("highlight");
    step1Button.classList.add("highlight");
    step2Button.classList.remove("highlight");
    step3Button.classList.remove("highlight");
    step4Button.classList.remove("highlight");
    step5Button.classList.remove("highlight");
    step6Button.classList.remove("highlight");
    step7Button.classList.remove("highlight");
  } else if (currentSeconds >= 40 && currentSeconds <= 70) {
    introButton.classList.remove("highlight");
    step1Button.classList.remove("highlight");
    step2Button.classList.add("highlight");
    step3Button.classList.remove("highlight");
    step4Button.classList.remove("highlight");
    step5Button.classList.remove("highlight");
    step6Button.classList.remove("highlight");
    step7Button.classList.remove("highlight");
  } else if (currentSeconds >= 71 && currentSeconds <= 126) {
    introButton.classList.remove("highlight");
    step1Button.classList.remove("highlight");
    step2Button.classList.remove("highlight");
    step3Button.classList.add("highlight");
    step4Button.classList.remove("highlight");
    step5Button.classList.remove("highlight");
    step6Button.classList.remove("highlight");
    step7Button.classList.remove("highlight");
  } else if (currentSeconds >= 127 && currentSeconds <= 154) {
    introButton.classList.remove("highlight");
    step1Button.classList.remove("highlight");
    step2Button.classList.remove("highlight");
    step3Button.classList.remove("highlight");
    step4Button.classList.add("highlight");
    step5Button.classList.remove("highlight");
    step6Button.classList.remove("highlight");
    step7Button.classList.remove("highlight");
  } else if (currentSeconds >= 155 && currentSeconds <= 199) {
    introButton.classList.remove("highlight");
    step1Button.classList.remove("highlight");
    step2Button.classList.remove("highlight");
    step3Button.classList.remove("highlight");
    step4Button.classList.remove("highlight");
    step5Button.classList.add("highlight");
    step6Button.classList.remove("highlight");
    step7Button.classList.remove("highlight");
  } else if (currentSeconds >= 200 && currentSeconds <= 239) {
    introButton.classList.remove("highlight");
    step1Button.classList.remove("highlight");
    step2Button.classList.remove("highlight");
    step3Button.classList.remove("highlight");
    step4Button.classList.remove("highlight");
    step5Button.classList.remove("highlight");
    step6Button.classList.add("highlight");
    step7Button.classList.remove("highlight");
  } else if (currentSeconds >= 240) {
    introButton.classList.remove("highlight");
    step1Button.classList.remove("highlight");
    step2Button.classList.remove("highlight");
    step3Button.classList.remove("highlight");
    step4Button.classList.remove("highlight");
    step5Button.classList.remove("highlight");
    step6Button.classList.remove("highlight");
    step7Button.classList.add("highlight");
  } else {
    introButton.classList.remove("highlight");
    step1Button.classList.remove("highlight");
    step2Button.classList.remove("highlight");
    step3Button.classList.remove("highlight");
    step4Button.classList.remove("highlight");
    step5Button.classList.remove("highlight");
    step6Button.classList.remove("highlight");
    step7Button.classList.remove("highlight");
  }
}
