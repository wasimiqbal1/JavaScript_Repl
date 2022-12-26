// // program to generate a multiplication table

// // take input from the user
// const number = parseInt(prompt('Enter an integer: '));

// //creating a multiplication table
// for(let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }

// let cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

// let matchFound = "no";

// for (let i = 0; i <= 4; i++){
// if ("Islambad" === cleanestCities[i]) {
//   matchFound = "yes";
//   alert("It's one of the cleanest cities");
// }
// }

// if (matchFound === "no") {
//   alert("It's not on the list");
// }

// let cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar","Multan","Faisalabad"];

// let numElements = cleanestCities.length;
// let matchFound = false;

// for (let i = 0; i < numElements; i++) {
//   if ("Faisalabad" === cleanestCities[i]) {
//     matchFound = true;
//     console.log("It's one of the cleanest cities");
//     break;
//   }
// }
// if (matchFound === false) {
//   console.log("It's not on the list");
// }

let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
let fullNames = [];

for (let i = 0; i < firstNames.length; i++) {
    console.log("Parents")
  for (let j = 0; j < lastNames.length; j++) {
    console.log("Child");
    // fullNames.push(firstNames[i] + lastNames[j]);
  }
}
