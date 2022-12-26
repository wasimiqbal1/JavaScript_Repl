// // Person Object - Key Value Pair syntax
// const person = [{
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     "eye-Color": "blue",
//   },
  
//   {
  
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
//   "eye-Color": "black",
//   }
// ]
  
//   // Access Obj Properties
//  console.log(person[1]["eye-Co]);

// program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} x ${i} = ${result}`);
}