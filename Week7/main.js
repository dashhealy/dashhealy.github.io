// find the elements we need to interact
const popButton = document.querySelector("#popButton");
const popAudio = document.querySelector("#popAudio");

// this is a function that plays the popping sound when run
function playPop() {
  popAudio.play();
}

// run play pop function when user clicks on the button
popButton.addEventListener("click", playPop);
