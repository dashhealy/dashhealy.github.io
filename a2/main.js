// finding required page elements
const videoElement = document.querySelector("#mediaPlayer");
const playPauseButton = document.querySelector("#playPauseButton");
const playPauseIcon = document.querySelector("#playPauseIcon");
const timeline = document.querySelector("#timelineProgress");
const currentTimeText = document.querySelector("#currentTimeFeedback");
// const totalTimeText = document.querySelector("#totalTimeFeedback");

const introButton = document.querySelector("#introButton");
const step1Button = document.querySelector("#step1Button");
const step2Button = document.querySelector("#step2Button");
const step3Button = document.querySelector("#step3Button");
const step4Button = document.querySelector("#step4Button");
const step5Button = document.querySelector("#step5Button");
const step6Button = document.querySelector("#step6Button");
const step7Button = document.querySelector("#step7Button");

videoElement.removeAttribute("controls");

// tell users the total length of the video
// I've commented out this code as it is no longer needed

// videoElement.addEventListener("canplay", updateTotalTime);

// function updateTotalTime() {
//   let videoSeconds = videoElement.duration;
//   let totalMin = Math.floor(videoSeconds / 60);
//   let totalSeconds = Math.floor(videoSeconds % 60);
//   if (totalSeconds < 10) {
//     totalSeconds = "0" + totalSeconds;
//   }
//   totalTimeText.textContent = `${totalMin}:${totalSeconds}`;
// }

// controls to pause and play tutorial
// I've chosen to use unicode icons instead of the pictures shown to us in the demonstrations, as these are easier
// to change using CSS, including elements like colour and size, which are harder to modify in an image.
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

// show users how far into the video they are
function updateTimeline() {
  //   find percentage of total time
  let timePercent = (videoElement.currentTime / videoElement.duration) * 100;
  timeline.value = timePercent;
  //timeline.value = 0;
  updateCurrentTime();
}

videoElement.addEventListener("timeupdate", updateTimeline);

// Show users how far into the video they are using seconds and minutes
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

// allow users to jump to a certain time in the video depending on where they clicked
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

// Often when following tutorials online, I easily get lost, espectially when creators don't timestamp thier
// videos. As such, I want to implement a simillar system into this site in order to make the easier to follow
// guide easier to follow for younger audiences.
// Here, each button (when clicked) will take you to a different part of the video, corresponding to the step
// you've clicked. This breaks the video down into more managable chunks, that viewers can easily repeat and revisit
// when confused, lost, or just in need of clarificaiton.
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

// when the time on the video updates, check if change in colour is needed
videoElement.addEventListener("timeupdate", changeColour);

// After implementing the previous feature, I realised that, without clicking on one of the buttons, there wasn't
// A way to know which step you were up to. So, of course, I addressed this issue by having the site highlight which
// step you were up to. This immediately remedied this issue, as the website now clearly hightlights where you are in
// the video, helping users to, again, break the video down into smaller parts and make it easier to follow.
// This has the added bonus of making where you jump to in the video much clearer when using the timeline, as when
// paused, users can clearly see where they are and what step they're on.
function changeColour() {
  let currentSeconds = Math.floor(videoElement.currentTime);
  parseInt(currentSeconds);
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
