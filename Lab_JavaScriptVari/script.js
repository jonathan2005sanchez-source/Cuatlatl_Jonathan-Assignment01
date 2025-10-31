document.write("Hello, Empty World!<br>");

// 1. let string
let favoriteFood = "Pizza";

function favoriteFood 

// 2. const number
const birthYear = 2005;

// 3. boolean
let isStudent = true;
console.log(isStudent); // logs: true

// 4. object
const car = {
  brand: "Toyota",
  model: "Camry"
};
console.log(car.brand); // logs: Toyota

// 5. null
let emptyValue = null;
console.log(typeof emptyValue); // logs: "object" (special quirk in JS)

// 6. typeof checks
console.log(typeof favoriteFood); // string
console.log(typeof birthYear);    // number
console.log(typeof isStudent);    // boolean
console.log(typeof car);          // object
