// Decalring elements
// Starry night
const starryNightSmall = document.querySelector(".starryNightSmall");
const starryNightBig = document.querySelector("#starryNightBig");
const starryNightText = document.querySelector(".starryNightText");
let sound1 = document.querySelector("#sound1");

// Birth of Venus
const birthOfVenusSmall = document.querySelector(".birthOfVenusSmall");
const birthOfVenusBig = document.querySelector("#birthOfVenusBig");
const birthOfVenusText = document.querySelector(".birthOfVenusText");
let sound2 = document.querySelector("#sound2");

// Guernica
const guernicaSmall = document.querySelector(".guernicaSmall");
const guernicaBig = document.querySelector("#guernicaBig");
const guernicaText = document.querySelector(".guernicaText");
let sound3 = document.querySelector("#sound3");

// The Kiss
const theKissSmall = document.querySelector(".theKissSmall");
const theKissBig = document.querySelector("#theKissBig");
const theKissText = document.querySelector(".theKissText");
let sound4 = document.querySelector("#sound4");

// Spotlight
const spotlight = document.querySelector("#spotlight");

// Dialog window
let introModal = document.getElementById("introDialog");

document.getElementById("introDialog").showModal();

document.getElementById("dialogCloseButton").addEventListener("click", () => {
  introModal.close();
});

// For this assignment, since I'm using a series of very simple, single use functions,
// I've opted to make them anonymous, rather than calling and declaring functions
// Starry night
starryNightSmall.addEventListener("mouseover", function () {
  spotlight.classList.remove("lightAnimateOut");
  spotlight.classList.add("lightAnimateIn");
  starryNightBig.classList.remove("animateOut");
  starryNightBig.classList.add("animateIn");
  starryNightText.classList.remove("animateOut");
  starryNightText.classList.add("animateIn");
  sound1.play();
});

starryNightSmall.addEventListener("mouseleave", function () {
  spotlight.classList.add("lightAnimateOut");
  spotlight.classList.remove("lightAnimateIn");
  starryNightBig.classList.add("animateOut");
  starryNightBig.classList.remove("animateIn");
  starryNightText.classList.add("animateOut");
  starryNightText.classList.remove("animateIn");
});

// Currently, when hovering over an element while their respective sound file is still playing results
// in the sound not playing again, but instead requiring the sound file have completed playing before another
// instance of it can be played again. Fixing this issue currently falls outside of the scope of this assignment,
// as it seems to just be one of the limitations of htmlMediaElement. However with more time/ a larger scope,
// this issue could be fixed and improved.
// Birth of venus
birthOfVenusSmall.addEventListener("mouseover", function () {
  spotlight.classList.remove("lightAnimateOut");
  spotlight.classList.add("lightAnimateIn");
  birthOfVenusBig.classList.remove("animateOut");
  birthOfVenusBig.classList.add("animateIn");
  birthOfVenusText.classList.remove("animateOut");
  birthOfVenusText.classList.add("animateIn");
  sound2.play();
});

birthOfVenusSmall.addEventListener("mouseleave", function () {
  spotlight.classList.add("lightAnimateOut");
  spotlight.classList.remove("lightAnimateIn");
  birthOfVenusBig.classList.add("animateOut");
  birthOfVenusBig.classList.remove("animateIn");
  birthOfVenusText.classList.add("animateOut");
  birthOfVenusText.classList.remove("animateIn");
});

// While the use of anonymous functions is fine, I do wish I was able to use two functions for all the fade ins
// and outs. I experimented with this idea, attempting to dynamically create element names, however it seems
// ".addEventListener" doesn't seem to allow for variable names to be read, rather than what is currently being
// used. In future and with more time, someone much smarter than me could fix this issue and come up with a
// solution, however I am not that smart, and will leave it the way it is for now.
// guernica
guernicaSmall.addEventListener("mouseover", function () {
  spotlight.classList.remove("lightAnimateOut");
  spotlight.classList.add("lightAnimateIn");
  guernicaBig.classList.remove("animateOut");
  guernicaBig.classList.add("animateIn");
  guernicaText.classList.remove("animateOut");
  guernicaText.classList.add("animateIn");
  sound3.play();
});

guernicaSmall.addEventListener("mouseleave", function () {
  spotlight.classList.add("lightAnimateOut");
  spotlight.classList.remove("lightAnimateIn");
  guernicaBig.classList.add("animateOut");
  guernicaBig.classList.remove("animateIn");
  guernicaText.classList.add("animateOut");
  guernicaText.classList.remove("animateIn");
});

// The Kiss
theKissSmall.addEventListener("mouseover", function () {
  spotlight.classList.remove("lightAnimateOut");
  spotlight.classList.add("lightAnimateIn");
  theKissBig.classList.remove("animateOut");
  theKissBig.classList.add("animateIn");
  theKissText.classList.remove("animateOut");
  theKissText.classList.add("animateIn");
  sound4.play();
});

theKissSmall.addEventListener("mouseleave", function () {
  spotlight.classList.add("lightAnimateOut");
  spotlight.classList.remove("lightAnimateIn");
  theKissBig.classList.add("animateOut");
  theKissBig.classList.remove("animateIn");
  theKissText.classList.add("animateOut");
  theKissText.classList.remove("animateIn");
});
