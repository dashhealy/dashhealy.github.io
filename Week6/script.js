// we can use window to find certain properties
// let windowWidth = window.innerWidth;
// let windowHieght = window.innerHeight;
// console.log(windowWidth, windowHieght);
// find out information about current url
// console.log(window.location);
// document can be used to find html elements
// console.log(document.title);
// set the title
//document.title = "newTitle";
//can find body
//document.body.style.backgroundColor = "red";
// navigator can find more details of hardware/ software
// console.log(window.navigator.userAgent);

const myImage = document.querySelector("#myImage");
console.log(myImage);

const helloParagraph = document.querySelector("#hello");

const myParagraphs = document.querySelectorAll("p");
console.log(myParagraphs);

myParagraphs.forEach(changeParaBG);

function changeParaBG(item) {
  console.log(item);
  item.style.backgroundColor = "red";
}

//find outer section
const outerSection = document.querySelector(".outer");

const myButton = document.querySelector("#my-button");

//add an event listener to myButton
//this is using an anonymous function
myButton.addEventListener("click", function () {
  alert("button is clicked");
});

// could be written as an arrow function
// () => {}
//same as function (){}

// find hello content
console.log(helloParagraph.textContent);

function updateCatName() {
  helloParagraph.textContent = `Hi my name is ${myImage.dataset.catname}`;
  // classList.add() adds class
  // classList.remove() removes class
  // classList.toggle() toggles class
  myImage.classList.toggle("round");
}

//create element using document methods
const newPara = document.createElement("p");
newPara.classList.add("coral-box");
newPara.textContent = "Hello im a newborn!";
//outerSection.appendChild(newPara);
myButton.appendChild(newPara);

// look at paragraph in console
console.log(newPara);

// add new element to the header
const myHeader = document.querySelector("header");
// find my cat name
let catName = myImage.dataset.catname;
myHeader.innerHTML += `<h2>I think ${catName} is pretty cool</h2>`;

// += works for maths too
let x = 0;
x = x + 2;
x += 4;

function addRoundClass() {
  myImage.classList.add("round");
}

// add mouseeenter event listener to img
myImage.addEventListener("mouseenter", addRoundClass);
myImage.addEventListener("mouseleave", removeRoundClass);

function removeRoundClass() {
  myImage.classList.remove("round");
}
