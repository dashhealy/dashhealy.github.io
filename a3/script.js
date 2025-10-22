const starryNightSmall = document.querySelector(".starryNightSmall");
const starryNightBig = document.querySelector("#starryNightBig");

const birthOfVenusSmall = document.querySelector(".birthOfVenusSmall");
const birthOfVenusBig = document.querySelector("#birthOfVenusBig");

starryNightSmall.addEventListener("mouseover", function () {
  starryNightBig.classList.remove("animateOut");
  starryNightBig.classList.add("animateIn");
});

starryNightSmall.addEventListener("mouseleave", function () {
  starryNightBig.classList.remove("animateIn");
  starryNightBig.classList.add("animateOut");
});

birthOfVenusSmall.addEventListener("mouseover", function () {
  birthOfVenusBig.classList.remove("animateOut");
  birthOfVenusBig.classList.add("animateIn");
});

birthOfVenusSmall.addEventListener("mouseleave", function () {
  birthOfVenusBig.classList.add("animateOut");
  birthOfVenusBig.classList.remove("animateIn");
});

// function starryAnimIn() {
//  fadeIn("starryNight")
// }

// function fadeIn(name) {
//   `${name}Big`.classList.add("animateIn");
// }
