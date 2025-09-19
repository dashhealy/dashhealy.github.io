/*
find the elements i want to interact with
*/
const videoElement = document.querySelector("#mediaPlayer");
const playPauseButton = document.querySelector("#playPauseButton");
const playPauseIcon = document.querySelector("#playPauseIcon");
const timeline = document.querySelector("#timelineProgress");
const currentTimeText = document.querySelector("#currentTimeFeedback");
const totalTimeText = document.querySelector("#totalTimeFeedback");
const helloButton = document.querySelector("#helloButton");

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
    playPauseIcon.src = "assets/pause-icon.png";
    playPauseIcon.alt = "pause icon";
  } else {
    videoElement.pause();
    playPauseIcon.src = "assets/play-icon.png";
    playPauseIcon.alt = "play icon";
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

helloButton.addEventListener("click", changeTime);

function changeTime() {
  videoElement.currentTime = 200;
}
