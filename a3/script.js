const starryNightSmall = document.querySelector(".starryNightSmall");
const starryNightBig = document.querySelector("#starryNightBig");
const starryNightText = document.querySelector(".starryNightText");

const birthOfVenusSmall = document.querySelector(".birthOfVenusSmall");
const birthOfVenusBig = document.querySelector("#birthOfVenusBig");
const birthOfVenusText = document.querySelector(".birthOfVenusText");

starryNightSmall.addEventListener("mouseover", function () {
  starryNightBig.classList.remove("animateOut");
  starryNightBig.classList.add("animateIn");
  starryNightText.classList.remove("animateOut");
  starryNightText.classList.add("animateIn");
});

starryNightSmall.addEventListener("mouseleave", function () {
  starryNightBig.classList.add("animateOut");
  starryNightBig.classList.remove("animateIn");
  starryNightText.classList.add("animateOut");
  starryNightText.classList.remove("animateIn");
});

birthOfVenusSmall.addEventListener("mouseover", function () {
  birthOfVenusBig.classList.remove("animateOut");
  birthOfVenusBig.classList.add("animateIn");
  birthOfVenusText.classList.remove("animateOut");
  birthOfVenusText.classList.add("animateIn");
});

birthOfVenusSmall.addEventListener("mouseleave", function () {
  birthOfVenusBig.classList.add("animateOut");
  birthOfVenusBig.classList.remove("animateIn");
  birthOfVenusText.classList.add("animateOut");
  birthOfVenusText.classList.remove("animateIn");
});

// function starryAnimIn() {
//  fadeIn("starryNight")
// }

// function fadeIn(name) {
//   `${name}Big`.classList.add("animateIn");
// }
