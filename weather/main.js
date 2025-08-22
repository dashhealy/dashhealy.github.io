// find my elements
const appBody = document.querySelector("body");
const tempInput = document.querySelector("#tempInput");
const tempReturnText = document.querySelector("#tempReturn");

function interpretTemp() {
  console.log(tempInput.value);
  let inputTemp = tempInput.value;
  if (inputTemp < 11) {
    tempReturnText.textContent = "it's freezing";
    appBody.style.backgroundColor = "skyblue";
  } else if (inputTemp < 19) {
    tempReturnText.textContent = "it's cold";
    appBody.style.backgroundColor = "blue";
  } else if (inputTemp < 27) {
    tempReturnText.textContent = "it's mild";
    appBody.style.backgroundColor = "yellow";
  } else if (inputTemp < 31) {
    tempReturnText.textContent = "it's warm";
    appBody.style.backgroundColor = "tomato";
  } else {
    tempReturnText.textContent = "it's hot";
    appBody.style.backgroundColor = "red";
  }

  // temp 0 - 10 : Freezing
  // temp 11 - 18 : Cold
  // temp 19 - 26 : Mild
  // temp 27 - 30 : Warm
  // temp 31+ : Hot
}
