
console.log("Hello, World!");
console.log("Let's start Learning JavaScript!!.");

// String Variable //

let studentName="Johnathan";
console.log(studentName);
console.log("the student name is :", studentName);

let studentName = "John";
console.log(studentName);
console.log("the student name is :", studentName);




// Number Variable //
let studentAge = 20;
console.log("the student age is :" + studentAge);
console.log("the type of studentAge is :", typeof studentAge);


let studentHeight = 5.9;
console.log("the student height is :" + studentHeight);
console.log("the type of studentHeight is :", typeof studentHeight);

let tem = -10;
console.log("the temperature is :" + tem);
console.log("the type of temperature is :", typeof tem);


// Boolean Variable //
let isStudent = true;
console.log("is the person a student? :" + isStudent);
console.log("the type of isStudent is :", typeof isStudent);




let isStudent = true;
console.log("type of isStudent :" + isStudent);



let pincode= null;
console.log("the pincode is :" + pincode);
console.log("the type of pincode is :", typeof pincode);
// in javascript -->> is should be unull but shows objects//

let student = {
    name : "Jonathan",
    age : 20,
    height : 5.9,
    isStudent : true
};



// DOM tree 
// html
// |-- head
// |   |-- title
// |   |-- body
// |       |-- h1 (id heading )
// |       |-- p (id intro)

let heading1 = document.getElementById("heading");
console.log(heading1);
console.log(heading1.innerText);


heading1.innerHTML = "Welcome to ABsdC!";


let intropara = document.getElementById("intro");
console.log(intropara);
console.log(intropara.innerText);

intropara.innerHTML = "We use the DOM to manipulate the HTML documents, this is an introduction paragraph.";


document.write("<hr>");
document.write("<h2>This is a heading created using document.write()</h2>");
document.write("<p> <strong>Student Name</strong>: " + studentName + "</p>");
document.write("<p> <strong>Student Age</strong>: " + studentAge + "</p>");
document.write("<p> <strong>Student Age</strong>: " + JSON.stringify(studentinfo) + "</p>");