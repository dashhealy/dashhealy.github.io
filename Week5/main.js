//variables
//this is how we find an element
const documentBody = document.querySelector("body");
console.log(documentBody);
const myName = "Dash";
let myHungriness = 0.3;
console.log(myHungriness);
myHungriness = 0.5;
console.log(myHungriness);

// console.log() sneds message to browser console
console.log("Hello");

let stepNumber = 4;
console.log("Taking step:", stepNumber, "...I think");

let name = prompt("What's your name?");

//strings
let firstName = "Dash";
let surname = "Healy";
let quote = "This is a 'quote'";
console.log(quote);
let nameString = `My full name is ${firstName} ${surname}`;
console.log(nameString);

//type conversion
let myAge = 20;
let timePass = "5";
let updateAge = myAge + parseInt(timePass);
console.log(updateAge);

//arrays
let myPets = ["spot", "astro", "Yoshi", "Pauly"];
console.log(myPets);
console.log(myPets.length);
console.log(myPets[1]);

//conditionals

const a = 10;
let b = "10";
let setToBlue = false;

if (setToBlue) {
  documentBody.style.backgroundColor = "red";
} else {
  documentBody.style.backgroundColor = "blue";
}

//functions
function tellMeHowHungryIAm() {
  console.log("I'm not sure");
}
